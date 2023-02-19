import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Setting } from '../src/components/filter/Setting'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Setting settings={[{
      label: 'hello', handler() {
        console.log('hello')
      },
    }]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
