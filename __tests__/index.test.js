/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import List from '../pages/list.js'

describe('With Enzyme', () => {
  it('List shows', () => {
  })
})

describe('With Snapshot Testing', () => {
  it('List shows', () => {
    const items = []
    const component = renderer.create(<List items={items} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
