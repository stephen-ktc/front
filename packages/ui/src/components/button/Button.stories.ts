import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
  
export const primary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    onClick: () => console.log('clicked')
  },
}

export const secondary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    onClick: () => console.log('clicked')
  },
}

export const contained: Story = {
  args: {
    label: 'Button',
    variant: 'contained'
  },
}

export const outlined: Story = {
  args: {
    label: 'Button',
    variant: 'outlined'
  },
}

export const text: Story = {
  args: {
    label: 'Button',
    variant: 'text'
  },
}

export const small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    color: 'secondary'
  },
}

export const medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
}

export const large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const contained_disabled: Story = {
  args: {
    size: 'large',
    label: 'Button',
    disabled: true
  },
}

export const outlined_disabled: Story = {
  args: {
    size: 'large',
    label: 'Button',
    variant: 'outlined',
    disabled: true
  },
}

export const text_disabled: Story = {
  args: {
    size: 'large',
    label: 'Button',
    variant: 'text',
    disabled: true
  },
}
