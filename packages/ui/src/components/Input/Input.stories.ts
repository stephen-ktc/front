import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'large'] },
    },
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Input',
    value: 'Hello, World!',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Input',
    value: 'Hello!',
  },
};
