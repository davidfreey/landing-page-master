import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarLogoAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>Logo</S.TextH1>
        <S.LogoWrapper
          src="img/cefalia-white-bg.png"
          alt="Logo do Cefalia com Fundo Branco"
        />
        &nbsp; <S.TextContent>Logo original em fundo branco</S.TextContent>
        <S.LogoWrapper
          src="img/cefalia-blue-bg.png"
          alt="Logo do Cefalia com Fundo Azul"
        />
        &nbsp; <S.TextContent>Logo original em fundo azul</S.TextContent>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarLogoAssets
