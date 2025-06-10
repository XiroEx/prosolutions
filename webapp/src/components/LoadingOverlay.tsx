function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[var(--color-primary)] border-b-4"></div>
    </div>
  )
}

export default LoadingOverlay