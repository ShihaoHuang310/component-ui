import { Input } from '@mattverse-ui/components';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onInput: { action: 'input' },
    onChange: { action: 'change' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
  },
};

export const Default = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    disabled: false,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
  }),
};

export const Types = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <Input type="text" placeholder="Text" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="number" placeholder="Number" />
        <Input type="search" placeholder="Search" />
        <Input type="tel" placeholder="Tel" />
        <Input type="url" placeholder="URL" />
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <Input disabled placeholder="Disabled input" />
        <Input disabled value="Disabled with value" />
      </div>
    `,
  }),
};

export const WithLabels = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-6 w-full max-w-sm">
        <div class="grid w-full items-center gap-1.5">
          <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <Input type="email" id="email" placeholder="Enter your email" />
          <p class="text-sm text-muted-foreground">Enter your email address.</p>
        </div>
        
        <div class="grid w-full items-center gap-1.5">
          <label for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
          <Input type="password" id="password" placeholder="Enter your password" />
          <p class="text-sm text-muted-foreground">Your password must be at least 8 characters.</p>
        </div>
      </div>
    `,
  }),
};
