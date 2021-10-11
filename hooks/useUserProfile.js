import { useState, useEffect } from "react";
import rubik from '../api/rubik';

export default (userId) => {
    const [userData, setUserData] = useState(null);
    const searchApi = async (id) => {
        try {
            const response = await rubik.get('/user/service/' + id);
            setUserData(response.data);
        } catch (err) {
            console.log("errorrrr");
            console.log(err);
        }
    }

    useEffect(() => {
        searchApi(userId);
    }, []);

    return [userData];
}
