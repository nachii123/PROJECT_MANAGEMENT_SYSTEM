
// import { ACCEPT_INVITATION_REQUEST, FETCH_PROJECTS_FAILURE ,CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_REQUEST, DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECTS_REQUEST, SEARCH_PROJECTS_SUCCESS } from "./ActionTypes";

// const initialState = {
//      projects: [],
//      loading: false,
//      error: null,
//      projectDetails:null,
//      searchProjects:[]


// };
// console.log("Received projects:");

// export const projectReducer = (state = initialState, action)=>{
//     switch (action.type){

//         case FETCH_PROJECTS_REQUEST:
//         case CREATE_PROJECTS_REQUEST:
//         case DELETE_PROJECTS_REQUEST:
//         case FETCH_PROJECTS_BY_ID_REQUEST:
//         case ACCEPT_INVITATION_REQUEST:
//         case INVITE_TO_PROJECTS_REQUEST: 
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case FETCH_PROJECTS_SUCCESS:
//             console.log("Received:", action.projects);
//             return {
//                 ...state,
//                 loading: false,
//                 projects: action.projects,
//                 error:null,
//             };
//         case SEARCH_PROJECTS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 searchProjects: action.payload,
//                 error: null,
//             };
//         case CREATE_PROJECTS_SUCCESS:
//             console.log("creates pr:", action.projects);
//             return {
//                     ...state,
//                     loading: false,
//                     projects: [...state.projects, action.projects],
//                     error: null,
//                 };

//         case FETCH_PROJECTS_BY_ID_SUCCESS:
//                     return {
//                             ...state,
//                             loading: false,
//                             projectDetails: action.project,
//                             error: null,
//                       };    
                      
//         case DELETE_PROJECTS_SUCCESS:
//             return {
//                      ...state,
//                      loading: false,
//                     project: state.projects.filter(
//                         (project) => project.id ===  action.projectId),
//                     error: null,
//              };              

//         default:
//           return  state;        

//     }

// };



import api from "../config/api";
import { 
    ACCEPT_INVITATION_REQUEST, 
    FETCH_PROJECTS_FAILURE, 
    CREATE_PROJECTS_REQUEST, 
    CREATE_PROJECTS_SUCCESS, 
    DELETE_PROJECTS_REQUEST, 
    DELETE_PROJECTS_SUCCESS, 
    FETCH_PROJECTS_BY_ID_REQUEST, 
    FETCH_PROJECTS_BY_ID_SUCCESS, 
    FETCH_PROJECTS_REQUEST, 
    FETCH_PROJECTS_SUCCESS, 
    INVITE_TO_PROJECTS_REQUEST, 
    SEARCH_PROJECTS_SUCCESS 
  } from "./ActionTypes";
  
  const initialState = {
    projects: [],
    loading: false,
    error: null,
    projectDetails: null,
    searchProjects: []
  };

  // const fetchAllProjects= async({category, tag})=>{
    
  //   try {
  //       const {data} = await api.get("/api/projects", { params: { category, tag } });
  //       // console.log("All projects:", data); // Adjusted log
  //       // dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
  //       return data;
  //     } catch (error) {
  //       console.log("Error:", error);
  //       throw new Error(error.message || "not found  data");
  //       // dispatch({ type: FETCH_PROJECTS_FAILURE, error: error.message }); // Add failure action
  //     }
  // }
  
//   export const projectReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_PROJECTS_REQUEST:
//       case CREATE_PROJECTS_REQUEST:
//       case DELETE_PROJECTS_REQUEST:
//       case FETCH_PROJECTS_BY_ID_REQUEST:
//       case ACCEPT_INVITATION_REQUEST:
//       case INVITE_TO_PROJECTS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };  
//       case FETCH_PROJECTS_SUCCESS:
//         console.log("Received:", action.projects);
//         return {
//           ...state,
//           loading: false,
//           projects: action.projects,
//           error: null
//         }; 
//       case SEARCH_PROJECTS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           searchProjects: action.payload,
//           error: null
//         };  
//       case CREATE_PROJECTS_SUCCESS:
//         console.log("Created project:", action.projects);
//         return {
//           ...state,
//           loading: false,
//           projects: [...state.projects, action.projects],
//           error: null
//         };
  
//       case FETCH_PROJECTS_BY_ID_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           projectDetails: action.project,
//           error: null
//         };
  
//       case DELETE_PROJECTS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           projects: state.projects.filter(
//             (project) => project.id !== action.projectId
//           ),
//           error: null
//         };
  
//       default:
//         return state;
//     }
//   };  