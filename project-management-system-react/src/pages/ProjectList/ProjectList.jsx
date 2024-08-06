// // src/pages/ProjectList/ProjectList.jsx
// import { useEffect, useState } from 'react';
// import {Card, CardContent} from '@/components/ui/card'
// import { Button } from '@/components/ui/button';
// import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
// // import { ScrollArea } from '@radix-ui/react-scroll-area';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@radix-ui/react-label';

// import { Input } from '@/components/ui/input';
// import ProjectCard from '../Project/ProjectCard';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProjects } from '@/Redux/Project/Action';



// export const tags=[
//   "all",
//   "react",
//   "next.js",
//   "springboot",
//   "mysql",
//   "mongodb",
//   "angular",
//   "python",
//   "flask",
//   "django"
// ];


// // console.log(fetchProjects({}))
// export const fetchProjects=async({category, tag})=>{
//   // dispatch({ type: FETCH_PROJECTS_REQUEST });

//   try {
//     const resp = await api.get("/api/projects", { params: { category, tag } });
//     console.log("All projects:", resp); // Adjusted log
//     return resp;
//     // dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
//   } catch (error) {
//     console.log("Error:", error);
//     // dispatch({ type: FETCH_PROJECTS_FAILURE, error: error.message }); // Add failure action
//   }
 
  
// };

//  function ProjectList() {
//    const [keyword, setKeyword] = useState("");
//    const [project, setAllProjects] = useState({});
//   // const {project} = useSelector(store=> store)
//   // const { project } = useSelector(store => store);
//   useEffect(() =>{
//  const  project=await fetchProjects({})
//  console.log("project store", project) 
//  setAllProjects(project);
//   },[]);
//   //  console.log("project store", project) 


//   const handleFilterChange = (section, value) => {
//     console.log("value", value, section);
//    dispatch(fetchProjects({ category: section === 'category' ? value : 'all', tag: section === 'tag' ? value : 'all' }));
//   };
//   const handleSearchChange=(e)=> {
//     setKeyword(e.target.value);
//   };
  
// // console.log("project store" , project);
 

//   return (
//     <>
//     <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>

//       <section className='filterSection'>

//         <Card className= "p-5 sticky top-10">
//           <div className='flex justify-between lg:w-[20rem]'>
//             <p className='text-xl -tracking-wider'>filters</p>
//             <Button variant="ghost" size="icon">

//               <MixerHorizontalIcon/>
//             </Button>
//           </div>

//         <CardContent className="mt-5">
//           <ScrollArea className='space-y-7 h-[70vh]'>

//             <div>
//               <h1 className='pb-3 text-gray-400 border-b'>
//                 Category
//               </h1>
//               <div className='pt-5'>
//                  <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handleFilterChange("category",value)}>
//                   <div className='flex items-center gap-2'> 
//                     <RadioGroupItem value='all' id="r1"/>
//                     <Label htmlFor='r1'>All</Label>                    
//                   </div>
//                   <div className='flex items-center gap-2'> 
//                     <RadioGroupItem value='fullstack' id="r2"/>
//                     <Label htmlFor='r2'>fullstack</Label>                    
//                   </div>
//                   <div className='flex items-center gap-2'> 
//                     <RadioGroupItem value='frontend' id="r3"/>
//                     <Label htmlFor='r3'>frontend</Label>                    
//                   </div>
//                   <div className='flex items-center gap-2'> 
//                     <RadioGroupItem value='backend' id="r4"/>
//                     <Label htmlFor='r4'>backend</Label>                    
//                   </div>
//                  </RadioGroup>
//               </div>
//             </div>

//             <div className='pt-9'>
//               <h1 className='pb-3 text-gray-400 border-b'>
//                 Tags
//               </h1>
//               <div className='pt-5'>
//                  <RadioGroup 
//                 className="space-y-3 pt-5"
//                  defaultValue="all" onValueChange={(value) => handleFilterChange("tag",value)}
//                  >
//                  {tags.map((item)=> <div key={item} className='flex items-center gap-2'> 
//                     <RadioGroupItem value={item} id={`r1 ${item}`}/>
//                     <Label htmlFor={`r1 ${item}`}>{item}</Label>                    
//                   </div>) }
                  
                  
//                  </RadioGroup>
//               </div>
//             </div>

