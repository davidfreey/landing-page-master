import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto 0;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `}
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: auto;

    ${media.greaterThan('medium')`
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: min(${theme.font.sizes.xxlarge}, 5vw);
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 400;

    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xlarge}, 3vw);
      line-height: min(5rem, 4.5vw);
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.medium};
    margin: 0 auto;

    ${media.greaterThan('medium')`
      margin: 0;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
    width: min(34rem, 100%);

    ${media.greaterThan('medium')`
      margin: 0;
      width: 42rem;
    `}
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: #f2f0ee
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    display: inline-block;
    margin-right: ${theme.spacings.xsmall}
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    left: 50%
    transform: translateX(-50%)
`}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    background: #232946;
    color: ${theme.colors.primary};
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 5px;
    width: auto;
    position: relative;
    min-width: 180px;
    text-align: center;

    &::after {
      content: '';
      font-weight: 400;
      position: absolute;
      left: 80%;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    &:hover {
      background: #e06469;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #eebbc3;
      padding: 1rem 1rem 1rem 1rem;
      color: #ffffff;

      &::after {
        opacity: 1;
        transition: all 0.5s;
        color: #ffffff;
      }
    }
  `}
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: ${theme.font.weight.medium};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
  `}
`
