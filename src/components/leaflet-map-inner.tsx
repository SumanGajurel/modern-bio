"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { DivIcon, LatLngExpression } from "leaflet";

// Client-only react-leaflet components
const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  { ssr: false }
);
const TileLayer = dynamic(
  async () => (await import("react-leaflet")).TileLayer,
  { ssr: false }
);
const Marker = dynamic(
  async () => (await import("react-leaflet")).Marker,
  { ssr: false }
);
const Popup = dynamic(
  async () => (await import("react-leaflet")).Popup,
  { ssr: false }
);

type LatLng = [number, number];

export default function LeafletMapInner({
  center,
  marker,
  zoom = 2,
  label = "Here",
}: {
  center: LatLng;       // simple tuple for your props
  marker?: LatLng;
  zoom?: number;
  label?: string;
}) {
  // Create the Leaflet DivIcon on the client only
  const [pin, setPin] = React.useState<DivIcon | null>(null);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      const L = await import("leaflet");
      const icon = L.divIcon({
        className: "",
        html: `
          <span style="
            background:#ef4444;width:1rem;height:1rem;display:block;
            left:-0.5rem;top:-0.5rem;position:relative;border-radius:1rem 1rem 0;
            transform:rotate(45deg);border:2px solid white;
          "></span>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });
      if (mounted) setPin(icon);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // React-Leaflet expects LatLngExpression
  const centerExpr: LatLngExpression = center;
  const markerExpr: LatLngExpression | undefined = marker ?? center;

  return (
    <MapContainer
      center={centerExpr}
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
      maxBounds={[
        [-85, -180],
        [85, 180],
      ]}
      maxBoundsViscosity={0.7}
    >
      <TileLayer
        attribution={'&copy; OpenStreetMap contributors'}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {pin && markerExpr && (
        <Marker position={markerExpr} icon={pin}>
          <Popup>{label}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
