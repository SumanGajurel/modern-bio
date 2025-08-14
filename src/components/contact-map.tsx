"use client";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./leaflet-map-inner"), { ssr: false });

export default function ContactMap(
  props: { center: [number, number]; zoom?: number; label?: string; marker?: [number, number] }
) {
  return <Map {...props} />;
}
