import axios from 'axios';

const baseURL = process.env.VUE_APP_URL

export default {
    post(loginURL,loginDTO) {
        return axios({
            method: 'post',
            url: `${baseURL}/${loginURL}`,
            data: loginDTO,  
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            }       
        })
    },

    get(fetechURL){
        return axios({
            method:'get',
            url:`${baseURL}/${fetechURL}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            } 
        })
    }
}