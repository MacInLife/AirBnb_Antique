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
  loading: (isLoading) => ({
    type: Types.LOADING,
    payload: {
      isLoading
    }
  }),
  logout: () => ({
    type: Types.LOGOUT
  }),
  login: (token) => ({
    type: Types.LOGIN,
    payload: {
      token
    }
  })
};
