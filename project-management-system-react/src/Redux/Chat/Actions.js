
import api from "../config/api";
import * as actionTypes from "./ActionTypes"


export const sendMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.SEND_MESSAGES_REQUEST});

        try{
            const response = await api.post(
                "api/message/send", messageData
            );
            dispatch({
                type: actionTypes.SEND_MESSAGES_SUCCESS,
                messages: response.data,
            });
            console.log("message sent--", response.data)

        }catch(error){
            console.log(error);
           dispatch({
            type: actionTypes.SEND_MESSAGES_FAILURE,
            error: error.message
           });           
        }
    };
};



export const fetchChatByProjects = (projectId) => {
    return async (dispatch) => {
     dispatch({type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST});
     try{
        const response = await api.get(
            `/api/projects/${projectId}/chat`
        );
        
        dispatch({
            type : actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
            chat: response.data,
        });
        console.log("fetch chat is----", response.data)
     }catch(error){
      console.log("error -- ", error)
      dispatch({
        type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
        error: error.message,
      });
     }
    };
};



export const fetchChatMessages = (chatId) => {
    console.log("chat id is --", chatId)
    return async (dispatch) => {
        dispatch ({type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST});
        try{
            const response = await api.get(
                `/api/message/chat/${chatId}`
            );
            console.log("fetch chat messages----- ", response.data)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
                chatId,
                messages: response.data,
            });
        }catch(error){
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
                error: error.message,
            });
            console.log("fetching chat's fails")
        }
    };
};