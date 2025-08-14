"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const pin = L.divIcon({
  className: "",
  html: `<span style="background:#ef4444;width:1rem;height:1rem;display:block;left:-0.5rem;top:-0.5rem;position:relative;border-radius:1rem 1rem 0;transform:rotate(45deg);border:2px solid white;"></span>`
});

export default function LeafletMapInner({
  center,
  marker,
  zoom = 2,
  label = "Here",
}: {
  center: [number, number];
  marker?: [number, number];
  zoom?: number;
  label?: string;
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: 420, width: "100%" }}
      scrollWheelZoom
      dragging
      doubleClickZoom
      touchZoom
      zoomControl
      worldCopyJump
      minZoom={2}
      maxZoom={19}
      maxBounds={[[-85, -180], [85, 180]]}
      maxBoundsViscosity={0.7}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { (marker ?? center) && (
        <Marker position={marker ?? center} icon={pin}>
          <Popup>{label}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
