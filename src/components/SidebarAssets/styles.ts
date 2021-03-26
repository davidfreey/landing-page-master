import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  padding-left: 1.6rem;
  padding-top: 1.6rem;
  background-color: #232946;
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;

  align-items: left;
  height: 96vh;
  width: 27rem;
  background-color: #141f36;
  color: #fff;
`

export const SidebarMenu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    width: 100%;
  `}
`
export const SidebarMenuItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    height: 6rem;
    width: 100%;
    align-items: center;
    padding-left: 2rem;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2rem;
      padding: 2rem;
      box-shadow: inset 0.3rem 0 0 0 #fff;
      cursor: pointer;
    }
  `}
`

export const Icon = styled.svg`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
  `}
`

export const SidebarMenuItemLabel = styled.p`
  ${({ theme }) => css`
    margin-top: 0;
    margin-left: 2rem;
    font-family: ${theme.font.family};
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    color: #ffffff;
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

export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  ${media.greaterThan('medium')`
    margin-left: 2.5rem;
    width: 16rem;

  `}
`
export const LogoWrapper = styled.img`
  margin: 2rem;
  margin-left: 3.2rem;
  width: 16rem;

  ${media.lessThan('medium')`
  margin-left: 2rem;
    width: 12rem;
  `}
`
export const BackToHome = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
  margin: 200px 30px 60px 30px;
  padding: 20px 0px 0px 30px;
  border-top: 1px solid #2e2e33;
`
