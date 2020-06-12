import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const stylesCo = StyleSheet.create({
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
  connect: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 'auto',
    textAlignVertical: 'center',
  },
  titre: {
    fontSize: 30,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 40,
    color: 'white',
    fontWeight: '700',
  },
  fleche: {
    color: Colors.white,
    fontSize: 30,
    margin: 'auto',
    transform: [{rotate: '180deg'}],
  },
  textSavoirPlus: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  txtContentType: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  //Bouton Bottom
  scrollArrow: {
    position: 'absolute',
    width: 60,
    height: 60,
    fontSize: 40,
    bottom: 10,
    right: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.white,
    borderRadius: '20px',
    opacity: 0.2,
    borderRadius: 50,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textScrollArrow: {
    paddingHorizontal: 12,
    fontSize: 25,
    color: '#008388',
  },
  icongo: {
    paddingTop: 5,
    color: Colors.white,
  },
  //CSS de Fenêtre Modal
  plusOptionsBtn: {flex: 1, justifyContent: 'center'},

  //CSS Bouton valider email and password
  textvalid: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
});
export default stylesCo;
