import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Radio } from './Radio'

const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const small: Story = {
  args: {
    name: 'fruits',
    value: 'apple',
    size: 's',
    label: '사과',
  },
}

export const medium: Story = {
  args: {
    name: 'fruits',
    value: 'apple',
    size: 'm',
    label: '사과',
  },
}

