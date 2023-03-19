import React from 'react'
import { useSelector } from 'react-redux'
import FunctionalButton from '../components/FunctionalButton'
import NumberButton from '../components/NumberButton'
import { calculationSelector, cleanNumbers, pressBasicSign, pressEqualSign, toggleMinusSign, togglePersentageSign } from '../features/numberSlice'

const Calculator = () => {
  const calculation = useSelector(calculationSelector)
  return (
    <div className='flex flex-col bg-iphone-black rounded-2xl w-[350px] h-[550px]'>
      <div className='flex justify-end items-end p-4 basis-1/3' aria-label='display numbers'>
        <div className='text-white text-3xl'>
          {calculation}
        </div>
      </div>
      <div className='p-4 basis-2/3' aria-label='buttons'>
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
    </div>
  )
}

export default Calculator
