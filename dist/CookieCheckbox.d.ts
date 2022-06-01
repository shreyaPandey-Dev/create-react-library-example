/// <reference types="react" />
interface ORProps {
    accordionData: {
        title: string;
        sectionsData: {
            title: string;
            content: string;
            strict: boolean;
            checkboxId: string;
        }[];
    };
}
export declare const CookieCheckbox: ({ accordionData }: ORProps) => JSX.Element;
export {};
