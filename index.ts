import { screen, MatcherOptions, SelectorMatcherOptions } from "@testing-library/dom";
import { ByRoleOptions, fireEvent } from "@testing-library/react";

const isTruthy = (text: string, options?: MatcherOptions) => {
  const element = screen.getByText(text, options);
  expect(element).toBeTruthy();
  return element;
}

const isFalsy = (text: string, options?: SelectorMatcherOptions) => {
  expect(screen.queryByText(text, options)).toBeFalsy();
}

const isLabelTruthy = (label: string, options?: SelectorMatcherOptions) => {
  const element = screen.getByLabelText(label, options);
  expect(element).toBeTruthy();
  return element;
}

const isLabelFalsy = (label: string, options?: SelectorMatcherOptions) => {
  expect(screen.queryByLabelText(label, options)).toBeFalsy();
}

const isAsyncLabelTruthy = async (label: string, options?: SelectorMatcherOptions) => {
  const element = await screen.findByLabelText(label, options);
  expect(element).toBeTruthy();
  return element;
}

const isTestIdTruthy = (testId: string, options?: MatcherOptions) => {
  const element = screen.getByTestId(testId, options);
  expect(element).toBeTruthy();
  return element;
}

const isTestIdFalsy = (testId: string, options?: MatcherOptions) => {
  expect(screen.queryByTestId(testId, options)).toBeFalsy();
}

const isDataAttributeTruthy = (attribute: string, value?: string) => {
  const attributeValue = value ? `${attribute}="${value}"` : attribute;
  const element = globalThis.document.querySelector(`[data-${attributeValue}]`);
  expect(element).toBeTruthy();
  return element;
}

const getButton = (name: string, options?: Omit<ByRoleOptions, 'name'>) => {
  return screen.getByRole<HTMLButtonElement>('button', { name, ...options });
}

const getInput = (label: string, options?: Omit<ByRoleOptions, 'name'>) => {
  return screen.getByRole('textbox', { name: label, ...options }) as HTMLInputElement;
}

const isButtonDisabled = (name: string, options?: Omit<ByRoleOptions, 'name'>) => {
  const button = getButton(name, options);
  expect(button.disabled).toBe(true);
  return button;
}

const isButtonEnabled = (name: string, options?: Omit<ByRoleOptions, 'name'>) => {
  const button = getButton(name, options);
  expect(button.disabled).toBe(false);
  return button;
}

const changeInputValue = (label: string, value: string, options?: Omit<ByRoleOptions, 'name'>) => {
  const input = getInput(label, options);
  changeInputValueEvent(input, value);
  return input;
}

const changeInputValueEvent = (input: HTMLInputElement, value: string | number) => {
  fireEvent.change(input, { target: { value } })
}

const getInputByName = (name: string) => {
  return globalThis.document.querySelector(`input[name="${name}"]`);
}

export const testAssertions = {
  isTruthy,
  isFalsy,
  isLabelTruthy,
  isLabelFalsy,
  isAsyncLabelTruthy,
  isDataAttributeTruthy,
  isTestIdTruthy,
  isTestIdFalsy,
  isButtonEnabled,
  isButtonDisabled,
}

export const testUtils = {
  getButton,
  getInput,
  getInputByName,
  changeInputValue,
  changeInputValueEvent
}