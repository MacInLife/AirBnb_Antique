import React from "react"

import { View, Text } from 'react-native'


function ExperienceDetail(props) {
    const { navigation } = props
    return <View style={{ flex: 1 }}><Text>{`Experience detail ${navigation.getParam('title', '[MISSING_TITLE]')}`}</Text></View>
}


export default ExperienceDetail