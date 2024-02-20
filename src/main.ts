import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoicGltcG9sbG8xOTc5IiwiYSI6ImNrenVod3hrZjA4NG4ydXMyY3p5bnkzZTkifQ.NQ1YJapNIqmqYt5zs9VQLA'

if ( !navigator.geolocation ) {
  alert ('Navegador no soporta la Geolocalizacion');
  throw new Error('Navegador no soporta la Geolocalizacion');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
