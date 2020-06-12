import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders App Wrapper', () => {
  const { getByTestId } = render(<App />);
  const appWrapper = getByTestId('app-wrapper');
  expect(appWrapper).toBeInTheDocument();
});
