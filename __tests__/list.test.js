/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import List from '../pages/list.js'
import Item from '../components/Item';

const itemTest = {
  "id": 16461773,
  "title": "How poverty changes your mindset",
  "points": 105,
  "user": "bryanwbh",
  "time": 1519600325,
  "time_ago": "2 hours ago",
  "comments_count": 27,
  "type": "link",
  "url": "http://review.chicagobooth.edu/behavioral-science/2018/article/how-poverty-changes-your-mind-set",
  "domain": "review.chicagobooth.edu"
}

describe('<List />', () => {
  it('renders three <Item /> components', () => {
    const wrapper = shallow(<List items={[itemTest]} />);

    expect(wrapper.find(Item).length).toBe(1)
  });
});

describe('With Snapshot Testing', () => {
  it('List shows', () => {
    const component = renderer.create(<List items={[itemTest]} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
