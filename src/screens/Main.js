
import Navigation from '../navigation';
import Loading from "../components/Loading"
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
function Main(props) {
    const { isLoading } = props
    return (
        <View style={{ flex: 1 }}>
            <Loading animating={isLoading} {...props} />
            <Navigation />
        </View>
    )
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(Main)
