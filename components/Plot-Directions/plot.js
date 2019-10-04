import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements'
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(sk.eyJ1IjoiY2hhcmxlc2NhcmlubyIsImEiOiJjazE4bmlvOW8wazEyM3FtejVkNDh0cTI3In0.n3SX_5VYQIEKoBetZnIA4Q);

export default class PlotScreen extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
          <MapboxGL.MapView
            ref={(c) => this._map = c}
            style={{flex: 1}}>
        </MapboxGL.MapView>
      </View>
      );
  }
}
