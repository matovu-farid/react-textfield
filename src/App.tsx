import { useState } from 'react'
import './App.css'
import TextField from './TextField'

function App() {
  const [text, setText] = useState('')

  return (
    <TextField value={text} onChange={ setText } prefix="$"  validations={
      [
        {
          check: () => text.length < 5,
          message: 'Must be at least 5 characters'
        }
      ]
    
    }/>
  )
}

export default App
