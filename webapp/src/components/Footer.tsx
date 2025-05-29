function Footer() {
  return (
    <footer className="text-center text-xs text-gray-500 py-4 max-w-7xl mx-auto">
      &copy; {new Date().getFullYear()} Pro Solutions. All rights reserved.
      <span className="block mt-1">
      built by <a href="https://redbtn.io" className="underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">redbtn</a>
      </span>
    </footer>
  )
}

export default Footer