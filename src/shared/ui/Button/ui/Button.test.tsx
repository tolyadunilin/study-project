import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('test Button', () => {
  test('find test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('find class name', () => {
    render(<Button className={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.CLEAR);
  });
});
