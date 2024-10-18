import { useEffect, useState } from "react";
import "./ClientList.modules.css";
import ClientDetail from "../ClientDetail/ClientDetail";
import { Client } from "./ClientList.types";

const API_KEY = "crm-aa2900838a574cbea900838a57dcbe0b";
const BASE_URL = "https://app.raynet.cz/api/v2/company/";
const INSTANCE_NAME = "bartosektest";
const USER = "11Bart11@email.cz";

function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchClients(search: string) {
      try {
        const res = await fetch(
          `${BASE_URL}?offset=0&limit=30&fulltext==${encodeURIComponent(
            search
          )}`,
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

  const handleSelectClient = (client: Client) => {
    if (selectedClient && selectedClient.id === client.id) {
      setSelectedClient(null);
    } else {
      setSelectedClient(client);
    }
  };

  return (
    <>
      <div>
        <div className="App">
          <header>Klienti</header>
          <input
            type="text"
            placeholder="Hledej..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Název/Jméno</th>
              <th>Stav</th>
              <th>Vztah</th>
              <th>Rating</th>
              <th>Vlastník</th>
              <th>IČ</th>
              <th>Město</th>
              <th>Kategorie</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id} onClick={() => handleSelectClient(client)}>
                  <td className="item">{client.name}</td>
                  <td className="item">{client.state}</td>
                  <td className="item">{client.role}</td>
                  <td className="item">{client.rating}</td>
                  <td className="item">{client.owner.fullName}</td>
                  <td className="item">{client.regNumber}</td>
                  <td className="item">{client.contactAddress.address.city}</td>
                  <td className="item">{client.category.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No clients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedClient && <ClientDetail selectedClient={selectedClient} />}
    </>
  );
}

export default ClientList;
