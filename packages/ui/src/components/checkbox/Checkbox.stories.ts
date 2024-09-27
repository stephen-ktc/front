import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const small: Story = {
  args: {
    name: 'fruits',
    value: 'apple',
    size: 's',
    label: '사과'
  },
}

export const medium: Story = {
  args: {
    name: 'fruits',
    value: 'apple',
    size: 'm',
    label: '사과'
  },
}