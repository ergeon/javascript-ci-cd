import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';


test('Counter dummy test', () => {
  const component = renderer.create(
    <Counter />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
