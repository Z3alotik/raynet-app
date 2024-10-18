import { ClientDetailType } from "./ClientDetail.types";
import "./ClientDetail.styles.css";

function ClientDetail({ selectedClient }: ClientDetailType) {
  return (
    <div className="detailCard">
      <header>
        <p>
          {selectedClient.category.value}
          {`${selectedClient.state}${selectedClient.role}`}
        </p>
      </header>
      <div>
        <h1>{selectedClient.name}</h1>
      </div>
      <div className="address">
        <p>{`IČ ${selectedClient.regNumber}`}</p>
        <p>{selectedClient.contactAddress.address.street}</p>
        <p>
          {selectedClient.contactAddress.address.zipCode}
          {selectedClient.contactAddress.address.city}
        </p>
        <p>{selectedClient.contactAddress.address.country}</p>
      </div>
      <div>
        LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
        IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
        IPSUMLOREM IPSUM
      </div>
    </div>
  );
}

export default ClientDetail;
