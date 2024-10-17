import { StoryObj } from '@storybook/react';
import { ButtonProps } from './Button';
interface IMeta {
    title: string;
    component: {};
    parameters: {};
    tags: string[];
    args?: {};
    render?: any;
}
declare const meta: IMeta;
export default meta;
type Story = StoryObj<ButtonProps>;
export declare const Default: Story;
export declare const color: Story;
export declare const disable: Story;
export declare const loading: Story;
export declare const variant: Story;
export declare const size: Story;
