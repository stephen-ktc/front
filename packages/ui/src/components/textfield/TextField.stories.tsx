import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

interface IMeta {
  title: string
  component: typeof TextField
  parameters?: {}
  tags: [string]
  argTypes: {
    color: { control: { type: 'select'; options: string[] } }
    size: { control: { type: 'select'; options: string[] } }
    variant: { control: { type: 'select'; options: string[] } }
    label: { control: 'text' }
    value: { control: 'text' }
    placeholder: { control: 'text' }
    error: { control: 'boolean' }
    helperText: { control: 'text' }
    required: { control: 'boolean' }
    onChange: { action: 'changed' }
  }
  args?: {}
  render?: any
}

const meta: IMeta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning'] },
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
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

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
}
