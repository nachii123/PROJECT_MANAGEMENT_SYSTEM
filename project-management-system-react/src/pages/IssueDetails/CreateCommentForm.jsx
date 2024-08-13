
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/Redux/Comment/Action";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateCommentForm = ({ issueId }) => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      content: ""
    }
  });
  console.log("issueID ---",{issueId})

  const onSubmit = (data) => {
    dispatch(createComment({content: data.content, issueId}))
    console.log(' create comment ', data);
  };

  return (
    <div>
      <Form {...form}>
        <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='w-[20rem]'
                    placeholder='add comment here...'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-5">
            Add comments
          </Button>
        </form>
      </Form> 
    </div>
  );
}

export default CreateCommentForm;
