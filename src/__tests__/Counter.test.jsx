import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

test('increments when clicking', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const value = screen.getByLabelText('value');
  const btn = screen.getByRole('button', { name: /increment/i });
  await user.click(btn);
  expect(value).toHaveTextContent('Count: 1');
});
