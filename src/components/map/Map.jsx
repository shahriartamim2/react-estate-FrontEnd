import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./map.scss"
import "leaflet/dist/leaflet.css";


const Map = () => {

    const position = [23.774649, 90.402514];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
