// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const mockClipboard = {
  writeText: jest.fn(),
};

global.navigator.clipboard = mockClipboard;
global.console.error = jest.fn();
global.console.log = jest.fn();
global.console.warn = jest.fn();
