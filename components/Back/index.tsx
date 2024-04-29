import {View, Image} from 'react-native'

import {styles} from './styles'
export function Back(){
  return(
    <View>
      <Image source={require('./back.png')}/>
    </View>
  )
}