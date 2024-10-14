import {ReactNode} from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import {ButtonProps} from './Button';
// import { fn } from '@storybook/test'

const meta: Meta<typeof Button>= {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onClick: fn() },
}
export default meta

type Story = StoryObj<typeof meta>

const Container = ({children}: { children: ReactNode }) => {
  return (
      <div style={{width: '300px', height:' 100px', background: 'pink', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>{children}</div>
      </div>
  )
}

const Template = (args: ButtonProps) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
    <Container>
      <Button {...args} color='primary' size='small'/>
      <Button {...args} color='secondary' size='medium'/>
      <Button {...args} disabled size='large'/>
    </Container>
  </div>
)

const Template2 = (args: ButtonProps) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
    <Container>
      <Button {...args} size='small'/>
      <Button {...args} variant='outlined' size='medium'/>
      <Button {...args} variant='text' size='large'/>
    </Container>
  </div>
)

export const contained: Story = {
  render: Template,
  args: { label: 'Button',
          variant: 'contained',
          onClick: () => console.log('clicked')
        },
};

export const outlined: Story = {
  render: Template,
  args: { label: 'Button',
          variant: 'outlined',
          href: 'http://www.naver.com'
        },
};

export const text: Story = {
  render: Template,
  args: { label: 'Button',
          variant: 'text',
          onClick: () => console.log('clicked')
        },
};

export const loading: Story = {
  render: Template2,
  args: { label: 'Button',
          loading: true,
        },
};
  

