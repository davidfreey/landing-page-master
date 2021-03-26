import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarTipographyAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>Tipografia</S.TextH1>
        &nbsp;{' '}
        <S.TextContent>
          A tipografia cria a identidade e tem o objetivo de uniformizar os
          textos de peças de comunicação e aplicações institucionais. Trata-se
          da família Poppins, com todas as suas variações.
        </S.TextContent>
        &nbsp;{' '}
        <S.TipDiv>
          <S.TopDiv>
            <S.CircleDiv></S.CircleDiv>
            <S.CircleHexDiv>#141F36</S.CircleHexDiv>
          </S.TopDiv>
          <S.FontsDiv>
            <S.TipUl>
              <S.TipLi300>
                Poppins Light &nbsp; <span className="size">300</span>
              </S.TipLi300>
              <S.TipLi400>
                Poppins Regular &nbsp; <span className="size">400</span>
              </S.TipLi400>
              <S.TipLi600>
                Poppins Bold &nbsp; <span className="size">600</span>
              </S.TipLi600>
            </S.TipUl>
          </S.FontsDiv>
        </S.TipDiv>
        &nbsp;{' '}
        <S.TipDiv2>
          <S.TopDiv2>
            <S.CircleDiv2></S.CircleDiv2>
            <S.CircleHexDiv2>#D6E1F8</S.CircleHexDiv2>
          </S.TopDiv2>
          <S.FontsDiv2>
            <S.TipUl2>
              <S.TipLi3002>
                Poppins Light &nbsp; <span className="size">300</span>
              </S.TipLi3002>
              <S.TipLi4002>
                Poppins Regular &nbsp; <span className="size">400</span>
              </S.TipLi4002>
              <S.TipLi6002>
                Poppins Bold &nbsp; <span className="size">600</span>
              </S.TipLi6002>
            </S.TipUl2>
          </S.FontsDiv2>
        </S.TipDiv2>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarTipographyAssets
