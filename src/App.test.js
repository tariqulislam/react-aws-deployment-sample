import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render React Redux tutorial 1 text in document', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Redux tutorial 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('render  Typescript Tutorial for beginners in document', () => {
  const { getByText } = render(<App />);
  const getListItem = getByText(/Typescript Tutorial for beginners/i)
  expect(getListItem).toBeInTheDocument();
});
