import { ReactElement, MouseEvent, MouseEventHandler, TouchEvent } from 'react';

export interface IPoint {
  x: number;
  y: number;
}

export interface IContainer {
  height: number;
  width: number;
}

export interface IGeometry {
  type: string;
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface ISelectorMethods {
  onMouseDown?: (
    annotation: IAnnotation | undefined,
    e: MouseEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onMouseUp?: (
    annotation: IAnnotation | undefined,
    e: MouseEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onMouseMove?: (
    annotation: IAnnotation | undefined,
    e: MouseEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onTouchStart?: (
    annotation: IAnnotation | undefined,
    e: TouchEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onTouchEnd?: (
    annotation: IAnnotation | undefined,
    e: TouchEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onTouchMove?: (
    annotation: IAnnotation | undefined,
    e: TouchEvent,
    editorMode: EditorMode
  ) => IAnnotation | undefined;

  onClick?: (
    annotation: IAnnotation | undefined,
    e: any,
    editorMode: EditorMode
  ) => IAnnotation | undefined;
}

export interface ISelector {
  TYPE: string;
  intersects: (
    { x, y }: { x: number; y: number },
    geometry: IGeometry,
    container: { width: number; height: number }
  ) => boolean;
  area: (
    geometry: IGeometry,
    container: { width: number; height: number }
  ) => number;
  methods: ISelectorMethods;
}

export interface IAnnotation {
  selection?: {
    mode: string;
    anchorX?: number | null;
    anchorY?: number | null;
  };
  geometry: IGeometry;
  data: {
    text?: string;
    id?: number;
  };
}

export interface RenderEditorProps {
  annotation: IAnnotation;
  onSubmit: (e: IAnnotation) => void;
}

export interface ShapeProps {
  key?: number;
  annotation: IAnnotation;
  isMouseOver: boolean;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
}

export interface RenderHighlightProps {
  key?: number;
  annotation: IAnnotation;
  renderContent?: (props: ContentProps) => ReactElement | null;
}

export interface ContentProps {
  key?: number;
  annotation: IAnnotation;
}

export interface RenderSelectorProps {
  annotation: IAnnotation;
  renderContent?: (props: ContentProps) => ReactElement | null;
}

export enum EditorMode {
  Annotate = 'Annotate',
  HighlightOnly = 'HighlightOnly',
}

export enum SelectionMode {
  Selecting = 'SELECTING',
  Editing = 'EDITING',
  Final = 'FINAL',
}

export type WrappedShapeProps = Omit<
  ShapeProps,
  'isMouseOver' | 'onMouseEnter' | 'onMouseLeave'
> & {
  renderContent?: (props: ContentProps) => ReactElement | null;
};

export interface RenderOverlayProps {
  annotations: IAnnotation[];
  selectorType: string;
}

export interface RenderToolbarProps {
  selectedSelectorType: string;
  setSelectedSelectorType: (selector: string) => void;
}

export interface AnnotationProps {
  alt?: string;
  allowTouch?: boolean;
  annotations: IAnnotation[];

  children?: any;
  className?: string;

  disableAnnotation?: boolean;
  disableEditor?: boolean;
  disableOverlay?: boolean;
  disableSelector?: boolean;

  editorMode: EditorMode;

  innerRef: (el: HTMLImageElement) => object;

  renderContent: (props: ContentProps) => ReactElement | null;
  renderEditor: (props: RenderEditorProps) => ReactElement | null;
  renderHighlight: (props: WrappedShapeProps) => ReactElement | null;
  renderOverlay: (props: RenderOverlayProps) => ReactElement | null;
  renderSelector: (props: WrappedShapeProps) => ReactElement | null;

  selectors: ISelector[];

  shapes: string[];
  onAnnotationsUpdate: (annotations: IAnnotation[]) => void;
  src: string;
  style?: object;
}

export interface Theme {
  annotation: {
    backgroundColor: string;
    active: {
      border: string;
      boxShadow: string;
      backgroundColor: string;
    };
  };
}

export interface OptionBar {
  categories: string[];
}
export interface OptionBarButton {
  category: string;
  renderButton: (props: AnnotationProps) => ReactElement;
}
