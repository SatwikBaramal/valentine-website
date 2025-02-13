import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    // Load Google Fonts dynamically
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div className="header">
      <h1 className="name">Satwik Baramal</h1>
    </div>
  )
}

export default Header