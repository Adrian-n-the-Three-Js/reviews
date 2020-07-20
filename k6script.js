import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1500,
  duration: '5s',
}

export default function () {
  const hotelId = Math.floor(Math.random() * (1000 - 1) + 1);
  http.get(`http://localhost:3004/hotels/${hotelId}`);
  sleep(1);
}