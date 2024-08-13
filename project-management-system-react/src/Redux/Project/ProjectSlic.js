// import { createSlice } from "@reduxjs/toolkit";


// const getUserFromLocalStorage = () => {
// 	return JSON.parse(localStorage.getItem("Allprojects")) || null;
// };

// const initialState = {
// 	project: getUserFromLocalStorage(),
// 	isSidebarOpen: false,
// };

// const projectSlice = createSlice({
// 	name: "Allprojects",
// 	initialState,
// 	reducers: {
// 		fetchAllProjects : (state, action) =>{
//             const response = {project:action.payload.projects}
//             console.log(response);
//         } 
// 	},
// });

// export const { fetchAllProjects} = projectSlice.actions;
// export default projectSlice.reducer;
