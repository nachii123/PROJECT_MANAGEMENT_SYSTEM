import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchChatByProjects, fetchChatMessages, sendMessage } from "@/Redux/Chat/Actions"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ChatBox=()=> {

    const[message, setMessage] = useState("");
    const dispatch = useDispatch();
    const {auth, chat} = useSelector(store=> store)
    const {id} = useParams();
   console.log("id iss  ",id)
    console.log("chat--id-is ",chat.chat?.id)

    useEffect(()=>{
      dispatch(fetchChatByProjects(id))
    },[])

    useEffect(() => {
      if (chat.chat?.id) {
        dispatch(fetchChatMessages(chat.chat.id));
      }
    }, [chat.chat?.id]);

    const handleSendMessage=()=>{
      dispatch(sendMessage({
        senderId: auth.user?.id,
        projectId: id,
        content: message
      }));
      setMessage(" ");
        console.log("message", message);
        
    }

    const handleMessageChange=(e)=>{
        setMessage(e.target.value);
        
    }
console.log("messages are ", chat.messages);
    
  return (
    <div className="sticky">
        <div className="border rounded-lg">

            <h1 className="border-b p-5">Chat Box</h1>

            <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
            {chat.messages?.map((item, index) => 
           
            item[index]?.sender?.id !== auth.user?.id ?
            (
            <div className="flex gap-2 mb-2 justify-start" key={item}>

                <Avatar>
                    <AvatarFallback>
                        R
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                        <p>{item[index]?.sender?.fullName}</p>
                        {/* <p>ram</p> */}
                        <p className="text-gray-300">{item[index]?.content}</p>
                        {/* <p className="text-gray-300">Helloo</p> */}
                    </div>

            </div>
            ):
             <div className="flex gap-2 mb-2 justify-end" key={item}>

            
             <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
             <p>{item[index]?.sender?.fullName}</p>
             <p className="text-gray-300">{item[index]?.content}</p>
             {/* <p> ram2</p>
             <p className="text-gray-300">i am good</p> */}
                 </div>
                 <Avatar>
                 <AvatarFallback>
                     R
                 </AvatarFallback>
             </Avatar>

         </div>
            )}

            </ScrollArea>
            <div className="relative p-0">
      <Input
        placeholder="type message..."
        className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
        value={message}
        onChange={handleMessageChange}
      />
      <Button
        onClick={handleSendMessage}
        className="absolute right-2 top-3 rounded-full"
        size="icon"
        variant="ghost"
      >
        <PaperPlaneIcon />
      </Button>
    </div>
        </div>

    </div>
  )
}

export default ChatBox