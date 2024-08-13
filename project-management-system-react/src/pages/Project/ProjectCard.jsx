import { Card } from '@/components/ui/card'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProject } from '@/Redux/Project/Action'

const ProjectCard=({project})=> {
  console.log("here",project);
  const navigate = useNavigate()
  const dispatch=useDispatch();


  const handleDelete=()=>{
 dispatch(deleteProject({projectId: project.id}))
  }
  return (
    <Card key={project.id} className="p-5 w-full lg:max-w-3xl hover:shadow-sm hover:shadow-[#aaaaaa] hover:scale-[1.0125] transition-all cursor-pointer duration-500">

     <div className='space-y-5'>
        <div className='space-y-2'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <h1 onClick={()=>navigate("/project/"+project.id)} className='cursor-pointer font-bold text-lg'>
                       {project.name}
                    </h1>
                  <DotFilledIcon/>
                  <p className='text-sm text-gray-400'>{project.category}</p>
                </div>
                <div>

                   <DropdownMenu>
                    <DropdownMenuTrigger>
                    <Button className="rounded-full" variant="ghost" size="icon">
                        <DotsVerticalIcon/>
                      </Button>
                      </DropdownMenuTrigger>
                     
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          Update
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDelete}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                      </DropdownMenu> 
                </div>
            </div>
            <p className='text-gray-500 text-sm'> 
               {project.description}
           </p>
        </div>

        <div>
          {project.tags.map((item)=> <Badge key={item} variant="outline">{item}</Badge>)}
        </div>
     </div>
    </Card>
  )
}

export default ProjectCard;




