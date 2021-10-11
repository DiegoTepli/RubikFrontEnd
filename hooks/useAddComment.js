import { useState, useEffect } from "react";
import rubik from '../api/rubik';

export default () => {

    const [hasBeenCommented, setHasBeenCommented] = useState(false);

    const commentApi = async (professionalId, userId, serviceId, comment, ratingParam) => {

        const payload = {
            user: userId,
            description: comment,
            rating: ratingParam
        };
        
        console.log("PAYLOAD");

        console.log(payload);

        try {
        const response = await rubik.post('/comments/' + professionalId
            + '/service/' + serviceId, payload);

        console.log("se comento ?");
        console.log(response.data);

        setHasBeenCommented(true);
        } catch(err) {
            console.log("NO SE ACTUALIZO EL COMMEEEENT");
            console.log(err);
        }
    }

    //searchApi(professionalId, userId, serviceId, comment, ratingParam);

    /*useEffect(() => {
        searchApi(professionalId, userId, serviceId, comment, ratingParam);
    }, []);*/

    return [hasBeenCommented, commentApi];
}
