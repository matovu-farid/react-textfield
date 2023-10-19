import { useRef } from 'react'
import ErrorText from './ErrorText'
interface Props {
  value: string
  onChange: (value: string) => void
  className?: string
  validations?: {
    check: () => boolean
    message: string
  }[],
  prefix?: string,
}

function TextField({
  value, onChange, className,  validations, prefix = '',
}:Props) {
  const customRef = useRef(null)
  return (
    <div className="flex flex-col">
      <div className={`text-field-prefix ${className || `text-field`}`} data-prefix={prefix}>
        

        <input
          ref={customRef}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className={`input `}
        />
      </div>
      <ErrorText
        ref={customRef}
        validations={validations}
      />
    </div>
  )
}
export default TextField
