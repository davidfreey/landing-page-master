import { Column } from '../Footer/styles'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const GridContainer = styled.div`
  display: grid;
  background-color: #232946;

  grid-template-columns: 0.2fr 0.8fr;
  /* grid-template-rows: 8rem 1fr; */

  grid-template-areas:
    'sidebar main  '
    'sidebar main  '
    'sidebar main  '
    'sidebar main  ';

  /* grid-container height = 100% of viewport height */
  height: 100vh;

  grid-area: sidebar;
`
export const Header = styled.div`
  box-shadow: 0 1px 0 0 #eaedf3;
  grid-area: head;
`
export const Content = styled.div`
  width: 80%;
  padding: 2rem;
  grid-area: main;
`
export const TextContent = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: #fff;
    font-size: 16px;
    letter-spacing: 0.1rem;
    line-height: 1.6;
    font-weight: 300;
    color: #ffffff;
  `}
`
export const TextH1 = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: #fff;
    font-size: 2.8rem;
    line-height: 1.5;
    font-weight: 400;
    color: #ffffff;
  `}
`

export const SidebarAA = styled.a`
  ${({ theme }) => css`
    border: 0.2rem solid #121629;
    border-color: #121629;
    padding: 20px;
    width: 200px;
    height: 150px;
  `}
`

export const CircleA = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  `}
`

export const TextA = styled.div`
  ${({ theme }) => css`
    border: 0.2rem solid #121629;
    border-color: #121629;
    padding: 20px;
    width: 200px;
    height: 150px;
  `}
`

export const ColorA = styled.div`
  ${({ theme }) => css`
    border: 0.2rem solid #121629;
    border-color: #121629;
    padding: 20px;
    width: 200px;
    height: 150px;
  `}
`

export const PalleteDiv = styled.div`
  $timing: 0.3s;

  .color-list {
    display: flex;
    flex-direction: row;
    height: 50vh;
  }

  .color {
    flex: 0 0 20%; /*flex-grow | flex-shrink | flex-basis*/
    box-shadow: 0 0 30px #424242;
    padding: 1em;
    color: white;
    transition: flex-basis $timing ease-in-out;
    &:hover {
      flex-basis: 40%;
      .details {
        opacity: 1;
      }
    }
  }

  .name {
    font-size: 1.2em;
  }

  .details {
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .details li {
    line-height: 2em;
  }

  #purple {
    background-color: #232946;
  }

  #red {
    background-color: #e06469;
  }

  #red-light {
    background-color: #eebbc3;
  }

  #purple-light {
    background-color: #b8c1ec;
  }

  * {
    box-sizing: border-box;
  }
`
