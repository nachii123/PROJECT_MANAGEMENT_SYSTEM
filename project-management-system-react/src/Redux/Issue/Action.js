
import api from "../config/api";
import * as actionTypes from "./ActionTypes";



//action for fetching issues
export const fetchIssues = (id) =>{
    return async (dispatch) =>{
        dispatch({type: actionTypes.FETCH_ISSUES_REQUEST});
        try{
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("fetch--- issues", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        }catch(error){
            dispatch({
                type: actionTypes.FETCH_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

// export const creatIssue=(issueData)=>{
//     return async (dispatch)=>{
//     dispatch({type: actionTypes.CREATE_ISSUES_REQUEST});
//     try{
//         const response = await api.post("/api/issues",issueData);       
//         dispatch({type: actionTypes.CREATE_ISSUES_SUCCESS,
//             issue :response.data})
//             console.log("issue created success",response.data);
//     }catch(error){
//         dispatch({
//             type: actionTypes.CREATE_ISSUES_FAILURE,
//             error: error.message,
//         });
//     }
// };

// };

export const creatIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_ISSUES_REQUEST });
        try {
            const response = await api.post("/api/issues", issueData);
            dispatch({
                type: actionTypes.CREATE_ISSUES_SUCCESS,
                issue: response.data,
            });
            console.log("Issue created successfully:", response.data);
        } catch (error) {
            console.log("Error Response:", error.response);
            dispatch({
                type: actionTypes.CREATE_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

// export const deleteIssue= (issueId) => {
//     return async (dispatch) =>{
//         dispatch({type: actionTypes.DELETE_ISSUE_REQUEST});
//         try{
//             const response = await api.delete(`/api/issues/${issueId}`);
//             dispatch({type: actionTypes.DELETE_ISSUE_SUCCESS, issueId });
//             console.log("Issue Delete SuccessFully---",response);


//         }catch(error){
//             dispatch({
//                 type: actionTypes.DELETE_ISSUE_FAILURE,
//                 error: error.message
//             });

//         }
//     };
// };

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
        try {
            const response = await api.delete(`/api/issues/${issueId}`);
            dispatch({
                type: actionTypes.DELETE_ISSUE_SUCCESS,
                issueId, // Pass issueId to the reducer
            });
            console.log("Issue Deleted Successfully:", response);
        } catch (error) {
            dispatch({
                type: actionTypes.DELETE_ISSUE_FAILURE,
                error: error.message,
            });
        }
    };
};


// action for fetchIssues By Id
export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST});
        try{
            const response = await api.get(`/api/issues/${id}`);
            console.log("fetch issue by id", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data,
            });
        }catch(error){
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            })
        }
    };
};



//action for updateIssuesStatus
export const updateIssuesStatus = ({id, status})=>{
    return async (dispatch) => {
        dispatch({type: actionTypes.UPDATE_ISSUES_STATUS_REQUEST});
        try{
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("update issues status", response.data);
            dispatch({
                type: actionTypes.UPDATE_ISSUES_STATUS_SUCCESS,
                issues: response.data,
            })

        }catch(error){
            dispatch({
                type: actionTypes.UPDATE_ISSUES_FAILURE,
                error: error.message
            });
        }
    };
};

export const assignedUserToIssue = ({issueId, userId}) => {
    return async (dispatch) =>{
        dispatch({type : actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try{
         const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
         console.log("assigned issue --- ", response.data);
         dispatch({
            type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
            issue : response.data,
         });

        }catch(error){
            console.log("error ",error)
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message,
            });

        }
    }
}