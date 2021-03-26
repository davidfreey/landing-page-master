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
export const LogoWrapper = styled.img`
  width: 20rem;
  border-radius: 1rem;

  ${media.lessThan('medium')`
  margin-left: 2rem;
    width: 12rem;
  `}
`

export const TeamDiv = styled.div`
  border-radius: 0.5rem;
  display: flex;
`

export const LinkA = styled.a`
  border-radius: 0.5rem;
  text-decoration: none;
  color: #f2f0ee;
`

export const TextDiv = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TeamUl = styled.ul`
  list-style: none;
  padding-left: 2rem;
  font-size: 2.4rem;
  line-height: 1.8;
  font-weight: 400;
  color: #ffffff;
`

export const TeamLi = styled.li`
  color: #f2f0ee;
  list-style: none;
  font-weight: 300;
`
export const Icon = styled.svg`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
  `}
`
