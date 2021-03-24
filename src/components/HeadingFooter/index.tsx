import React from 'react'
import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft: boolean
  lineBottom?: boolean
  lineColor?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const HeadingFooter = ({
  children = 'Most Popular',
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default HeadingFooter
