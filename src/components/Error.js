import React from 'react'
import { View, Text } from 'react-native'


export default function (props) {
    const { message } = props
    return message ? (
        <View style={{ justifyContent: 'center', backgroundColor: 'red', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>{message}</Text>
        </View>
    ) : null
}