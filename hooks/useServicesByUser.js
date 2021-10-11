import {useState, useEffect}  from "react";
import rubik from '../api/rubik';

export default (userId) => {
    const [services, setServices] = useState([]);

    // For search purposes
    //const [findService, setFindService] = useState([]); 

    const searchApi = async userIdParam => {
        const response = await rubik.get('/user/service/user/' + userIdParam);
        setServices(response.data);
    }

    useEffect(() => {
        searchApi(userId);
    }, [] );

    return [services, setServices];
}