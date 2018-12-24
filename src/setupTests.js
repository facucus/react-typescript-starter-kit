// add some helpful assertions
import "jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

export default localStorageMock;
