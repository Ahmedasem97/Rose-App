interface position {
  lat: number;
  lng: number;
}

export default interface GoogleMapsMarker {
  position: position;
  options?: {
    animation?: typeof google.maps.Animation;
  };
}
