import { useState } from "react";
import ContactList from "./Components/ContactList";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? <div>Short Message</div> : <ContactList />}
      <ContactList setSelectedContactId={setSelectedContactId} />
    </>
  );
}

export default App;
