import { render, screen } from '@testing-library/react';
import Login from './Login';

test('test mail', () => {
    render(<Login />);
    const linkElement = screen.getByPlaceholderText(/Votre email/i);
    expect(linkElement).toBeInTheDocument();
});
