import { ClientTableRowProps } from "./ClientTableRow.types";

function ClientTableRow({ client, handleSelectClient }: ClientTableRowProps) {
  return (
    <tr onClick={() => handleSelectClient(client)} className="item">
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
}

export default ClientTableRow;
