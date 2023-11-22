import React from 'react'
import { Container, BodyInput, NamePhone, TextAreaInput, InputTextBtn } from './styled'

function FormCompnent(props) {
  const { object: { name, phone, textArea, text } } = props
  return (
    <Container>
      <BodyInput>
        <NamePhone>
          <input type="text" placeholder={name} />
          <input type="tel" placeholder={phone} />
        </NamePhone>
        <TextAreaInput>
          <textarea type="text" placeholder={textArea} />
        </TextAreaInput>
        <InputTextBtn>
          <p>{text}</p>
          <button>Yuborish</button>
        </InputTextBtn>
      </BodyInput>
    </Container>
  )
}

export default React.memo(FormCompnent)