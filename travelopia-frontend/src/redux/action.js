import axios from "axios";

const sendInpReq = () => {
    return { type: "INP_REQ" }
}

const sendInpSuc = (payload) => {
    return {
        type: "INP_SUC",
        payload
    }
}

const sendInpdata = (payload) => {
    return {
        type: "INP_DATA",
        payload
    }
}


export const sendData = (data) => async (dispatch) => {
    dispatch(sendInpReq())
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/insertdata`, data)
        .then((response) => {
            // Handle the response

            dispatch(sendInpSuc(response.data._id));
        })
        .catch((error) => {
            // Handle the error
            // dispatch(sendInpFail);
            console.error("Error submitting data:", error);
        });
}

export const storeFormData = () => async (dispatch) => {
    dispatch(sendInpReq())
    return await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/getdata`)
        .then((res) => {

            dispatch(sendInpdata(res.data))
        }
        )
        .catch((error) => {
            // Handle the error
            // dispatch(sendInpFail);
            console.error("Error submitting data:", error);
        });
}