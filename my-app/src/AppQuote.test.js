import { render, screen } from '@testing-library/react';
import AppForFreecodecamp from './AppForFreecodecamp';

test('renders learn react link', () => {
  render(<AppForFreecodecamp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
