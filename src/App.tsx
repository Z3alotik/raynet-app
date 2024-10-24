import { useState } from "react";
import "./App.css";
import ClientList from "./Components/ClientList/ClientList";
import Header from "./Components/Header/Header";
import { useFetchClients } from "./hooks/useFetchClients";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { clients, loading } = useFetchClients(searchQuery);

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading && <p>Loading...</p>}
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
