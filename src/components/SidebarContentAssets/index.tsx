import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarContentAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>Conceito</S.TextH1>
        <S.TextContent>
          O logotipo do Cefalia é a combinação de um nome totalmente arquetipado
          , com um significado real associado ao sinal médico da cruz vermelha.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Céfalo: suf. Componente de palabra procedente del gr. kephale y que
          significa <strong>cabeza</strong>.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          NOTA: También se escribe: -cefala, <strong>-cefalia</strong>.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Gran Diccionario de la Lengua Española © 2016 Larousse Editorial, S.L.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Vale ressaltar também que o sufixo <strong>-ia</strong> também foi
          pensado com o significado de formar palavras relativas à assuntos como
          ciência, conjunto, doutrina, profissão e qualidade.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Logo, o termo <strong>Cefalia</strong> significa todas as qualidades
          do <strong>Cérebro</strong> sendo maximizadas por nós!
        </S.TextContent>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarContentAssets
