import React from 'react'
import { useState } from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MenuIcon from 'components/Menu'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'
import MediaMatch from 'components/MediaMatch'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Container>
        <S.MenuWrapper>
          <S.LogoWrapper>
            <Logo {...logo} />
          </S.LogoWrapper>
          <MediaMatch lessThan="medium">
            <S.IconWrapper onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </S.IconWrapper>
          </MediaMatch>
        </S.MenuWrapper>
        <S.Content>
          <S.TextBlock>
            <S.Title>{header.title}</S.Title>
            <S.Description>{header.description}</S.Description>
            <S.ButtonWrapper>
              <Button href={header.button.url} onClick={onClick} wide>
                {header.button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src={getImageUrl(header.image.url)}
            alt={header.image.alternativeText}
          />
        </S.Content>
      </Container>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          color="#232946"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Entrar</S.MenuLink>
          <S.MenuLink href="#">Assets</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default SectionHero
