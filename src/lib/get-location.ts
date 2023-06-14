import axios from 'axios';

interface OpenStreetMapResult {
  display_name: string;
  lon: string;
  lat: string;
}

export async function getLocationCoordinate(place: string) {
  const result = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${place}&format=json`
  );

  const res: OpenStreetMapResult = result.data[0] as OpenStreetMapResult;
  return res;
}
