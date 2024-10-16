import { View, Text } from 'react-native'
import React from 'react'

const ItemDetail = ({route}:any) => {
    console.log(route.param);
    
  return (
    <View>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetail