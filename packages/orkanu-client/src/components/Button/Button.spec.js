import React from 'react';
import { render, cleanup, configure } from '@testing-library/react';
import { Button } from './Button';

configure({ testIdAttribute: 'data-test-id' });

describe('Button', () => {
  const renderComponent = props => {
    const utils = render(<Button {...props}></Button>);
    const testee = utils.getByTestId('test');
    return { ...utils, testee };
  };

  let testeeProps;
  beforeEach(() => {
    testeeProps = { dataTestId: 'test' };
  });
  afterEach(() => {
    testeeProps = null;
    cleanup();
  });
  test('renders correctly', () => {
    const { testee } = renderComponent(testeeProps);
    expect(testee).toMatchSnapshot();
  });
});
