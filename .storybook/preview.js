import GlobalStyle from '../src/styles/global.styles'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

}

export const decorators = [
    (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
    )
  ]
