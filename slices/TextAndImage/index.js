import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextAndImage = ({ slice }) => (
  <section>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.body} />
    <button>{ slice.primary.buttonText }</button><br/><br/>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
)

export default TextAndImage