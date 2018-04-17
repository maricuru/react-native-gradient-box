import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradientBox from 'react-native-gradient-box-expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GradientBox
          colors={['#fcc', '#cfc', '#ccf']}
          start={[1, 0]}
          end={[0, 1]}
          borderWidth={5}
          borderRadius={5}
          style={{ padding: 5 }}
        >
          <Text>Hello, GradientBox!</Text>
        </GradientBox>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <GradientBox
            colors={['#66f', '#bbf', '#ccf']}
            start={[1, 0]}
            end={[0, 1]}
            borderWidth={5}
            borderRadius={5}
            style={{ padding: 3 }}
          >
            <Text>Left</Text>
          </GradientBox>

          <GradientBox
            colors={['#fcc', '#fbb', '#f66']}
            start={[1, 0]}
            end={[0, 1]}
            borderWidth={5}
            borderRadius={5}
            containerStyle={{ marginLeft: 15 }}
            style={{ padding: 3 }}
          >
            <Text>Right with ContainerStyle</Text>
          </GradientBox>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
