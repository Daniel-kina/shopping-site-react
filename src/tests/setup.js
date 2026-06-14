import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Fügt die Jest-DOM Matcher (z.B. toBeInTheDocument) zu Vitest hinzu
expect.extend(matchers);

// Bereinigt das simulierte HTML nach jedem einzelnen Test, damit sich Tests nicht gegenseitig stören
afterEach(() => {
  cleanup();
});