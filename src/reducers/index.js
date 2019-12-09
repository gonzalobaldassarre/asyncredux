import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersRedcuer from './usersRedcuer';

export default combineReducers({
    post: postsReducer, 
    users: usersRedcuer
}); 