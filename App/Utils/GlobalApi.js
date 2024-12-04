 import axios from 'axios';
 const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
 const API_KEY="AIfeGtY3tthub-Q9wFgh_GRgrHT4OXpxwgdWqHe";
//  'AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw'
// 'AIzaSyAmSrpYJ4kfOs4yjhl3HBltpqD_ZSvzhdc'
// 'AIfeGtY3tthub-Q9wFgh_GRgrHT4OXpxwgdWqHe'

 const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': ['places.displayName', 'places.formattedAddress', 'places.location', 'places.evChargeOptions','places.shortFormattedAddress', 'places.photos','places.id'] 
        // X-Goog-FieldMask - help to retrieve only essential information from google api
     
    }
 }

 const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config)

 export default {
  
    NewNearByPlace,
    API_KEY
 }
