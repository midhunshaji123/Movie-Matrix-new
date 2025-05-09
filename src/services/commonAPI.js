import axios from "axios"


const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
    try {
        const reqConfig = {
            method: httpMethod,
            url,
            data: reqBody,
            headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
        }

        const response = await axios(reqConfig)
        return response
    } catch (err) {
        console.log(err);
        throw err
    }
}

export default commonAPI
