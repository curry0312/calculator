import React from 'react'
import FunctionalButton from '../components/FunctionalButton'
import NumberButton from '../components/NumberButton'
import { cleanNumbers, pressBasicSign, pressEqualSign, toggleMinusSign, togglePersentageSign } from '../features/numberSlice'

const DisplayButtonsSection = () => {
  return (
    <div className='p-5 basis-2/3' aria-label='buttons'>
        <div className='grid grid-cols-4 gap-2'>
            <FunctionalButton func={cleanNumbers}>AC</FunctionalButton>
            <FunctionalButton func={toggleMinusSign}>+/-</FunctionalButton>
            <FunctionalButton func={togglePersentageSign}>%</FunctionalButton>
            <FunctionalButton func={pressBasicSign} bgColor="yellow">/</FunctionalButton>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <FunctionalButton func={pressBasicSign} bgColor="yellow">x</FunctionalButton>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <FunctionalButton func={pressBasicSign} bgColor="yellow">-</FunctionalButton>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <FunctionalButton func={pressBasicSign} bgColor="yellow">+</FunctionalButton>
            <NumberButton>0</NumberButton>
            <NumberButton>.</NumberButton>
            <FunctionalButton func={pressEqualSign} bgColor="yellow">=</FunctionalButton>
        </div>
      </div>
  )
}

export default DisplayButtonsSection
