import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import CreateProjectForm from '../Project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'


const Navbar=()=> {
    const navigate = useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between w-full'>

        <div className='flex items-center gap-3'>
            <p onClick={()=>navigate("/")} className='cursor-pointer'>Project Management</p>

            <Dialog>
               <DialogTrigger>
                <Button variant="ghost">
                  New Project
                </Button>
               </DialogTrigger>
               <DialogContent>
                <DialogHeader>
                    Create New Project
                </DialogHeader>
                <CreateProjectForm/>
               </DialogContent>

            </Dialog>
            <Button onClick={()=> navigate("/upgrade_plan")} variant="ghost">Upgrage Plan</Button>

        </div>
        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        LogOut
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>Nachiket</p>

        </div>

    </div>
  )
}

export default Navbar