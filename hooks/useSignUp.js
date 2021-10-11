import { useState } from "react";
import rubik from '../api/rubik';

export default () => {

    const [newUser, setNewUser] = useState(null);

    const newUserApi = async (user) => {

        console.log("about to save user");

        console.log(user);

        const payload = {
            email: user.email,
            name: user.name,
            dni: user.id,
            cuit: user.cuit,
            state: user.state,
            city: user.city,
            neighborhood: user.neighborhood,
            address: user.address,
            phone: user.phone,
            password: user.password,
            billVoucher: "..."
        };

        try {
        const response = await rubik.post('/auth/signup', payload);
        setNewUser(response.data);
        } catch(err) {
            console.log("NO SE ACTUALIZO REGISTRO EL USUARIO");
            console.log(err);
        }
    }

    return [newUser, newUserApi];
}
