import {Types} from '../actions';
const initialState = {
  token: null,
  fcmToken: null,
  permissions: {
    notification: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGOUT:
      return {
        ...state,
        token: null,
      };
    case Types.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
    case Types.FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload.token,
      };
    case Types.SET_PERMISSIONS:
      return {
        ...state,
        permissions: {
          ...state.permissions,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
