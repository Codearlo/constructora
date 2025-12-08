// src/contexts/NotificationContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../services/supabase'
import { useAuth } from './AuthContext'
import { toast } from 'react-hot-toast'

const NotificationContext = createContext({})

export const NotificationProvider = ({ children }) => {
  const { user, role } = useAuth()
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)

  // ⚠️ DÓNDE ESTÁ EL CÓDIGO DE PUSH NOTIFICATION:
  // La lógica para la suscripción al navegador (donde está VAPID_KEY)
  // se encuentra en la utilidad: src/utils/pushSubscription.js
  
  useEffect(() => {
    if (!user || !role) return

    let channel

    // 1. ESCUCHAR NOTIFICACIONES BASADO EN EL ROL
    
    // Si el rol es de administración (Ingeniero, RRHH, Contabilidad)
    if (role === 'ingeniero' || role === 'rrhh' || role === 'contabilidad') {
      // Escuchar por NUEVOS tickets
      channel = supabase
        .channel('admin-notifications')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'tickets',
            // En un sistema "bien hecho", filtraríamos por 'assigned_to', 
            // pero por ahora, notificamos la creación de tickets.
          },
          (payload) => {
            const newTicket = payload.new
            toast.success(`🎉 Nuevo Ticket #${newTicket.id} Creado.`, { duration: 5000 })
            setNotifications((prev) => [`Nuevo ticket #${newTicket.id} (${newTicket.title})`, ...prev])
            setUnreadCount((prev) => prev + 1)
          }
        )
        .subscribe()
    } 
    
    // Si el rol es 'trabajador'
    if (role === 'trabajador') {
      // Escuchar por ACTUALIZACIONES en MIS tickets
      channel = supabase
        .channel('worker-notifications')
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'tickets',
            filter: `user_email=eq.${user.email}`, // Solo tickets creados por mi
          },
          (payload) => {
            if (payload.old.status !== payload.new.status) {
              const newStatus = payload.new.status
              toast(`Estado: ${newStatus.toUpperCase()}`, { icon: '✅', duration: 5000 })
              const message = `Ticket #${payload.new.id} actualizado a: ${newStatus.toUpperCase()}`
              setNotifications((prev) => [message, ...prev])
              setUnreadCount((prev) => prev + 1)
            }
          }
        )
        .subscribe()
    }

    // 2. Limpieza al desmontar
    return () => {
      if (channel) {
        supabase.removeChannel(channel)
      }
    }
  }, [user, role])

  const markAllAsRead = () => {
    setUnreadCount(0)
    // No borramos las notificaciones, solo el contador.
  }

  const value = {
    notifications,
    unreadCount,
    markAllAsRead,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  return useContext(NotificationContext)
}