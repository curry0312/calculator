import DisplayButtonsSection from './DisplayButtonsSection'
import DisplayCalculationSection from './DisplayCalculationSection'

const Calculator = () => {
  return (
    <div className='flex flex-col bg-iphone-black rounded-2xl min-w-[350px] w-[350px] h-[550px]'>
      <DisplayCalculationSection />
      <DisplayButtonsSection />
    </div>
  )
}

export default Calculator
