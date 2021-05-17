import React from 'react';
import { render, screen } from '@testing-library/react';
import BubblePage from './BubblePage';

// const testData = {
//   data: [
//     {
//       bubble: 'Big',
//       color: 'blue',
//     },
//   ],
// };

test('Renders BubblePage without errors', () => {
  // Finish this test

  render(<BubblePage />);
});

test('Fetches data and renders the bubbles', () => {
  // Finish this test
  render(<BubblePage />);

  const colors = screen.getByText(/colors/i);

  expect(colors).toBeInTheDocument();
});
