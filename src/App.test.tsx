import { render, screen } from '@testing-library/react';

import App from './App';

it(`should be 'Hello Hello`, () => {
  render(<App />);
  screen.getByText('Hello Hello');
});