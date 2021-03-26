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
    line-height: 1.8;
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
  `}
`
export const TipDiv = styled.div`
  border-radius: 0.5rem;
  flex: 0 0 20%; /*flex-grow | flex-shrink | flex-basis*/
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 37.2rem;
  height: 26rem;
  border: 1px solid #f2f0ee;
  background-color: #f2f0ee;
`

export const TopDiv = styled.div`
  padding-left: 9rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const CircleDiv = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #030517;
  background-color: #030517;
`

export const CircleHexDiv = styled.div`
  color: #030517;
`

export const FontsDiv = styled.div`
  list-style: none;
`
export const TipUl = styled.ul`
  list-style: none;
  padding-left: 9rem;
  padding-top: 1rem;
`

export const TipLi300 = styled.li`
  color: #030517;
  list-style: none;
  font-weight: 300;
`
export const TipLi400 = styled.li`
  color: #030517;
  list-style: none;
  font-weight: 400;
`

export const TipLi600 = styled.li`
  color: #030517;
  list-style: none;
  font-weight: 600;
`

// TipBlack

export const TipDiv2 = styled.div`
  border-radius: 0.5rem;
  flex: 0 0 20%; /*flex-grow | flex-shrink | flex-basis*/
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 37.2rem;
  height: 26rem;
  border: 1px solid #141f36;
  background-color: #141f36;
`

export const TopDiv2 = styled.div`
  padding-left: 9rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const CircleDiv2 = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #b8c1ec;
  background-color: #b8c1ec;
`

export const CircleHexDiv2 = styled.div`
  color: #b8c1ec;
`

export const FontsDiv2 = styled.div`
  list-style: none;
`
export const TipUl2 = styled.ul`
  list-style: none;
  padding-left: 9rem;
  padding-top: 1rem;
`

export const TipLi3002 = styled.li`
  color: #b8c1ec;
  list-style: none;
  font-weight: 300;
`
export const TipLi4002 = styled.li`
  color: #b8c1ec;
  list-style: none;
  font-weight: 400;
`

export const TipLi6002 = styled.li`
  color: #b8c1ec;
  list-style: none;
  font-weight: 600;
`
