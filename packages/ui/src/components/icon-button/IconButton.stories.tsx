import {ReactNode} from 'react';
import type { StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import { IconButtonProps } from './IconButton';
// import { fn } from '@storybook/test'
import { TrashIcon } from '@storybook/icons'

interface IMeta {
  title: string;
  component: {}
  parameters: {}
  tags: string[]
  args?: {} 
  // args?: () => ArgsStoryFn // 체크 필요
  // argTypes: {}
  render?: any
}

const meta: IMeta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  // args: { onClick: fn() },
}
export default meta

type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: { 
    icon: <TrashIcon size={16}/>
  },
};