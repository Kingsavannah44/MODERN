export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export function getDevicePixelRatio() {
  if (typeof window === 'undefined') return 1
  return Math.min(window.devicePixelRatio, 2)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}