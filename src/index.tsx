import * as React from 'react'
// import DropDown from './DropDown'
import "../tailwind.css"
import Setting from './components/filter/Setting'

export const Thing = () => {

  return <div className='text-blue-400 mt-10 flex flex-1 items-center justify-center'>
    {/* <DropDown label={'label'} list={["ciao"]} filter={[]} setFilter={function (_value: React.SetStateAction<string[]>): void {
      throw new Error('Function not implemented.')
    }} /> */}
    <Setting settingInfoDesk={[{ label: "ciaoa", handler: () => { } }]} />
  </div>
}
