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


const ProjectDetails=()=> {

   const handleProjectInvitation=()=>{

   }

  return (
    <div className="mt-5 lg:px-10">

        <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2">
                <div className="text-gray-400 pb-10 w-full">
                    <h1 className="text-lg font-semibold pb-5">
                        Create Ecommerce project using React
                    </h1>
                    <div className="space-y-5 pb-10 text-sm">
                    <p className="w-full md:max-w-lg lg:max-w-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cupiditate!</p>

                    <div className="flex">
                    <p className="w-36">Project Lead :</p>
                      <p> Nachiket</p>
                    </div>
                      <div className="flex">
                            <p className="w-36">Members :</p>
                            <div className="flex items-center gap-2">
                                {[1,1,1,1].map((item)=><Avatar>
                                    <AvatarFallback>Z</AvatarFallback>
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
                      <p> FulllStack</p>
                    </div>
                    <div className="flex">
                      <p className="w-36">Project Lead :</p>
                      <Badge> Nachiket</Badge>
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