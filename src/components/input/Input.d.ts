import { default as React } from '../../../../../node_modules/react';
interface InputProps {
    size?: 'small' | 'large';
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
export {};
