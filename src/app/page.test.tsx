import { render, screen, fireEvent } from '@testing-library/react';
import Page from './page';
import { vi } from 'vitest';

vi.mock('./utils/db', () => ({
  saveSplit: vi.fn().mockResolvedValue(undefined),
  getSplits: vi.fn().mockResolvedValue([]),
}));

describe('payment split page', () => {
  it('parses user input and displays calculated amounts', async () => {
    render(<Page />);

    fireEvent.change(screen.getByLabelText(/total/i), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText(/Thomas/i), {
      target: { value: '30' },
    });
    fireEvent.change(screen.getByLabelText(/Lucas/i), {
      target: { value: '20' },
    });

    fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

    const thomasCell = await screen.findByText('55.00');
    const lucasCell = await screen.findByText('45.00');
    const totalCell = await screen.findByText('100.00');

    expect(
      parseFloat(thomasCell.textContent || '0') +
        parseFloat(lucasCell.textContent || '0'),
    ).toBeCloseTo(100);
    expect(totalCell).toBeInTheDocument();
  });
});
