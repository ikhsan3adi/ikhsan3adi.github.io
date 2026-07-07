import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/svelte';
import ThemeButton from './ThemeButton.svelte';

describe('ThemeButton', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  afterEach(cleanup);

  it('renders a toggle button', () => {
    const { container } = render(ThemeButton);
    expect(container.querySelector('#themeModeBtn')).toBeTruthy();
  });

  it('has correct aria-label for accessibility', () => {
    render(ThemeButton);
    expect(screen.getByLabelText('Toggle dark mode')).toBeTruthy();
  });

  it('starts in light mode (no dark class)', () => {
    render(ThemeButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('toggles dark class on document element when clicked', async () => {
    const { container } = render(ThemeButton);
    const btn = container.querySelector('#themeModeBtn')!;

    await fireEvent.click(btn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await fireEvent.click(btn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('persists theme choice in localStorage', async () => {
    const { container } = render(ThemeButton);
    const btn = container.querySelector('#themeModeBtn')!;

    await fireEvent.click(btn);
    expect(localStorage.theme).toBe('dark');

    await fireEvent.click(btn);
    expect(localStorage.theme).toBe('light');
  });
});
