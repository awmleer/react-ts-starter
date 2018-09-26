import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import {Hello} from '../Hello'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const tree = Enzyme.shallow(
    <Hello compiler="TypeScript 123" framework="React" />,
  )
  expect(tree).toMatchSnapshot()
})
