import React, {useState} from 'react';

export const Input = () => {
  // TypeScript infers a string value
  const [name, setName] = useState('')
  // explicit
  // const [name, setName] = useState<string>('')
  // const [name, setName] = useState<string | null>(null)
  
  return (
    <input value={name} onChange={e => setName(e.target.value)}/>
  )
}
