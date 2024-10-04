export interface RadioProps {
    name: string;
    value: string;
    size?: 's' | 'm';
    label: string;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Radio: ({ name, value, size, label, ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
