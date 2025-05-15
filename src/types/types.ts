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

export type ColumnKey = "col-1" | "col-2" | "col-3" | "1" | "2" | "3" | "left" | "middle" | "right"

export const columnMap: Record<"col-1" | "col-2" | "col-3" | "1" | "2" | "3" | "left" | "middle" | "right", "col-1" | "col-2" | "col-3"> = {
  "col-1": "col-1",
  "col-2": "col-2",
  "col-3": "col-3",
  "1": "col-1",
  "2": "col-2",
  "3": "col-3",
  "left": "col-1",
  "middle": "col-2",
  "right": "col-3"
} as const