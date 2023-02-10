import axios from "axios";

const REGISTER_URL='https://auth-redux-6ebfd-default-rtdb.firebaseio.com/';
export default axios.create({
    baseURL:REGISTER_URL
})