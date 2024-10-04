import { default as React } from '../../../../../node_modules/react';
interface ContainerProps {
    size?: 'small' | 'large';
    label?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
}
export declare const Container: React.FC<ContainerProps>;
export {};
