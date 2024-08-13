import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DialogHeader } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { PlusIcon } from "@radix-ui/react-icons"
import InviteUserForm from "./InviteUserForm"
import IssuesList from "./IssuesList"
import ChatBox from "./ChatBox"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProjectsById } from "@/Redux/Project/Action"
import { useParams } from "react-router-dom"


const ProjectDetails=()=> {
    const dispatch = useDispatch();
    // const {projects} = useSelector(store=>store);
    const { projectDetails, loading } = useSelector(state => state.project); 
    const {id} = useParams();

    console.log("details",projectDetails);
    useEffect(() => {
        dispatch(fetchProjectsById(id));
    }, [id, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!projectDetails) {
        return <div>No project details found.</div>;
    }
   
    

   const handleProjectInvitation=()=>{}

//    useEffect(() =>{
//     dispatch(fetchProjectsById(id))
//    },[id])

  return (
    <div className="mt-5 lg:px-10">

        <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2">
                <div className="text-gray-400 pb-10 w-full">
                    <h1 className="text-lg font-semibold pb-5">
                       {projectDetails?.name}
                       
                    </h1>
                    <div className="space-y-5 pb-10 text-sm">
                    <p className="w-full md:max-w-lg lg:max-w-xl">{projectDetails.description}</p>

                    <div className="flex">
                    <p className="w-36">Project Lead : </p>
                    <p>{projectDetails.owner.fullName}</p>
                    
                    </div>
                      <div className="flex">
                            <p className="w-36">Members :</p>
                            <div className="flex items-center gap-2">
                                {projectDetails.team?.map((item)=><Avatar>
                                    <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                                </Avatar>)}
                            </div>
                            <Dialog>
                                <DialogTrigger>
                                    <DialogClose>
                                        <Button size="sm" variant="outline" onClick={handleProjectInvitation} className="ml-2">
                                            <span>Invite</span>
                                            <PlusIcon className="w-3 h-3"/>
                                        </Button>
                                    </DialogClose>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>Invite User</DialogHeader>
                                    <InviteUserForm/>
                                </DialogContent>
                            </Dialog>
                      </div>
                      <div className="flex">
                      <p className="w-36">Category :</p>
                      <p> {projectDetails.category}</p>
                    </div>
                    <div className="flex">
                      <p className="w-36">Project Lead :</p>
                      <Badge> {projectDetails.owner.fullName}</Badge>
                    </div>
                      
                      
                </div>

                <section>
                    <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                    <div className="lg:flex mg:fflex gap-3 justify-between py-5">

                             <IssuesList status="pending" title="Todo List"/>               
                             <IssuesList status="in_progress" title="In Progress"/>               
                             <IssuesList status="done" title="Done"/>               
                    </div>
                </section>
                </div>
               

            </ScrollArea>
            <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox/>
            </div>
            
        </div>
        

    </div>
  )
}

export default ProjectDetails
