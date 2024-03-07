import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer ,CircleMarker} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Assurez-vous d'importer les styles de Leaflet
import GeoLocalisation from "./GeoLocalisation";
import L from "leaflet";

const MarkerIcon = new L.Icon({
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46]
});

const Mapx = () => {
  const [position, setPosition] = useState({ lat: -21.4416, lng: 47.0876 });
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef();
  const [showMarker, setShowMarker] = useState(false);

  const location = GeoLocalisation();

  useEffect(() => {
    if (location.loaded && !location.error) {
      setPosition(location.coordinates);
      setZoom(12);
    }
  }, [location]);

  useEffect(() => {
    if (mapRef.current && location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [position.lat, position.lng],
        zoom,
        { animate: true },
        console.log("tonga eto") 
        );
    }
  }, []);
  

  const showPosition = () => {

    alert('mandady')

    if (!location.loaded) {
      alert("La géolocalisation n'est pas encore chargée.");
      return;
    }

    if (location.error) {
      alert(location.error.message);
      return;
    }
   
    setPosition(location.coordinates);
    
   
    setShowMarker(true)

    setZoom(12);
  };

  return (
    <div className="card">
      <div class="card">
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
        whenCreated={map => mapRef.current = map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          <CircleMarker center={[position.lat, position.lng]} radius={5} color="blue" />
      
      </MapContainer>
      </div>
      <hr></hr>
      

      <button onClick={showPosition}>Ok</button>
    </div>
  );
};

export default Mapx;
