import { Client } from "../../ClientList.types";

export interface ClientTableRowProps {
  client: Client;
  selectedClient: Client | null;
  handleSelectClient: (client: Client) => void;
}
