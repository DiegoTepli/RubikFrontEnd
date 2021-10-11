import {useState, useEffect}  from "react";
import rubik from '../api/rubik';

export default (categoryId) => {
    const [results, setResults] = useState([]);

    // For search purposes
    //const [findService, setFindService] = useState([]); 

    const searchApi = async categoryParam => {
        const response = await rubik.get('/user/service', {
            params: {
                category: 2
            }
        });
        setResults(response.data);
    }

    useEffect(() => {
        searchApi(1);
    }, [] );

    return [results, searchApi];
}