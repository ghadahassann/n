import { render } from '@testing-library/react';
import Badge from '../Badge';

test('matches snapshot (small & stable)', () => {
  const { container } = render(<Badge>New</Badge>);
  expect(container.firstChild).toMatchSnapshot();
});
