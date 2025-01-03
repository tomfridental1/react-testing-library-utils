import { render } from '@testing-library/react';
import { testAssertions, testUtils } from "index";

const { isTruthy, isFalsy, isLabelTruthy, isTestIdTruthy, isTestIdFalsy, isLabelFalsy, isAsyncLabelTruthy } = testAssertions;
const { getInputByName } = testUtils;

describe('test assertions', () => {
  it('isTruthy', () => {
    render(<span>hello world</span>);
    isTruthy('hello world');
  })

  it('isFalsy', () => {
    render(<span>hello world</span>);
    isFalsy('bye world');
  })

  it('isLabelTruthy', () => {
    render(<span aria-label='test label'>hello world</span>);
    isLabelTruthy('test label');
  })

  it('isLabelFalsy', () => {
    render(<span aria-label='test label'>hello world</span>);
    isLabelFalsy('wrong label');
  })

  it('isTestIdTruthy', () => {
    render(<span data-testid='test id'>hello world</span>);
    isTestIdTruthy('test id');
  })

  it('isTestIdFalsy', () => {
    render(<span data-testid='test id'>hello world</span>);
    isTestIdFalsy('test class');
  })

  it('isDataAttributeTruthy without value', () => {
    render(<span data-status='active'>hello world</span>);
    testAssertions.isDataAttributeTruthy('status');
  })

  it('isDataAttributeTruthy with value', () => {
    render(<span data-status='active'>hello world</span>);
    testAssertions.isDataAttributeTruthy('status', 'active');
  })

  it('isTestIdFalsy', async () => {
    render(<span aria-label="async label">hello world</span>);
    await isAsyncLabelTruthy('async label');
  })

  it('isButtonEnabled', () => {
    render(<button>text</button>);
    testAssertions.isButtonEnabled('text');
  })

  it('isButtonDisabled', () => {
    render(<button disabled>text</button>);
    testAssertions.isButtonDisabled('text');
  })
});

describe('test utils', () => {
  it('getButton by text', () => {
    render(<button>click me</button>);
    const button = testUtils.getButton('click me');
    expect(button).toBeTruthy();
  })

  it('getButton by label', () => {
    render(<button aria-label='test label'>click me</button>);
    const button = testUtils.getButton('test label');
    expect(button).toBeTruthy();
  })

  it('getInput by label', () => {
    render(<input aria-label="abc" />);
    const input = testUtils.getInput('abc');
    expect(input).toBeTruthy();
  })

  it('change input value', () => {
    render(<input aria-label="abc" />);
    const input = testUtils.changeInputValue('abc', 'new value');
    expect(input.value).toBe('new value');
  })

  it('getInputByName', () => {
    render(<input name="abc" />);
    const input = getInputByName('abc');
    expect(input).toBeTruthy()
  })
})