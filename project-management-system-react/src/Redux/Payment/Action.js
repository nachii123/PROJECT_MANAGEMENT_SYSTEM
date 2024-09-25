// import api from "../config/api"
import api from "@/Redux/config/api"


export const createPayment = async({planType,jwt})=> {
    try{
        const {data} = await api.post(`/api/payment/${planType}`)
        console.log("payment", data);

        if(data.payment_link_url){
            window.location.href = data.payment_link_url;
        }

    }catch(error){
        console.log("error", error)

    }
}