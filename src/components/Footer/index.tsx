import React from 'react'
import Link from 'next/link'

import Container from 'components/Container'

import * as S from './styles'
import Logo from 'components/Logo'
import HeadingFooter from 'components/HeadingFooter'

const Footer = () => (
  <S.Wrapper>
    <S.LogoWrapper src="img/cefaliawhite.svg" alt="Logo do Cefalia" />
    <S.Content>
      <S.Column>
        <HeadingFooter
          color="black"
          size="small"
          lineLeft={false}
          lineBottom={true}
          lineColor="secondary"
        >
          Contato
        </HeadingFooter>
        <S.ContatoWrapper>
          <nav aria-labelledby="Contato media">
            <div className="v_menu">
              <ul className="v_menu_items">
                <li>
                  <a
                    href="mailto:contato@cefalia.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do E-mail do Cefalia"
                  >
                    <svg
                      fill="#e06469"
                      strokeWidth="0"
                      viewBox="0 -3 24 24"
                      aria-hidden="true"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5491164391216"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do WhatsApp do Cefalia"
                  >
                    <svg
                      fill="#e06469"
                      strokeWidth="0"
                      viewBox="0 0 24 22"
                      aria-hidden="true"
                      height="1.2em"
                      width="1.2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </S.ContatoWrapper>
      </S.Column>

      <S.Column>
        <HeadingFooter
          color="black"
          size="small"
          lineLeft={false}
          lineBottom
          lineColor="secondary"
        >
          Redes Sociais
        </HeadingFooter>
        <S.IconWrapper>
          <nav aria-labelledby="social media">
            <div className="v_menu">
              <ul className="v_menu_items">
                <li>
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
                      viewBox="0 0 24 22"
                      aria-hidden="true"
                      height="1.1em"
                      width="1.1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path> */}
                      <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/cefaliar"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do Instagram do Cefalia"
                  >
                    <svg
                      stroke="#e06469"
                      fill="#e06469"
                      strokeWidth="0"
                      viewBox="-40 0 570 400"
                      aria-hidden="true"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCicN-mZ1VCthsOFzApVZRUw/videos"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do YouTube do Cefalia"
                  >
                    <svg
                      stroke="#e06469"
                      fill="#e06469"
                      strokeWidth="0"
                      viewBox="0 -20 576 400"
                      aria-hidden="true"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="http://tme.com/BrasileirosArgentina"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Link do Telegram do Cefalia"
                  >
                    <svg
                      stroke="#e06469"
                      fill="#e06469"
                      strokeWidth="0"
                      viewBox="0 -2 24 24"
                      aria-hidden="true"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </S.IconWrapper>
      </S.Column>

      <S.Column>
        <HeadingFooter
          color="black"
          size="small"
          lineBottom
          lineLeft={false}
          lineColor="secondary"
        >
          Links
        </HeadingFooter>

        <nav aria-labelledby="footer resources">
          <S.ContatoWrapper>
            <nav aria-labelledby="Contato media">
              <div className="v_menu">
                <ul className="v_menu_items">
                  <li>
                    <a
                      href="/assets"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Link do Assets do Cefalia"
                    >
                      <svg
                        fill="#e06469"
                        strokeWidth="0"
                        viewBox="0 0 24 22"
                        aria-hidden="true"
                        height="1.1em"
                        width="1.1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.759 20.498l-3.743-7.856c-1.041-2.186-2.016-4.581-2.016-7.007v-2.635h-2c0 3.391-.083 5.188 2.21 10.502l3.743 7.854c.143.302-.068.644-.377.644h-1.246l-4.88-10h-2.984c1.795-4.183 1.528-5.963 1.534-9h-2v2.635c0 2.426-.975 4.82-2.016 7.006l-3.743 7.856c-.165.348-.241.708-.241 1.058 0 1.283 1.023 2.445 2.423 2.445h13.153c1.4 0 2.424-1.162 2.424-2.446 0-.35-.076-.709-.241-1.056zm-13.259 1.502c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm2.5-4c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .552 0 1 .447 1 1 0 .553-.448 1-1 1zm3 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-5-20c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dashboard.kiwify.com.br/"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Link do Instagram do Cefalia"
                    >
                      <svg
                        fill="#e06469"
                        strokeWidth="0"
                        viewBox="0 0 24 22"
                        aria-hidden="true"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 10v-5l8 7-8 7v-5h-8v-4h8zm2-8v2h12v16h-12v2h14v-20h-14z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </S.ContatoWrapper>
        </nav>
      </S.Column>
    </S.Content>
    <S.Copyright>Cefalia 2021 © Todos os direitos reservados. </S.Copyright>
  </S.Wrapper>
)

export default Footer
