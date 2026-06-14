import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Komponente', () => {
  test('Rendert die Vite und React Überschriften', () => {
    render(<App />);
    
    // Prüft, ob der Text "Vite + React" auf der Seite existiert
    expect(screen.getByText("Get started")).toBeInTheDocument();
  });
});