import {NavigationActions} from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    console.log("navigatorrr");
    console.log(navigator);
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
