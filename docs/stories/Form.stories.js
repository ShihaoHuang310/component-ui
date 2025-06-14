import { Button, Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input, useForm } from '@mattverse-ui/components';
import { z } from 'zod';

export default {
  title: 'Components/Form',
  component: Form,
  subcomponents: { FormItem, FormLabel, FormControl, FormDescription, FormMessage },
};

export const Default = {
  render: () => ({
    components: { 
      Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, 
      Input, Button 
    },
    setup() {
      const formSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        email: z.string().email({
          message: "Please enter a valid email address.",
        }),
      });
      
      const { handleSubmit, errors, resetForm } = useForm({
        validationSchema: formSchema,
        initialValues: {
          username: '',
          email: '',
        },
      });
      
      const onSubmit = handleSubmit((values) => {
        alert(JSON.stringify(values, null, 2));
      });
      
      return { onSubmit, errors, resetForm };
    },
    template: `
      <Form @submit="onSubmit" class="space-y-8 w-full max-w-md">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input name="username" placeholder="Enter your username" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage name="username" />
        </FormItem>
        
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>
            We'll never share your email with anyone else.
          </FormDescription>
          <FormMessage name="email" />
        </FormItem>
        
        <div class="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline" @click="resetForm">Reset</Button>
        </div>
      </Form>
    `,
  }),
};

export const ProfileForm = {
  render: () => ({
    components: { 
      Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, 
      Input, Button 
    },
    setup() {
      const formSchema = z.object({
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
          message: "Please enter a valid email address.",
        }),
        bio: z.string().max(160, {
          message: "Bio must not be longer than 160 characters.",
        }),
      });
      
      const { handleSubmit, errors } = useForm({
        validationSchema: formSchema,
      });
      
      const onSubmit = handleSubmit((values) => {
        alert(JSON.stringify(values, null, 2));
      });
      
      return { onSubmit, errors };
    },
    template: `
      <Form @submit="onSubmit" class="space-y-8 w-full max-w-md">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold">Profile</h2>
          <p class="text-muted-foreground">Update your profile information.</p>
        </div>
        
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input name="name" placeholder="Your name" />
          </FormControl>
          <FormMessage name="name" />
        </FormItem>
        
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input name="email" type="email" placeholder="Your email" />
          </FormControl>
          <FormMessage name="email" />
        </FormItem>
        
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <textarea 
              name="bio"
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us about yourself"
            ></textarea>
          </FormControl>
          <FormDescription>
            Write a short bio about yourself. Max 160 characters.
          </FormDescription>
          <FormMessage name="bio" />
        </FormItem>
        
        <Button type="submit">Update profile</Button>
      </Form>
    `,
  }),
};
