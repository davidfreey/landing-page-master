import React from 'react'
import { CourseJsonLd, ProductJsonLd } from 'next-seo'

const JsonSchema = () => (
  <>
    <CourseJsonLd
      courseName="Cefalia Med"
      providerName="David Freitas"
      providerUrl="https://apicefalia.s3.amazonaws.com/hero3_dddedaf284.svg"
      description="Estude medicina online. Desde o Ciclo Básico Comúm ao Ciclo Biomédico."
    />
    <ProductJsonLd
      productName="Curso React Avançado"
      images={['https://apicefalia.s3.amazonaws.com/hero1_6e5386f782.svg']}
      description="Estude medicina online. Desde o Ciclo Básico Común ao Ciclo Biomédico."
      brand="David Freitas"
      reviews={[
        {
          author: {
            type: 'Person',
            name: 'Henrique Albert Schmaiske'
          },
          datePublished: '2020-03-06T12:37:40Z',
          reviewBody: '',
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
          url: 'https://cefalia.com/',
          availability: 'https://schema.org/InStock',
          seller: {
            name: 'Cefalia Studio'
          }
        }
      ]}
      mpn="cefalia"
      sku="cefalia"
    />
  </>
)

export default JsonSchema
