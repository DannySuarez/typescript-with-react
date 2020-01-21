import React from 'react'

type Props = {
  title: string, // Required
  isActive?: boolean // Optional
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
     <h1>{title}</h1> 
     {isActive && <h3>Active</h3>}
    </div>
  )
}

