import styled from 'styled-components'
import type { Responsive } from '@/types/styles'
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  AppTheme,
} from '@/utils/styles'

// 텍스트 변형
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  variant?: TextVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * 텍스트
 * 변형, 색상, 타이포그래피, 레이아웃, 스페이스 관련 Props 추가
 */
const Text = styled.span<TextProps>`
  ${({ variant, fontSize, letterSpacing, lineHeight, theme }) => {
    const finalTheme = theme as AppTheme
    // 변형 스타일에 적용
    if (variant && variants[variant]) {
      const styles = [];
      if (!fontSize) {
        styles.push(toPropValue('font-size', variants[variant].fontSize, finalTheme))
      }
      if (!letterSpacing) {
        styles.push(toPropValue('letter-spacing', variants[variant].letterSpacing, finalTheme))
      }
      if (!lineHeight) {
        styles.push(
          toPropValue('line-height', variants[variant].lineHeight, finalTheme),
        )
      }
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.fontSize, props.theme as AppTheme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme as AppTheme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme as AppTheme)}
  ${(props) => toPropValue('color', props.color, props.theme as AppTheme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme as AppTheme)}
  ${(props) => toPropValue('width', props.width, props.theme as AppTheme)}
  ${(props) => toPropValue('height', props.height, props.theme as AppTheme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme as AppTheme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme as AppTheme)}
  ${(props) => toPropValue('display', props.display, props.theme as AppTheme)}
  ${(props) => toPropValue('border', props.border, props.theme as AppTheme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme as AppTheme)}
  ${(props) => toPropValue('margin', props.margin, props.theme as AppTheme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme as AppTheme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme as AppTheme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme as AppTheme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme as AppTheme)}
  ${(props) => toPropValue('padding', props.padding, props.theme as AppTheme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme as AppTheme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme as AppTheme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme as AppTheme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme as AppTheme)}
`

Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}

export default Text