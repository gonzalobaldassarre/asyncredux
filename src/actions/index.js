import jsonplaceholder from '../api/jsonplaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonplaceholder.get('/posts');
        dispatch({  type: 'FETCH_POSTS', payload: response.data});
};

// fet user sirve solo una vez, si hay q traer el registro de nuev
// hay que crear otra funcion con la misma logica pero sin memoize

export const fetchUser = (id) => (dispatch) => _fetchUser(id,dispatch);

const _fetchUser = _.memoize( async (id, dispatch) => {
        const response = await jsonplaceholder.get('/users/'+id);
        console.log('xxxx', id);
        dispatch({  type: 'FETCH_USER', payload: response.data});      
});

    
    