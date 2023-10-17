import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <Text> Inscripcion </Text>
        <Button
        title="Back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
      </View>

    );
  }
}
