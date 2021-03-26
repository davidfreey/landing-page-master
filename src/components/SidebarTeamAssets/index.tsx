import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SidebarAssets from 'components/SidebarAssets'

const SidebarTeamAssets = () => (
  <S.Wrapper>
    <S.GridContainer>
      <SidebarAssets />
      <S.Content>
        <S.TextH1>Missão</S.TextH1>
        &nbsp;{' '}
        <S.TextContent>
          O Cefalia tem a missão de contribuir com a preparação de grandes
          profissionais da área de Medicina. Para isso, nosso compromisso é
          entregar conteúdos atualizados e de alta qualidade que fazem a
          diferença no mercado e ajudam nossos alunos a alcançarem seus maiores
          objetivos.
        </S.TextContent>
        &nbsp; <S.TextH1>Visão</S.TextH1>
        &nbsp;{' '}
        <S.TextContent>
          Ser uma grande plataforma de educação em Tecnologia e Medicina na
          América Latina, reconhecida por ser uma das melhores opções de ensino
          online.
        </S.TextContent>
        &nbsp; <S.TextH1>O Novo Projeto</S.TextH1>
        &nbsp;{' '}
        <S.TextContent>
          O Curso <strong>Pronto Pra Passar UBAXXI</strong> simboliza o início
          de tudo. Destinado ao aluno do CBC que ainda tem dificuldade, mas que
          quer lutar até o fim e deseja embarcar no mundo da medicina.
        </S.TextContent>
        {/* &nbsp;{' '}
        <S.TextContent>
          O novo projeto Bootcamp, Campo de treinamento, que representa a
          imersão intensiva em treinamentos. Cursos de especialização completos,
          onde o aluno poderá se realmente focar 100% no estudo sem se preocupar
          com a organização.
        </S.TextContent> */}
        &nbsp;{' '}
        <S.TeamDiv>
          <S.LogoWrapper src="img/davidplaza.jpeg" alt="Foto David Freitas" />
          <S.TextDiv>
            <S.TeamUl>
              <S.TeamLi>
                <span className="size">
                  <strong>David Freitas</strong>
                </span>
              </S.TeamLi>
              <S.TeamLi>
                <S.Icon viewBox="0 0 24 24">
                  <path
                    width="2.4rem"
                    height="2.4rem"
                    stroke="#f2f0ee"
                    fill="#f2f0ee"
                    d="M7.074 1.408c0-.778.641-1.408 1.431-1.408.942 0 1.626.883 1.38 1.776-.093.336-.042.695.138.995.401.664 1.084 1.073 1.977 1.078.88-.004 1.572-.408 1.977-1.078.181-.299.231-.658.138-.995-.246-.892.436-1.776 1.38-1.776.79 0 1.431.63 1.431 1.408 0 .675-.482 1.234-1.118 1.375-.322.071-.6.269-.769.548-.613 1.017.193 1.917.93 2.823-1.21.562-2.524.846-3.969.846-1.468 0-2.771-.277-3.975-.84.748-.92 1.555-1.803.935-2.83-.168-.279-.446-.477-.768-.548-.636-.14-1.118-.699-1.118-1.374zm13.485 14.044h2.387c.583 0 1.054-.464 1.054-1.037s-.472-1.037-1.054-1.037h-2.402c-.575 0-1.137-.393-1.227-1.052-.092-.677.286-1.147.765-1.333l2.231-.866c.541-.21.807-.813.594-1.346-.214-.533-.826-.795-1.367-.584l-2.294.891c-.329.127-.734.036-.926-.401-.185-.423-.396-.816-.62-1.188-1.714.991-3.62 1.501-5.7 1.501-2.113 0-3.995-.498-5.703-1.496-.217.359-.421.738-.601 1.146-.227.514-.646.552-.941.437l-2.295-.89c-.542-.21-1.153.051-1.367.584-.213.533.053 1.136.594 1.346l2.231.866c.496.192.854.694.773 1.274-.106.758-.683 1.111-1.235 1.111h-2.402c-.582 0-1.054.464-1.054 1.037s.472 1.037 1.054 1.037h2.387c.573 0 1.159.372 1.265 1.057.112.728-.228 1.229-.751 1.462l-2.42 1.078c-.53.236-.766.851-.526 1.373s.865.753 1.395.518l2.561-1.14c.307-.137.688-.106.901.259 1.043 1.795 3.143 3.608 6.134 3.941 2.933-.327 5.008-2.076 6.073-3.837.261-.432.628-.514.963-.364l2.561 1.14c.529.236 1.154.005 1.395-.518.24-.522.004-1.137-.526-1.373l-2.42-1.078c-.495-.221-.867-.738-.763-1.383.128-.803.717-1.135 1.276-1.135z"
                  />
                </S.Icon>
                &nbsp;{' '}
                <span className="size">CEO & Desenvolvedor FullStack</span>
              </S.TeamLi>
              <S.TeamLi>
                <S.Icon viewBox="0 0 24 24">
                  <path
                    width="2.4rem"
                    height="2.4rem"
                    stroke="#f2f0ee"
                    fill="#f2f0ee"
                    d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"
                  />
                </S.Icon>
                &nbsp;{' '}
                <span className="size">Buenos Aires | Capital Federal</span>
              </S.TeamLi>
              <S.TeamLi>
                <S.Icon viewBox="0 0 24 24">
                  <a
                    href="http://instagram/davidfreey"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do Instagram do David"
                  >
                    <svg
                      stroke="#e06469"
                      fill="#e06469"
                      strokeWidth="0"
                      // viewBox="0 0 420 500"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
                    </svg>
                  </a>
                </S.Icon>
                &nbsp;{' '}
                <S.LinkA href="http://instagram/davidfreey">Instagram</S.LinkA>
              </S.TeamLi>
            </S.TeamUl>
          </S.TextDiv>
        </S.TeamDiv>
      </S.Content>
    </S.GridContainer>
  </S.Wrapper>
)

export default SidebarTeamAssets
