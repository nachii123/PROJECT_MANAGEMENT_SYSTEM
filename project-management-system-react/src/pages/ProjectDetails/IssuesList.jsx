// import React from 'react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import IssueCard from "./IssueCard"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { DialogTitle } from "@/components/ui/dialog"
import CreatIssueForm from "./CreatIssueForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchIssues } from "@/Redux/Issue/Action"
import { useParams } from "react-router-dom"

const IssuesList=({title, status})=> {
    const dispatch = useDispatch();
    // const {issue} = useSelector(store => store)
    const {issue} = useSelector(store => store);
    console.log("issues are---",issue);
    // console.log("issues",issue.issue);
    const {id} = useParams();

    // useEffect(() =>{
    //     dispatch(fetchIssues(id))
    // },[id])

    useEffect(() => {
        if (id) {
            dispatch(fetchIssues(id));
        }
    }, [id]);

    // if (issueState.error) {
    //     return <div>Error: {issueState.error}</div>;
    // }
  return (
    <div>
        <Dialog>
            <Card className="w-full md:w-[300px] lg:w-[310px]">
    <CardHeader>
        <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="px-2">
        <div className="space-y-2">
           {/* {[1,1,1].map((item)=><IssueCard key={item}/> */}
           {issue.issues.filter((issue=>issue.status==status)).map((item)=><IssueCard project={id} item={item} key={item.id}/>

        )}
        </div>
    </CardContent>
    <CardFooter>
  <DialogTrigger>
    <Button
    variant="outline"
    className="w-full flex items-center gap-2">
        <PlusIcon/>
        Create Issue</Button>
  </DialogTrigger>
    </CardFooter>
            </Card>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create new Issue
                    </DialogTitle>
                </DialogHeader>
                <CreatIssueForm status={status}/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default IssuesList