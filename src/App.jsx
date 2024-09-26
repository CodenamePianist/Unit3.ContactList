import { useState } from 'react'
import ContactList from './Components/ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <>
      <ContactList/>
    </>
  )
}

export default App
