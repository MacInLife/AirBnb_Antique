import { combineReducers } from 'redux';
import listings from "./listings"
import app from "./app"
import user from "./user"

/**
 * combineReducers() permet de combiner les différents reducers, ce qui est plus pratique pour organiser les reducers.
 *
 * Dans notre cas le state général de l'application aura cette forme
 * {
 *   listings : {
 *     experiences: [....]
 *   },
 *   app: {
 *     isLoading: true
 *   }
 * }
 */

export default combineReducers({
  listings,
  app,
  user
});
