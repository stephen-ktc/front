import { default as React } from '../../../../../node_modules/react';
export interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    text: string;
    color?: string;
    align?: 'left' | 'center' | 'right' | 'justify';
}
export declare const Text: React.FC<TextProps>;
