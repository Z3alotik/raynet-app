import { ClientDetailType } from "./ClientDetail.types";
import "./ClientDetail.styles.css";

const ClientDetail = ({ selectedClient }: ClientDetailType) => {
  return (
    <div className="detail-card">
      <header className="detail-header">
        <p className="detail-category">{selectedClient.category.value}</p>
        <p className="detail-state">
          {selectedClient.state} {selectedClient.role}
        </p>
      </header>
      <div className="detail-name">
        <h1>{selectedClient.name}</h1>
      </div>
      <div className="detail-address">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
          alt="client-image"
          className="client-image"
        />
        <div className="address-text">
          <p>{`IČ ${selectedClient.regNumber}`}</p>
          <p>{selectedClient.contactAddress.address.street}</p>
          <p>
            {selectedClient.contactAddress.address.zipCode}{" "}
            {selectedClient.contactAddress.address.city}
          </p>
          <p>{selectedClient.contactAddress.address.country}</p>
          <a href="/">Zobrazit na mapě</a>
        </div>
      </div>
      <div className="detail-description">
        LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
        IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
        IPSUMLOREM IPSUM
      </div>
      <div className="detail-owner">
        <p>{`Vlastník: ${selectedClient.owner.fullName}`}</p>
      </div>
    </div>
  );
};

export default ClientDetail;
