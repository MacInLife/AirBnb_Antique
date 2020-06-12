import React from 'react';
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const { token } = this.props
        // This will switch to the ExploreContainer screen or Auth screen 
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(token ? 'ExploreContainer' : 'Login');
    };

    // Render any loading content that you like here
    render() {
        return null
    }
}
const mapStateToProps = state => ({
    token: state.user.token
});

export default connect(mapStateToProps)(AuthLoadingScreen)
