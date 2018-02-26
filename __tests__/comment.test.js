/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Comment from '../components/Comment'

const commentItem = {
  "id": 1111,
  "level": 1,
  "user": "usermock",
  "time": 1519611385,
  "time_ago": "22 minutes ago",
  "content": "Comment's description.",
  "comments": []
};

describe('<Comment />', () => {
  it('renders comment content', () => {
    const wrapper = shallow(
        <Comment item={commentItem} />
    );
    expect(wrapper.find('.comment').html()).toContain(`<div class=\"has-text-grey-dark comment\">${commentItem.content}</div>`)
  });

  it('renders user name', () => {
    const wrapper = shallow(
        <Comment item={commentItem} />
    );
    const user = wrapper.find('.user')
    expect(user.text()).toBe(`@${commentItem.user}`);
  });
});

describe('With Snapshot Testing', () => {
  it('Comment shows', () => {
    const component = renderer.create(<Comment item={commentItem} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
