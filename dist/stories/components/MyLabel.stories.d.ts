import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ allCaps, color, label, size, backgroundColor, }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
        allCaps: {
            control: string;
            defaultValue: boolean;
            description: string;
        };
        color: {
            control: string;
            type: "string";
            defaultValue: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Allcaps: Story;
export declare const Secundary: Story;
export declare const Tertiary: Story;
export declare const CustomeBackgroundColor: Story;