//           </ScrollArea>
//           </CardContent>
//         </Card>

//       </section>
//       <section className='projectListSection w-full lg:w-[48rem]'>

//         <div className='flex gap-2 items-center pb-5 justify-between'>
//            <div className='relative p-0 w-full'>
//               <Input
//               onChange = {handleSearchChange}
//               placeholder="search projects" className="40px px-9"
//               />
//               <MagnifyingGlassIcon className='absolute top-3 left-4'/>
//            </div>
//         </div>
//         <div>
//           <div className='space-y-5 min-h-[74vh]'>

//             {
//               keyword?[1,1,1].map((item)=> <ProjectCard key={item}/>)
//               :project.projects?.map((item)=> <ProjectCard key={item}/>)
//             }
//              {/* {
//               keyword?[1,1,1].map((item)=> <ProjectCard key={item}/>)
//               :[1,1,1].map((item)=> <ProjectCard key={item}/>)
//             } */}
//           </div>
//         </div>
        
//       </section>
     
      
//      </div>
//     </>
    
//   );
// }


//  export default ProjectList;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import ProjectCard from '../Project/ProjectCard';
import { fetchProjects } from '@/Redux/Project/Action';

export const tags = [
  'all', 'react', 'next.js', 'springboot', 'mysql', 'mongodb', 'angular', 'python', 'flask', 'django'
];

function ProjectList() {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const {AllprojectState} = useSelector(state => state);

  console.log("here",AllprojectState);

  useEffect(() => {
    const loadProjects = async () => {
       dispatch(fetchProjects({ category: 'all', tag: 'all' }));
    };
    loadProjects();
  }, [dispatch]);

  const handleFilterChange = async (section, value) => {
     dispatch(fetchProjects({ category: section === 'category' ? value : 'all', tag: section === 'tag' ? value : 'all' }));
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  // const filteredProjects = keyword
  //   ? projects.filter(project => project.name.toLowerCase().includes(keyword.toLowerCase()))
  //   : projects;

  return (
    <>
      <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
        <section className='filterSection'>
          <Card className="p-5 sticky top-10">
            <div className='flex justify-between lg:w-[20rem]'>
              <p className='text-xl -tracking-wider'>Filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className='space-y-7 h-[70vh]'>
                <div>
                  <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
                  <div className='pt-5'>
                    <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handleFilterChange("category", value)}>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value='all' id="r1" />
                        <Label htmlFor='r1'>All</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value='fullstack' id="r2" />
                        <Label htmlFor='r2'>Fullstack</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value='frontend' id="r3" />
                        <Label htmlFor='r3'>Frontend</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value='backend' id="r4" />
                        <Label htmlFor='r4'>Backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className='pt-9'>
                  <h1 className='pb-3 text-gray-400 border-b'>Tags</h1>
                  <div className='pt-5'>
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all" onValueChange={(value) => handleFilterChange("tag", value)}
                    >
                      {tags.map((item) => (
                        <div key={item} className='flex items-center gap-2'>
                          <RadioGroupItem value={item} id={`r1 ${item}`} />
                          <Label htmlFor={`r1 ${item}`}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className='projectListSection w-full lg:w-[48rem]'>
          <div className='flex gap-2 items-center pb-5 justify-between'>
            <div className='relative p-0 w-full'>
              <Input
                onChange={handleSearchChange}
                placeholder="Search projects" className="40px px-9"
              />
              <MagnifyingGlassIcon className='absolute top-3 left-4' />
            </div>
          </div>
          <div>
            <div className='space-y-5 min-h-[74vh]'>
              {/* {filteredProjects.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))} */}
               {
            keyword?[1,1,1].map((item)=> <ProjectCard key={item}/>)              :[1,1,1].map((item)=> <ProjectCard key={item}/>)
            }
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectList;
