import { useState } from "react";
import ContactList from "./Components/ContactList";
import "./App.css";
import SelectedContact from "./Components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
          <button
            onClick={() => {
              setSelectedContactId(null);
            }}
          >
            Click me!
          </button>
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
