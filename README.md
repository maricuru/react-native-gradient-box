# react-native-gradient-box

* Component of box with Gradient border

## Supported environment

* Expo

## Use with Expo

### Install

* `npm install --save react-native-gradient-box-expo`

### Usage

```js
import GradientBox from 'react-native-gradient-box-expo';

export default class App extends React.Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}
```

## Props

* Extended from LinearGradient
  - colors (required)
  - start
  - end
  - location

* Other props
  - borderWidth (required)
  - borderRadius
  - containerStyle
  - style
