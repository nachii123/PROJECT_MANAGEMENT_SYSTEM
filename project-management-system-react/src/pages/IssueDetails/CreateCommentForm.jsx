// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { useForm } from "react-hook-form";

// const CreateCommentForm = ({ issueId }) => {
//   const form = useForm({
//     defaultValues: {
//       content: ""
//     }
//   });

//   const onSubmit = (data) => {
//     console.log('create project data', data);
//   };

//   return (
//     <div>
//       <Form {...form}>
//         <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
//           <FormField
//             control={form.control}
//             name='content'
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type='text'
//                     className='w-[20rem]'
//                     placeholder='user email...'
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit" className="w-full mt-5">
//             Invite User
//           </Button>
//         </form>
//       </Form> 
//     </div>
//   );
// }

// export default CreateCommentForm;

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

const CreateCommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      content: ""
    }
  });

  const onSubmit = (data) => {
    console.log('create project data', data);
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
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='w-[20rem]'
                    placeholder='user email...'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-5">
            Invite User
          </Button>
        </form>
      </Form> 
    </div>
  );
}

export default CreateCommentForm;
