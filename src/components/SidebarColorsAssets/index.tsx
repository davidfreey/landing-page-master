import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarColorsAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>Cores</S.TextH1>
        <S.TextContent>
          Nós desenvolvemos a marca com a paleta definida por duas cores
          principais: <strong>roxo azulado e vermelho alaranjado. </strong> Cada
          uma é acompanhada pelas suas respectivas tonalidades. O roxo é a cor
          principal da nossa marca. Cada cor retrata um sentimento ou emoção
          diferente e, ao compreender a psicologia das cores, optamos por
          escolher uma cor que ressoa com o público-alvo e emite vibração e a
          emoção que desejamos.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          O vermelho é uma cor muito emocional e visualmente intensa que pode
          realmente ter um efeito físico nas pessoas, aumentando seu
          metabolismo, respiração, frequência cardíaca, além de deixá-las com
          fome. Isso, combinado com o fato de que o vermelho chama a atenção.
          &nbsp;{' '}
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Na medicina, o vermelho indica que o paciente necessita de atendimento
          imediato, portanto, é emergência! O Laranja é muito urgente, o
          paciente necessita de atendimento o mais prontamente possível.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Frequentemente associado a: Coragem, Poder, Força, Urgência, Amor,
          Paixão Romance.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          O Roxo tem uma história de ser a cor da superioridade, sendo usado
          pela realeza para exibir sua posição e poder. Está associado a poder,
          nobreza, prestígio, luxo e criatividade. O roxo pode cair tanto no
          lado quente quanto no lado frio da roda de cores, dependendo de quanto
          vermelho versus azul é adicionado.
        </S.TextContent>
        &nbsp;{' '}
        <S.TextContent>
          Frequentemente associado a: Realeza, Luxo, Sofisticação, Magia,
          Espiritualidade, Temperamento.
        </S.TextContent>
        &nbsp;{' '}
        <S.PalleteDiv>
          <section className="color" id="purple">
            <h2 className="name">Roxo Azulado</h2>
            <ul className="details">
              <li>#232946</li>
              <li>RGB(35,41,70)</li>
            </ul>
          </section>
          <section className="color" id="red">
            <h2 className="name">Vermelho Alaranjado</h2>
            <ul className="details">
              <li>#E06469</li>
              <li>RGB(224,100,105)</li>
            </ul>
          </section>
          <section className="color" id="red-light">
            <h2 className="name">Contraste do Vermelho</h2>
            <ul className="details">
              <li>#EEBBC3</li>
              <li>RGB(238,187,195)</li>
            </ul>
          </section>
          <section className="color" id="purple-light">
            <h2 className="name">Contraste do Roxo</h2>
            <ul className="details">
              <li>#B8C1EC</li>
              <li>RGB(184,193,236)</li>
            </ul>
          </section>
        </S.PalleteDiv>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarColorsAssets
