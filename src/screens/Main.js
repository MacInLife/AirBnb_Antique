import Navigation from '../navigation';
import Loading from '../components/Loading';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bootstrap} from '../actions';
function Main(props) {
  useEffect(() => {
    props.bootstrapApp();
  });
  const {isLoading} = props;
  return (
    <View style={{flex: 1}}>
      <Loading animating={isLoading} {...props} />
      <Navigation />
    </View>
  );
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});
const mapDispatchToProps = dispatch => ({
  bootstrapApp: () => dispatch(bootstrap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
