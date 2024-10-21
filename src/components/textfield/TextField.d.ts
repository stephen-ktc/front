import { default as React } from '../../../../../node_modules/react';
type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning';
type SizeOptions = 'small' | 'medium' | 'large';
type VariantOptions = 'filled' | 'outlined' | 'standard';
interface TextFieldProps {
    color?: ColorOptions;
    value?: string;
    variant?: VariantOptions;
    error?: boolean;
    helperText?: string;
    id?: string | any;
    label?: string;
    placeholder?: string | any;
    required?: boolean | any;
    size?: SizeOptions;
    disabled?: boolean | any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: ({ color, value, variant, id, label, placeholder, required, size, onChange, error, disabled, helperText, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
