import { useState } from "react";
import { Client } from "./ClientList.types";

const useClientList = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleSelectClient = (client: Client) => {
    if (selectedClient && selectedClient.id === client.id) {
      setSelectedClient(null);
    } else {
      setSelectedClient(client);
    }
  };
  return {
    handleSelectClient,
    selectedClient,
  };
};

export default useClientList;
