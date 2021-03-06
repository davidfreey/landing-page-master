import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { Review } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  id: number
  name: string
  image: string
  description: string
}

const ReviewCard: React.FC<Review> = ({ id, name, text, photo }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.text')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((txt) => observer.observe(txt))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image src={getImageUrl(photo.url)} alt={name} loading="lazy" />

        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="text">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
