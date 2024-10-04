export interface CheckboxProps {
    name?: string;
    value?: string;
    size?: 's' | 'm';
    label?: string;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Checkbox: ({ name, value, size, label, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
