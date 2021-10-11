import { useState } from "react";
import rubik from '../api/rubik';

export default () => {

    const [newUser, setNewUser] = useState(null);

    const newUserApi = async (user) => {
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
            billVoucher: "...",
            monotax: "...."
        };

        try {
        const response = await rubik.post('/auth/signup/professional', payload);
        setNewUser(response.data);
        console.log("new uuuuuuser");
        console.log(newUser);
        } catch(err) {
            console.log("NO SE ACTUALIZO REGISTRO EL USUARIO PROFESIONAL");
            console.log(err);
        }
    }

    return [newUser, newUserApi];
}
