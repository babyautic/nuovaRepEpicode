import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  
import SingleBooksComponent from './Components/SingleBooksComponent';  

test('renders SingleBooksComponent and navigates to details page', () => {
  render(
    <MemoryRouter> 
      <SingleBooksComponent book={{ asin: '1234', title: 'Test Book', img: 'test.jpg' }} />
    </MemoryRouter>
  );


  expect(screen.getByText('Test Book')).toBeInTheDocument();
  
  const button = screen.getByText('View Details');
  expect(button).toBeInTheDocument();
});
