import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Marker } from 'react-native-maps';
import Colors from '../../Utils/Colors';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';

export default function Markers({ index, place }) {
  const { selectedMarker, setSelectedMarker } = useContext(SelectMarkerContext);

  // Ensure the place and location exist and have valid coordinates
  const latitude = place?.location?.latitude;
  const longitude = place?.location?.longitude;

  console.log(`Marker ${index} - Latitude: ${latitude}, Longitude: ${longitude}`);

  if (typeof latitude !== 'number' || typeof longitude !== 'number' || isNaN(latitude) || isNaN(longitude)) {
    console.error(`Invalid coordinates for marker ${index}`);
    return null;
  }

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      onPress={() => setSelectedMarker(index)}
    >
      {selectedMarker === index ? (
        <Image
          source={require('./../../../assets/images/marker3.png')}
          style={{ width: 71, height: 70 }}
        />
      ) : (
        <Image
          source={require('./../../../assets/images/marker2.png')}
          style={{ width: 60, height: 60 }}
        />
      )}
    </Marker>
  );
}