import React, {useState, useRef} from 'react';

export const Input = () => {
  // TypeScript infers a string value
  const [name, setName] = useState('')
  // explicit
  // const [name, setName] = useState<string>('')
  // const [name, setName] = useState<string | null>(null)

  // (null!) additional check: ref value is read only
  const ref = useRef<HTMLInputElement>(null!);
  // TypeScript Refs
  if(ref && ref.current) {
  console.log(ref.current.value);
}
  
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
  )
}
