import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // Importa MemoryRouter
import SingleBooksComponent from './Components/SingleBooksComponent';  // Il tuo componente

test('renders SingleBooksComponent and navigates to details page', () => {
  render(
    <MemoryRouter>  {/* Aggiungi MemoryRouter per simulare la navigazione */}
      <SingleBooksComponent book={{ asin: '1234', title: 'Test Book', img: 'test.jpg' }} />
    </MemoryRouter>
  );

  // Verifica che il titolo del libro sia visibile
  expect(screen.getByText('Test Book')).toBeInTheDocument();

  // Controlla che il pulsante di navigazione sia visibile
  const button = screen.getByText('View Details');
  expect(button).toBeInTheDocument();
});
