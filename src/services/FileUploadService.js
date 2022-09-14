import axios from "axios";
import { useState } from "react";

function uploadFile() {
    const [image, setState] = useState('')
    const token = localStorage.getItem('Auth Token')
    const API = 'https://cartestwebapp.herokuapp.com/upload'

    const uploadData = data => {
        axios.post(API, data, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then((res) => {
            setState(res.data)
            console.log(res);
        });
    };

    return [image, uploadData];
}

export { uploadFile }