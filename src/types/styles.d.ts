export type ResponsiveProp<T> = {
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type Responsive<T> = T | ResponsiveProp<T>

export type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

export type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

export type ContetnDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

export type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContetnDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'baseline'
  | 'normal'
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'strecth'
  | (stringf & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {})


export type CSSPropertyContent =
  | CSSPropertyGlobals
  | ContetnDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (stringf & {})

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * Grid
 */
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
