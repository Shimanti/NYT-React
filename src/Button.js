import React from 'react'
import buttonStyle from './button.css'

const Button = () => {

  // const button = document.querySelector('button')
  // button.addEventListener('click', changeButton)
  //
  // function changeButton() {
  //   const btn = document.querySelector('#btn')
  //   if (btn.innerHTML == "Fiction") {
  //       btn.innerHTML = "Non Fiction"
  //   } else if (btn.innerHTML == "Non Fiction") {
  //       btn.innerHTML = "Fiction"
  //
  //   }
  // }

  return (
    <div className={buttonStyle}>
      <button class="button-40" id="btn">
        Click for NonFiction
      </button>
    </div>
  )
}

export default Button
