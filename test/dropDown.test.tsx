import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DropDown } from '../src/components/dropDown/DropDown'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DropDown label={'label'} filter={[]} setFilter={function (_value: React.SetStateAction<string[]>): void {
      throw new Error('Function not implemented.')
    }} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
