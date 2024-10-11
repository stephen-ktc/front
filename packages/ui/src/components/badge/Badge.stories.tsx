import type { Args, Meta, StoryObj } from '@storybook/react'
import { BellIcon } from '@storybook/icons'
import { Badge } from './Badge.tsx'

const meta: Meta<typeof Badge> = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Badge 색상을 설정합니다.',
      control: { type: 'select' },
    },
    variant: {
      description: 'Badge 유형을 설정합니다.',
    },
    content: {
      description: 'Badge에 표시하는 값입니다.',
      control: { type: 'select', required: true },
    },
    max: {
      description: 'Badge에 표시할 수 있는 최대 숫자를 설정합니다.',
      control: { type: 'number' },
    },
    showZero: {
      description: '값이 0인 경우 Badge 표시 여부를 설정합니다.',
    },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    content: 3,
    children: <BellIcon />,
  },
}

export const Color: Story = {
  args: {
    content: 3,
    color: 'primary',
    children: <BellIcon />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
        <Badge content={5} color={'primary'}>
          <BellIcon />
        </Badge>
        <Badge content={5} color={'secondary'}>
          <BellIcon />
        </Badge>
        <Badge content={5} color={'success'}>
          <BellIcon />
        </Badge>
        <Badge content={5} color={'warning'}>
          <BellIcon />
        </Badge>
        <Badge content={5} color={'error'}>
          <BellIcon />
        </Badge>
      </div>
    )
  },
}
export const Variant: Story = {
  args: {
    content: 3,
    variant: 'dot',
    children: <BellIcon />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Badge content={args.content} variant={'standard'}>
          <BellIcon />
        </Badge>
        <Badge content={args.content} variant={'dot'}>
          <BellIcon />
        </Badge>
      </div>
    )
  },
}

export const ShowZero: Story = {
  args: {
    content: 0,
    showZero: true,
    children: <BellIcon />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Badge content={args.content} showZero={true}>
          <BellIcon />
        </Badge>
        <Badge content={args.content} variant={'dot'} showZero={true}>
          <BellIcon />
        </Badge>
        <Badge content={args.content} showZero={false}>
          <BellIcon />
        </Badge>
      </div>
    )
  },
}
export const MaxValue: Story = {
  args: {
    content: 55,
    max: 50,
    children: <BellIcon />,
  },
  render: (args: Args) => (
    <>
      <Badge content={args.content} max={args.max}>
        {args.children}
      </Badge>
    </>
  ),
}
