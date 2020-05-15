import {login as loginService} from '../services';

export const Types = {
  SET_LISTINGS: 'SET_LISTINGS',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
};
export const Actions = {
  setListings: results => ({
    type: Types.SET_LISTINGS,
    payload: results,
  }),
  loading: isLoading => ({
    type: Types.LOADING,
    payload: {
      isLoading,
    },
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
  login: token => ({
    type: Types.LOGIN,
    payload: {
      token,
    },
  }),
};

export function requestLogin(email, password) {
  return function(dispatch) {
    dispatch(Actions.loading(true));
    return loginService(email, password)
      .then(response => {
        // On cache le loader
        dispatch(Actions.loading(false));
        // On sauvegarde du token dans le local storage
        dispatch(Actions.login(response.authorization));
      })
      .catch(err => {
        dispatch(Actions.loading(false));
        throw err;
      });
  };
}
