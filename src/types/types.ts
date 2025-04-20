export interface StoryComponentProps {
    title: string;
    children: React.ReactNode;
    size: 1 | 2 | 3;
    image?: string;
    icon?: string;
}