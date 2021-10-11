import { useState } from "react";
import rubik from '../api/rubik';

export default () => {

    const [payment, setPayment] = useState(null);

    const paymentApi = async (payment, userId) => {
        const payload = {
            name: "name",
            cvv: Number(payment.cvv),
            number: payment.number,
            expirationDate: payment.expiry,
            bank: "bank"
        };

        try {
            const response = await rubik.post('/payments/' + userId, payload);
            setPayment(response.data);
        } catch (err) {
            console.log("NO SE ACTUALIZO EL PAYMEEENT");
            console.log(err);
        }
    }

    return [payment, paymentApi];
}