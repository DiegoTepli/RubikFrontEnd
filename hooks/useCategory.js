import {useState, useEffect}  from "react";
import rubik from '../api/rubik';

export default () => {
    const [results, setResults] = useState([]); 

    const searchApi = async () => {
        const response = await rubik.get('/category');
        setResults(response.data);
    }

    useEffect(() => {
        searchApi();
    }, [] );

    return [results, searchApi];
}
