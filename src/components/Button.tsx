import React from 'react'

type Props = {
  // onClick(): string; method returns string
  // onClick(): void; method returns nothing
  // onClick(text: string): void; method with params
  // onClick: void; function returns nothing
  //onClick: (text: string) => void; //function w/ params
  //onClick: (e: React.MouseEvent) => void; //Basic mouse event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Add children props(can be a string/element)
// If children are coming in: Button: React.FC<Props> =  ({ onClick, children }) => 
// If no children: Button = ({ onClick, children }: Props) => {

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}> {children}</button>
  
}
