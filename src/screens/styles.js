import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  structGlobal: {
    flex: 1,
    backgroundColor: '#008388',
    flexDirection: 'column',
    padding: 20,
  },
  containerConnect: {
    padding: 10,
    backgroundColor: '#008388',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  croix: {
    color: Colors.white,
    fontSize: 40,
    margin: 'auto',
  },
  connect: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 'auto',
    textAlignVertical: 'center',
  },
  containerLogo: {
    marginTop: 50,
    marginBottom: 40,
  },
  logo: {
    width: 50,
    height: 50,
  },
  titre: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 40,
    color: 'white',
  },
  titres: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    color: 'black',
  },
  titresExp: {
    fontSize: 25,
    fontWeight: '300',
    marginLeft: 10,
    color: 'black',
  },
  textSavoirPlus: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  textP: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  textSoulign: {
    textDecorationLine: 'underline',
  },
  iconclose: {
    margin: 5,
    color: Colors.white,
  },
  textVoirPlus: {
    position: 'absolute',
    top: 10,
    right: 20,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.black,
  },
});
export default styles;
