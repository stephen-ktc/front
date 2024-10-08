import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'] },
    },
    size: {
      control: { type: 'select', options: ['medium', 'small', 'large'] },
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
    },
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: '',
  },
};