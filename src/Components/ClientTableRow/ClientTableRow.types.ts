import { Client } from "../ClientList/ClientList.types";

export interface ClientTableRowProps {
  client: Client;
  selectedClient: Client | null;
  handleSelectClient: (client: Client) => void;
}
