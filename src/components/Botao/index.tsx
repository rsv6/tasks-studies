import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}> { // Espera um desses valores como props


  render() {
    const { type = 'button', onClick } = this.props // se nao passar nada, seta type='button'

    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao