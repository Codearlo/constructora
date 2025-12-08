// src/utils/pushSubscription.js
import { supabase } from '../services/supabase'

// ⚠️ Esta clave se lee del archivo .env que creamos
const VAPID_PUBLIC_KEY = import.meta.env.VITE_SUPABASE_VAPID_KEY

// Función auxiliar para convertir la llave VAPID de string a ArrayBuffer
function urlBase64ToUint8Array(base64String) {
  if (!base64String) {
    console.warn('VAPID_PUBLIC_KEY no encontrada. Las notificaciones push no funcionarán.')
    return null
  }
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export async function subscribeToPushNotifications(user) {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    throw new Error('Push no soportado en este navegador')
  }

  // Registramos el Service Worker
  const registration = await navigator.serviceWorker.ready

  // Verificamos permisos
  const permission = await Notification.requestPermission()
  if (permission !== 'granted') {
    throw new Error('Permiso denegado')
  }

  // Obtenemos o creamos una nueva suscripción
  let subscription = await registration.pushManager.getSubscription()

  if (!subscription) {
    const convertedKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    if (!convertedKey) throw new Error('Clave VAPID no válida')

    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedKey
    })
  }

  // Guardamos en Supabase (tabla push_subscriptions)
  if (subscription) {
    await supabase.from('push_subscriptions').upsert({ 
      user_id: user.id,
      subscription: subscription 
    }, { onConflict: 'user_id' })
  }

  return subscription
}