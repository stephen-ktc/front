import { CSSProperties, ReactNode } from '../../../../../node_modules/react';
export interface BadgeProps {
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
    variant?: 'dot' | 'standard';
    max?: number;
    showZero?: boolean;
    content: number;
    children?: ReactNode;
    id?: string;
    className?: string;
    style?: CSSProperties;
}
export declare const Badge: ({ color, variant, max, showZero, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
