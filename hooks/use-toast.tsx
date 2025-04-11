import { useState, useCallback } from 'react'

interface ToastMessage {
  message: string
  type: 'success' | 'error' | 'info'
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastMessage | null>(null)

  const showToast = useCallback((message: string, type: ToastMessage['type'] = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  return {
    toast,
    showToast
  }
}

export default useToast 