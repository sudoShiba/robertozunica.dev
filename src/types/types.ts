export interface StoryComponentProps {
    title: string;
    subtitle?: string;
    date?: string;
    children: React.ReactNode;
    size: 1 | 2 | 3;
    image?: string;
}

export interface SliderProps {
    handleToggle: (visibleColumn: SliderProps["visibleColumn"]) => void;
    visibleColumn: "col-1" | "col-2" | "col-3";
}