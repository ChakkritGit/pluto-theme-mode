import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { PlutoProvider } from '../../src/components/PlutoProvider';
import ToggleButton from '../../src/components/ToggleButton';

test('Switches theme mode on Light, Dark, System click', async () => {
  render(
    <PlutoProvider light="#ffffff" dark="#222222">
      <ToggleButton />
    </PlutoProvider>
  );

  const iconWrapper = screen.getByTestId('icon-wrapper');
  const divWrapper = screen.getByTestId('div-wrapper');
  fireEvent.click(iconWrapper);

  await waitFor(() => screen.getByText('Light'));

  const lightOption = screen.getByText('Light');
  const darkOption = screen.getByText('Dark');
  const systemOption = screen.getByText('System');

  fireEvent.click(lightOption);
  await waitFor(() => {
    const bgColor = window.getComputedStyle(divWrapper).backgroundColor;
    expect(bgColor).toBe('rgb(255, 255, 255)');
  });

  fireEvent.click(darkOption);
  await waitFor(() => {
    const bgColor = window.getComputedStyle(divWrapper).backgroundColor;
    expect(bgColor).toBe('rgb(34, 34, 34)');
  });

  fireEvent.click(systemOption);
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)';
  await waitFor(() => {
    const bgColor = window.getComputedStyle(divWrapper).backgroundColor;
    expect(bgColor).toBe(systemTheme);
  });
});

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
