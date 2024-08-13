

import api from "../config/api";
import * as actionTypes from "./ActionTypes"
import { comment } from "postcss";



export const createComment = (commentData) => {
    console.log("comm---",commentData)
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });

        try{
            const response = await api.post(
                `/api/comments`,
                commentData
            );
            console.log("comments created success", response.data)
            dispatch({
                type: actionTypes.CREATE_COMMENT_SUCCESS,
                comment: response.data,
            });
        }catch(error){
            console.log("error", error)
            dispatch({
                type: actionTypes.CREATE_COMMENT_FAILURE,
                error: error.message,
            });

        }
    };
};


// action for deleting a comment
export const deleteComment = (commentId) =>{
    return async (dispatch) => {
        dispatch({type: actionTypes.DELETE_COMMENT_REQUEST});
        try{
            await api.delete(
                `/api/comments/${commentId}`
            );
            dispatch({type: actionTypes.DELETE_COMMENT_SUCCESS, commentId})
        }catch (error){
            console.log("error", error)
            dispatch({
                type: actionTypes.DELETE_COMMENT_FAILURE,
                error: error.message
            });
        }
    };
};


// action for fetching comment
export const fetchComments = (issueId)=>{
    return async (dispatch) =>{
        dispatch({ type: actionTypes.FETCH_COMMENT_REQUEST});
        try{
   const response = await api.get(
    `/api/comments/${issueId}`
   );
   dispatch({
    type: actionTypes.FETCH_COMMENT_SUCCESS,
    comment: response.data
   });
   console.log("fetched comments ", response.data)
        }catch(error){
            console.log("error ", error);
            dispatch({
                type:actionTypes.FETCH_COMMENT_FAILURE,
                error: error.message,
            });

        }
    };
};