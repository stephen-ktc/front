import {ReactNode} from 'react';
import type { StoryObj } from '@storybook/react'
import { Button } from './Button'
import {ButtonProps} from './Button';
// import { fn } from '@storybook/test'

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
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  args: { 
    label: 'Button',
  },
  // args: { onClick: fn() },
}
export default meta

type Story = StoryObj<ButtonProps>;

const Container = ({children}: { children: ReactNode }) => {
  return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>{children}</div>
      </div>
  )
}

const Template = (args: ButtonProps) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
    <Container>
      <Button {...args} variant='contained' label='contained'/>
      <Button {...args} variant='outlined' label='outlined'/>
      <Button {...args} variant='text' label='text'/>
    </Container>
  </div>
)

const Template2 = (args: ButtonProps) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
    <Container>
      <Button {...args} size='small' />
      <Button {...args} size='medium'/>
      <Button {...args} size='large'/>
    </Container>
  </div>
)

const Template3 = (args: ButtonProps) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
    <Container>
      <Button {...args} color='primary'/>
      <Button {...args} color='secondary'/>
    </Container>
  </div>
)

export const Default: Story = {
  args: { 
    label: 'Button',
  },
};

export const color: Story = {
  render: Template3,
  args: { 
    label: 'Button', 
  },
};

export const disable: Story = {
  render: Template2,
  args: { 
    label: 'Button',
    disabled: true,
  },
};

export const loading: Story = {
  render: Template2,
  args: { 
    label: 'Button',
    loading: true,
  },
};

export const variant: Story = {
  render: Template,
  args: { 
    label: 'Button',
  },
};

export const size: Story = {
  render: Template2,
  args: { 
    label: 'Button',
  },
};