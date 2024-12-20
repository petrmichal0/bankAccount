const motion = {
  div: jest.fn(({ children }) => children),
  span: jest.fn(({ children }) => children),
};

const AnimatePresence = jest.fn(({ children }) => children);

module.exports = {
  motion,
  AnimatePresence,
};
