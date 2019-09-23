import {Dimensions, PixelRatio} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

let screen = {
  width: screenWidth,
  height: screenHeight,
}

export default screen