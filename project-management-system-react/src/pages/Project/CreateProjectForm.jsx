

import React from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectValue } from '@/components/ui/select';
import { SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { tags } from '@/pages/ProjectList/ProjectList';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';
import { createProjects } from '@/Redux/Project/Action';

const CreateProjectForm = () => {
  const dispatch = useDispatch();
 

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues('tags');
    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];
    form.setValue('tags', updatedTags);
  };

  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      category: '',
      tags: ['javascript', 'react'],
    },
  });

  const onSubmit = (data) => {
    dispatch(createProjects(data))
    console.log('create project data', data);
  };

  return (
    <div>
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='border w-full border-gray-700 py-5 px-5'
                    placeholder='project name...'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='border w-full border-gray-700 py-5 px-5'
                    placeholder='project description...'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    defaultValue='fullstack'
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Category' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='fullstack'>Full stack</SelectItem>
                      <SelectItem value='frontend'>Front End</SelectItem>
                      <SelectItem value='backend'>Back End</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      handleTagsChange(value);
                    }}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Tags' />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className='flex gap-1 flex-wrap'>
                  {Array.isArray(field.value) &&
                    field.value.map((item) => (
                      <div
                        key={item}
                        onClick={() => handleTagsChange(item)}
                        className='cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1'
                      >
                        <span className='text-sm'>{item}</span>
                        <Cross1Icon className='h-3 w-3' />
                      </div>
                    ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            {false ? (
              <div>
                <p>
                  You can create only 3 projects with a free plan, please upgrade your plan
                </p>
              </div>
            ) : (
              <Button type='submit' className='w-full mt-5'>
                Create Project
              </Button>
            )}
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
