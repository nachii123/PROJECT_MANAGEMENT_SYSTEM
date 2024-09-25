
import './App.css'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react';
import Navbar from './pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import IssueDetails from './pages/IssueDetails/IssueDetails';
import Subscription from './pages/subsription/Subscription';
import Auth from './pages/Auth/Auth';
import { getUser } from './Redux/Auth/Action';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProjects } from './Redux/Project/Action';
import UpgradeSuccess from './pages/subsription/UpgradeSuccess';

function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {auth} = useSelector(store=> store)

  useEffect(() =>{
    dispatch(getUser())
    // dispatch(fetchProjects({ }))
    fetchProjects({ })
    // console.log("hiii")
    // console.log("fetch",fetchProjects({}));
  },[auth.jwt])

  return (
    <>
{   
  auth.user? <div>

     <Navbar/>
    
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/project/:id'element={<ProjectDetails/>}/>
      <Route path='/project/:projectId/issue/:issueId'element={<IssueDetails/>}/>
      <Route path='/upgrade_plan'element={<Subscription/>}/>
      <Route path='/upgrade_plan/success'element={<UpgradeSuccess/>}/>


     </Routes>
     </div>: <Auth/>
     }
    
     
    </>
  )
}
export default App

