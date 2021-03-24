import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr)
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    margin-left: ${theme.spacings.medium};
  `}

  ${media.greaterThan('medium')`
  grid-template-columns: repeat(3, 1fr)
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    li {
      background: #202024;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`

  display: flex;
	width: 50px;
	box-shadow: 0px 0px 10px #222222;
	border-radius: 5px;
	.no-cushion;
    margin: 0;
    ul{
      list-style: none;
      display: grid;
      grid-template-column: repeat(4, 40px);
      grid-auto-flow: column;
      grid-gap: 12px;

      .no-cushion;

      li{
  			.transition(all 300ms ease-in-out);
         background: #161718;
        	box-shadow: 0px 0px 10px #222222;
        border-bottom:1px solid #333333;
	  		height:50px;
        line-height:50px;
        text-align:center;
        width:50px;
        a{
          .transition(all 300ms ease-in-out);
          color:rgba(255,255,255,0.2);
          color: -webkit-activelink;
           align-items: center;
          width: 100%;
          height: 100%;

        }
        &:hover{
          cursor:pointer;
          background:#333333;
          a{
            font-size:120%;
            color:white;

          }
        }
      }
    }
  `}
`

export const ContatoWrapper = styled.div`
  ${({ theme }) => css`

  display: flex;
	width: 50px;
	box-shadow: 0px 0px 10px #222222;
	border-radius: 5px;
	.no-cushion2;
    margin: 0;
    ul{
      list-style: none;
      display: grid;
      grid-template-column: repeat(4, 40px);
      grid-auto-flow: column;
      grid-gap: 12px;

      .no-cushion2;

      li{
  			.transition(all 300ms ease-in-out);
        background: #161718;
        box-shadow: 0px 0px 10px #222222;
        border-bottom:1px solid #333333;
	  		height:50px;
        line-height:50px;
        text-align:center;
        width:50px;
        a{
          .transition(all 300ms ease-in-out);
          color:rgba(255,255,255,0.2);
          color: -webkit-activelink;
           align-items: center;
          width: 100%;
          height: 100%;

        }
        &:hover{
          cursor:pointer;
          background:#333333;
          a{
            font-size:120%;
            color:white;

          }
        }
      }
    }
  `}
`

export const LogoWrapper = styled.img`
  margin-left: 2rem;
  width: 12rem;

  ${media.greaterThan('medium')`
    margin-left: 2.5rem;
    width: 16rem;

  `}
`
