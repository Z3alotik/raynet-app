import { useState } from "react";
import "./ClientList.styles.css";
import ClientDetail from "./components/ClientDetail/ClientDetail";
import { Client, ClientListProps } from "./ClientList.types";
import ClientTableRow from "./components/ClientTableRow/ClientTableRow";

function ClientList({ clients }: ClientListProps) {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleSelectClient = (client: Client) => {
    if (selectedClient && selectedClient.id === client.id) {
      setSelectedClient(null);
    } else {
      setSelectedClient(client);
    }
  };

  return (
    <>
      <div className="main">
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
                <ClientTableRow
                  client={client}
                  selectedClient={selectedClient}
                  handleSelectClient={handleSelectClient}
                  key={client.id}
                />
              ))
            ) : (
              <tr>
                <td colSpan={8}>No clients found</td>
              </tr>
            )}
          </tbody>
        </table>
        {selectedClient && <ClientDetail selectedClient={selectedClient} />}
      </div>
    </>
  );
}

export default ClientList;
