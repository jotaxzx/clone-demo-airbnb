import getCenter from 'geolib/es/getCenter';
import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl'




const Map = ({ searchResults }) => {

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));


  const center = getCenter(coordinates)

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8
  })

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/xzepp/cla178i15000414mjvjbxlq63"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onMove={(e) => setViewPort(e.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          
          >
          <p className='cursor-pointer text-2xl animate-bounce'>
            📍
          </p>
        </Marker>
        </div>
      ))
      }



    </ReactMapGl>
  )
}

export default Map