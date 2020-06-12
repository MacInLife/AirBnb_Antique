import React from 'react'
import { ActivityIndicator, View } from 'react-native'


export default function OverlayLoading(props) {
    const { isLoading } = props
    return isLoading ? (
        <View style={{ backgroundColor: '#008388' }} >
            <ActivityIndicator size="large" color="red" animating={true} />
        </View>
    ) : null
}