import React from 'react';
import { render, screen } from '@testing-library/react';
import Technology from './Technology';

it('should render the text component', () => {
    const { getByText } = render(<Technology />);
    const text = getByText('Use H(app)y to give your digital photos some pop.');
    expect(text).toBeTruthy();
});

it('should render the image component', () => {
  const { getByAltText } = render(<Technology />);
  const image = getByAltText('PhotoTechnology');
  expect(image).toBeTruthy();
});
