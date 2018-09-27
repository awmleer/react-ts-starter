import React from 'react'
import {Hello} from '../Hello'
import {shallow} from 'enzyme'


it('renders correctly', () => {
  const tree = shallow(
    <Hello compiler="TypeScript 123" framework="React" />,
  )
  expect(tree).toMatchSnapshot()
})
