import { ClientTableRowProps } from "./ClientTableRow.types";
import "./ClientTableRow.styles.css";

const ClientTableRow = ({
  client,
  handleSelectClient,
  selectedClient,
}: ClientTableRowProps) => {
  return (
    <tr
      onClick={() => handleSelectClient(client)}
      className={
        selectedClient && selectedClient.id === client.id ? "selected-row" : ""
      }
    >
      <td>{client.name}</td>
      <td>{client.state}</td>
      <td>{client.role}</td>
      <td>{client.rating}</td>
      <td>{client.owner.fullName}</td>
      <td>{client.regNumber}</td>
      <td>{client.contactAddress?.address?.city}</td>
      <td>{client.category.value}</td>
    </tr>
  );
};

export default ClientTableRow;
