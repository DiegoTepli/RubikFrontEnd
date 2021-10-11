import {useState, useEffect}  from "react";
import rubik from '../api/rubik';

export default (userId) => {
    const [userComments, setUserComments] = useState([]); 

    const searchComments = async (userId) => {
        const response = await rubik.get('/comments/' + userId);
        setUserComments(response.data);
    }

    useEffect(() => {
        searchComments(userId);
    }, [] );

    return [userComments, searchComments];
}