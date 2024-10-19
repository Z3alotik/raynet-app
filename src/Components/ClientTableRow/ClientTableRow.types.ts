import { Client } from "../ClientList/ClientList.types";

export interface ClientTableRowProps {
  client: Client;
  handleSelectClient: (client: Client) => void;
}
