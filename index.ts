import { screen, MatcherOptions, SelectorMatcherOptions } from "@testing-library/dom";

export const isTruthy = (text: string, options?: MatcherOptions) => {
  const element = screen.getByText('text', options);
  expect(element).toBeTruthy();
  return element;
}

export const isFalsy = (text: string, options?: SelectorMatcherOptions) => {
  expect(screen.queryByText(text, options)).toBeFalsy();
}

export const isLabelTruthy = (label: string, options?: SelectorMatcherOptions) => {
  const element = screen.getByLabelText(label, options);
  expect(element).toBeTruthy();
  return element;
}

export const isLabelFalsy = (label: string, options?: SelectorMatcherOptions) => {
  expect(screen.queryByLabelText(label, options)).toBeFalsy();
}

export const isAsyncLabelTruthy = async (label: string, options?: SelectorMatcherOptions) => {
  const element = await screen.findByLabelText(label, options);
  expect(element).toBeTruthy();
  return element;
}

export const isTestIdTruthy = (testId: string) => {
  const element = screen.getByTestId(testId);
  expect(element).toBeTruthy();
  return element;
}

export const isTestIdFalsy = (testId: string) => {
  expect(screen.queryByTestId(testId)).toBeFalsy();
}