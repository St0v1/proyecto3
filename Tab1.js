import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>YouTube Video</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});