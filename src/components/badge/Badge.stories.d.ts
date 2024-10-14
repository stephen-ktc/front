import { StoryObj } from '@storybook/react';
interface IMeta {
    title: string;
    component: object;
    parameters: any;
    tags: string[];
    args?: object;
    argTypes: object;
    render?: any;
}
declare const meta: IMeta;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Color: Story;
export declare const Variant: Story;
export declare const ShowZero: Story;
export declare const MaxValue: Story;
