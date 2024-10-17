export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disabled?: boolean;
    href?: string;
    label: string;
    loading?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}
export declare const Button: ({ color, disabled, href, label, loading, variant, size, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
