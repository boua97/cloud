import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

import './map.css';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const GoogleMap = ({ google, location, zoomLevel }) => {
  return (
    <div className="google-map">
      <Map
        google={google}
        zoom={zoomLevel}
        initialCenter={location}
        center={location}
      >
        <Marker position={location} />
      </Map>
    </div>
  );
};

const apiKey = 'the key';

const getApiKey = () => {
  return {
    apiKey: apiKey,
  };
};

export default GoogleApiWrapper(getApiKey)(GoogleMap);
