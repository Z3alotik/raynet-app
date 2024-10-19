import { useEffect, useState } from "react";
import "./App.css";
import ClientList from "./Components/ClientList/ClientList";
import { Client } from "./Components/ClientList/ClientList.types";
import Header from "./Components/Header/Header";

const API_KEY = "crm-aa2900838a574cbea900838a57dcbe0b";
const BASE_URL = "https://app.raynet.cz/api/v2/company/";
const INSTANCE_NAME = "bartosektest";
const USER = "11Bart11@email.cz";

function App() {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchClients(search: string) {
      try {
        const res = await fetch(
          `${BASE_URL}?offset=0&limit=30&fulltext==${search}`,
          {
            method: "GET",
            headers: {
              Authorization: "Basic " + btoa(`${USER}:${API_KEY}`),
              "X-Instance-Name": INSTANCE_NAME,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setClients(data.data);
      } catch {
        alert("There was a problem loading data...");
      }
    }
    fetchClients(searchQuery);
  }, [searchQuery]);

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
