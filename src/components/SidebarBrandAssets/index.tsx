import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarLogoAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>A Marca</S.TextH1>
        &nbsp;{' '}
        <S.TextContent>
          <strong>
            {' '}
            Não poderíamos deixar de citar também outra influência pela qual o
            nome da marca foi concebida. A mitologia grega.
          </strong>
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Em mitologia grega , Céfalo ( / s ɛ f əl ə s / ; do grego : Κέφαλος
          Céfalo ) <strong>é um príncipe da Aeolia</strong>, o filho de Deion /
          Deioneos, régua de Fócida, e Diomede, e neto de Éolo . Ele era um dos
          amantes da deusa do amanhecer Eos. A palavra kephalos é grego para
          &quot;<strong>cabeça</strong>&quot;, talvez usada aqui porque Cefalo
          foi o &quot;cabeça&quot;{' '}
          <strong>fundador de uma grande família</strong> que inclui Odisseu.
        </S.TextContent>{' '}
        &nbsp;{' '}
        <S.TextContent>
          {' '}
          Pode ser que Cefalo signifique a cabeça do Sol que mata (evapora)
          Procris (orvalho) com seu raio (ou dardo) infalível.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          A deusa do amanhecer, Eos, se apaixonou por ele e sequestrou Cefalo
          quando ele estava caçando.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          <strong>Uma outra curiosidade é que </strong>Céfalo tem o seu próprio
          reino com o nome de <strong>Cephallenia</strong>, tendo conexões
          culturais com Atenas. &nbsp;
          <strong>Na história</strong>, Cephalus ajudou o Anfitrião de Micenas
          em uma guerra contra os Taphians e Teleboans. Ele foi premiado com a
          ilha de Samos, que posteriormente{' '}
          <strong>passou a ser conhecida como Cephallenia</strong>. As pessoas
          que viviam em Cephallenia e nas ilhas vizinhas passaram a ser
          conhecidas como <strong>cefalênicas</strong>.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          <strong>
            {' '}
            Nós não podíamos deixar de trazer essa parte da história para
            brindar um traço tão significativo à marca. Esperamos vocês,
            cefalênicos!
          </strong>
        </S.TextContent>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarLogoAssets
