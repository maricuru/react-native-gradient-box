# react-native-gradient-box-expo

* Component of box with Gradient border

![ScreenShot of GradientBox](https://raw.githubusercontent.com/maricuru/react-native-gradient-box/images/screenshot.png)

## Install

* `npm install --save react-native-gradient-box-expo`

## Usage

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

  * colors (required)
  * start
  * end
  * location

* Other props
  * borderWidth (required)
  * borderRadius
  * containerStyle
  * style
