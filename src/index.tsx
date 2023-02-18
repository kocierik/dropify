import * as React from 'react'
import DropDown from './DropDown'
import "../tailwind.css"

export const Thing = () => {
  return <div className='text-blue-400 mt-10'>
    <DropDown list={[]} filter={[]} setFilter={function (_value: React.SetStateAction<string[]>): void {
      throw new Error('Function not implemented.')
    }} />

  </div>
}
