import "@testing-library/jest-dom";

// turn off framer-motion for tests
jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(({ children }) => children), // Mock motion.div
    span: jest.fn(({ children }) => children), // Mock motion.span
  },
  AnimatePresence: jest.fn(({ children }) => children), // Mock AnimatePresence
}));
