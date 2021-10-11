import { useState } from "react";
import rubik from '../api/rubik';

export default () => {

    const [user, setUser] = useState(null);

    const userApi = async (user) => {

        console.log("about to save user");

        console.log(user);

        const payload = {
            email: user.email,
            password: user.password
        };

        try {
        const response = await rubik.post('/auth/signin', payload);
        setUser(response.data);
        } catch(err) {
            console.log("NO SE ACTUALIZO REGISTRO EL USUARIO");
            console.log(err);
        }
    }

    return [user, userApi];
}
