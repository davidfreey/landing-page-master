import React from 'react'
import { CourseJsonLd, ProductJsonLd } from 'next-seo'

const JsonSchema = () => (
  <>
    <CourseJsonLd
      courseName="Cefalia Med"
      providerName="David Freitas"
      providerUrl="https://cefalia.com/"
      description="Estude medicina online. Desde o Ciclo Básico Comum ao Ciclo Biomédico."
    />
    <ProductJsonLd
      productName="Curso React Avançado"
      images={['https://cefalia.com/img/cover.png']}
      description="Estude medicina online. Desde o Ciclo Básico Comum ao Ciclo Biomédico."
      brand="David Freitas"
      reviews={[
        {
          author: {
            type: 'Person',
            name: 'Henrique Albert Schmaiske'
          },
          datePublished: '2020-03-06T12:37:40Z',
          reviewBody:
            'O Curso foi incrível! Gostei muito das explicações, bem claras e objetivas! Deixo a sugestão para um próximo Curso: NextJS mostrando fazer um Ecommerce. Compraria sem nem olhar o preço.',
          name: 'Didática perfeita',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1'
          },
          publisher: {
            type: 'Person',
            name: 'Henrique Albert Schmaiske'
          }
        }
      ]}
      aggregateRating={{
        ratingValue: '4.8',
        reviewCount: '27659'
      }}
      offers={[
        {
          price: '289.95',
          priceCurrency: 'BRL',
          priceValidUntil: '2020-07-05',
          url: 'https://reactavancado.com.br/',
          availability: 'https://schema.org/InStock',
          seller: {
            name: 'Willian Justen Cursos'
          }
        },
        {
          price: '579.99',
          priceCurrency: 'BRL',
          priceValidUntil: '2021-07-05',
          url: 'https://reactavancado.com.br/',
          availability: 'https://schema.org/InStock',
          seller: {
            name: 'Willian Justen Cursos'
          }
        }
      ]}
      mpn="reactavancado"
      sku="reactavancado"
    />
  </>
)

export default JsonSchema
