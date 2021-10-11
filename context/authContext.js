import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import rubik from '../api/rubik';
import { navigate } from '../screens/navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signIn':
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

const signIn = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await rubik.post('/auth/signin', { email, password });
            await AsyncStorage.setItem('role', response.data.role);
            await AsyncStorage.setItem('token', response.headers.token);
            dispatch({
                type: 'signIn',
                payload: response.headers.token
            })
            navigate('UserMainTabScreen');
        } catch (err) {
            console.log("LOGIN ERROR");
            console.log(err);
        }
    };
};

const signOut = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut },
    { token: null }
);