import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

const Test = () => {

  const origin = { lat: -21.463640, lng: 47.5332608 } // ENI
  const destination = { lat: -21.463640, lng: 47.109970 } //EMIT

  return (
     
    <APIProvider apiKey={'AIzaSyB_1heZvj0wWE4T8olC_mzVK7rW0TSKC0U'}>
    <div style={{height: '1000px', width: '1000px'}}>
      <Map center={origin} mapId={"118457739310ec68"} zoom={12}>
        <AdvancedMarker position={destination}>

        </AdvancedMarker>
      </Map>
    </div>
    </APIProvider>
  )


};

export default Test;