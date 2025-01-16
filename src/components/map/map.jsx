import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/pin';

function Map({items}){

  if (!items || items.length === 0) {
    return <div>No map items available</div>;
  }

  console.log(items, "MAP ITEMS LOG")
  return (
    <MapContainer center={[37.8044, -122.2712]} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map