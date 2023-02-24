import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function SearchBar({cityHandler}) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" color="black" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightIcon}>
            <AntDesign
              name="clockcircle"
              color="black"
              size={11}
              style={{marginRight: 6}}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
