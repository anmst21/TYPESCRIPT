import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// import { googleApiKey } from '../keys';

// function loadGoogleMapsApi() {
//   const script = document.createElement('script');
//   script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}`;
//   script.async = true;
//   document.body.appendChild(script);
// }

// loadGoogleMapsApi();

const user = new User();

const company = new Company();

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
