import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(API_URL);
        const responseObj = await response.json();
        setContact(responseObj);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  return <p>{contact ? contact.name : `I have no idea`}</p>;
}
