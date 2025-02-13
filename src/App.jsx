import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { Analytics } from "@vercel/analytics/react"
import ThankYou from './components/ThankYou'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  
  useEffect(() => {
    setYesPressed(false)
  }, [])

  const yesButtonSize = 16 + noCount * 4
  
  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely sure?',
      'This could be a mistake!',
      'Have a heart!',
      'Don\'t be so cold!',
      'Change of heart?',
      'Wouldn\'t you reconsider?',
      'Is that your final answer?',
      'You\'re breaking my heart ;('
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="valentine-container">
      <Analytics/>
      <Header/>
      {yesPressed ? (
        <ThankYou onGoBack={() => setYesPressed(false)} />
      ) : (
        <>
          <img
          src="/anca.jpg"
          alt="My GF"
          className="thank-you-image"
          style={{ marginBottom: '20px' }}
        />
          <h1>Anca</h1>
          <h1> Will you be my Valentine?</h1>
          <div className="buttons-container">
            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button 
              className="no-button"
              onClick={() => setNoCount(noCount + 1)}
              style={{ transform: `translate(${Math.random() * 100}px, ${Math.random() * 100}px)` }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App