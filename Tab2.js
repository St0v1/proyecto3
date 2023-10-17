import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Swiper from 'react-native-swiper'

export default class TAB2 extends Component {
  render() {
    const youtubeVideoUrl1 = 'https://www.youtube.com/watch?v=rvYZRskNV3w'; 
    const youtubeVideoUrl2 = 'https://www.youtube.com/watch?v=WIuHlt6lc30'; 
    const youtubeVideoUrl3 = 'https://www.youtube.com/watch?v=XLjmVeQa02E'; 

    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <View style={styles.video}>
              <WebView
              source={{ uri: youtubeVideoUrl1 }}
             onLoad={console.log("loaded 1!")}
            />
          </View>
        
        </View>
        <View style={styles.slide2}>
        <View style={styles.video}>
              <WebView
              source={{ uri: youtubeVideoUrl2 }}
             onLoad={console.log("loaded 2!")}
            />
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.video}>
              <WebView
              source={{ uri: youtubeVideoUrl3 }}
             onLoad={console.log("loaded 3!")}
            />
          </View>
        </View>
      </Swiper>
    );

    
  }
}

const styles = StyleSheet.create({
video: {
    width:400,
    height:250,
},

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
