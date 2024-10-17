import { default as React } from '../../../../../node_modules/react';
interface TextFieldProps {
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
    value?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    error?: boolean;
    helperText?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    size?: 'small' | 'medium' | 'large';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: ({ color, value, variant, id, label, placeholder, required, size, onChange, error, helperText, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
