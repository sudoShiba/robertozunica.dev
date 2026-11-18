export interface StoryComponentProps {
    title: string;
    subtitle?: string;
    date?: string;
    children: React.ReactNode;
    size: 1 | 2 | 3;
    image?: string;
    caption?: string;
}

export interface MultiStoryProps {
    title: string;
    children: React.ReactNode;
}

export interface MultiStoryItemProps {
    title: string;
    date?: string;
    children?: React.ReactNode;
}

export interface SliderProps {
    handleToggle: (visibleColumn: SliderProps["visibleColumn"]) => void;
    visibleColumn: "col-1" | "col-2" | "col-3";
}

export type ColumnKey = "col-1" | "col-2" | "col-3" | "1" | "2" | "3" | "left" | "middle" | "center" | "right"

export type Columns = "col-1" | "col-2" | "col-3"

export const columnMap: Record<ColumnKey, Columns> = {
  "col-1": "col-1",
  "col-2": "col-2",
  "col-3": "col-3",
  "1": "col-1",
  "2": "col-2",
  "3": "col-3",
  "left": "col-1",
  "middle": "col-2",
  "center": "col-2",
  "right": "col-3"
} as const

export interface RichTextProps {
    text: string;
}

export interface StoryEntry {
    type: "single";
    title: string;
    subtitle?: string;
    date?: string;
    size: 1 | 2 | 3;
    image?: string;
    caption?: string;
    text: string;
    sites: string[];
}

export interface MultiStoryEntry {
    type: "multi";
    title: string;
    items: { title: string; date?: string; text: string }[];
    sites: string[];
}

export type StoryItem = StoryEntry | MultiStoryEntry

export type StoryColumns = Record<Columns, StoryItem[]>
