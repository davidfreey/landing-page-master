import { Column } from '../Footer/styles'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const GridContainer = styled.div`
  display: grid;
  background-color: #232946;

  grid-template-columns: 0.2fr 0.6fr 0.2fr;
  /* grid-template-rows: 8rem 1fr; */

  grid-template-areas:
    'sidebar main side side'
    'sidebar main side side'
    'sidebar main side side'
    'sidebar main side side';

  /* grid-container height = 100% of viewport height */
  height: 100vh;

  grid-area: sidebar;

  ${media.lessThan('medium')`

  grid-template-columns: 0.2fr 0.6fr 0.2fr;
  grid-template-areas:
    'sidebar main main '
    'sidebar main main'
    'sidebar main main'
    'sidebar main main';
  `}
`
export const Header = styled.div`
  box-shadow: 0 1px 0 0 #eaedf3;
  grid-area: head;
`
export const Content = styled.div`
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
