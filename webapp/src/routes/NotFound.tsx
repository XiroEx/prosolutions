function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-[var(--color-secondary)] underline">Go Home</a>
    </div>
  )
}

export default NotFound