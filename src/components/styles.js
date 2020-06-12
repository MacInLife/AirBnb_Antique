import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';

const styles = StyleSheet.create({
  //CSS des Boutons
  decoBouton: {
    borderRadius: 50,
    padding: 12,
    backgroundColor: Colors.white,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBouton: {
    color: '#008388',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:
      'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
  },
  facebookButtonIcon: {
    color: '#008388',
  },
  iconeFb: {
    position: 'absolute',
    left: 20,
    top: 15,
    paddingVertical: 0,
  },
  //CSS de Fenêtre Modal
  plusOptionsBtn: {flex: 1, justifyContent: 'center'},

  //CSS de Champ
  champ: {
    marginTop: 15,
    marginBottom: 15,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    color: Colors.white,
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  textShowPassword: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    color: Colors.white,
    textAlign: 'left',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  textShowPassword: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },

  //CSS de Catégories
  container: {
    flexDirection: 'row',
  },
  card: {
    margin: 10,
    flex: 2.5 / 5,
  },
  image: {
    width: 100,
    height: 100,
  },

  //CSS de Expériences
  containerExp: {
    flexDirection: 'row',
  },
  cardExp: {
    margin: 10,
    flex: 2 / 3,
    width: 157,
  },
  imageExp: {
    borderRadius: 10,
    width: 157,
    height: 100,
    marginBottom: 10,
  },
  paragrapheExp: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  prixExp: {
    color: Colors.grey,
    opacity: 0.7,
    marginBottom: 5,
    marginLeft: 5,
  },

  wrapper: {
    height: 12,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  coeur: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  iconclose: {
    margin: 5,
    color: Colors.white,
  },
  starsPerson: {
    flexDirection: 'row',
  },

  // scrollView: {
  //   paddingTop: 100,
  // },
  // scrollViewContent: {
  //   paddingBottom: 80,
  // },
  // categories: {
  //   marginBottom: 40,
  // },
  // heading: {
  //   fontSize: 22,
  //   fontWeight: '600',
  //   paddingLeft: 20,
  //   paddingBottom: 20,
  //   color: Colors.gray04,
  // },
  //CSS Bouton valider email and password
  textValid: {
    color: '#bb0b0b',
    fontSize: 18,
    marginBottom: 20,
  },
});
export default styles;
