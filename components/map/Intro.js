'use client';

import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  APIProvider, Map, AdvancedMarker, Pin, InfoWindow,
} from '@vis.gl/react-google-maps';

export default function Intro() {
  const position = { lat: 36.17, lng: -86.76 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: '150px', width: '100%' }}>
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin background="grey" borderColor="green" glyphColor="purple" />
          </AdvancedMarker>

          {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>Nashville</InfoWindow>}
        </Map>
      </div>
    </APIProvider>
  );
}
