
# react-testing-library-utils

[react-testing-library-utils](https://www.npmjs.com/package/react-testing-library-utils) is a utility wrapper around **Jest** and **React Testing Library** that simplifies and shortens common test operations. It provides easy-to-use utility functions such as `isTruthy`, `isFalsy`, and others, helping to make your tests cleaner and more expressive. By wrapping frequently used assertions and actions, this library speeds up test development and improves readability.

## Key Features
- Simplified test utility functions like `isTruthy`, `isFalsy`, and more.
- Reduces boilerplate in your Jest and React Testing Library tests.
- Improves test readability and maintainability.

## Installation

```bash
npm install react-testing-library-utils -D
```

## Utility Functions

### `isTruthy`
Checks if a given element containing the provided text is present in the DOM.

```ts
import { isTruthy } from 'react-testing-library-utils';

isTruthy('Submit'); // Asserts if an element with text 'Submit' exists
```

#### Parameters:
- `text: string` - The text content to search for.
- `options?: MatcherOptions` - Optional matching options from React Testing Library.

#### Returns:
- The matching element if it exists.

### `isFalsy`
Checks if no element containing the provided text is present in the DOM.

```ts
import { isFalsy } from 'react-testing-library-utils';

isFalsy('Cancel'); // Asserts if no element with text 'Cancel' exists
```

#### Parameters:
- `text: string` - The text content to search for.
- `options?: SelectorMatcherOptions` - Optional selector matching options from React Testing Library.

### `isLabelTruthy`
Checks if a form element with the given label text is present in the DOM.

```ts
import { isLabelTruthy } from 'react-testing-library-utils';

isLabelTruthy('Username'); // Asserts if an element with the label 'Username' exists
```

#### Parameters:
- `label: string` - The label text to search for.
- `options?: SelectorMatcherOptions` - Optional selector matching options.

#### Returns:
- The matching element if it exists.

### `isLabelFalsy`
Checks if no form element with the given label text is present in the DOM.

```ts
import { isLabelFalsy } from 'react-testing-library-utils';

isLabelFalsy('Password'); // Asserts if no element with the label 'Password' exists
```

#### Parameters:
- `label: string` - The label text to search for.
- `options?: SelectorMatcherOptions` - Optional selector matching options.

### `isAsyncLabelTruthy`
Asynchronously checks if a form element with the given label text is present in the DOM.

```ts
import { isAsyncLabelTruthy } from 'react-testing-library-utils';

await isAsyncLabelTruthy('Email'); // Asserts if an element with the label 'Email' exists asynchronously
```

#### Parameters:
- `label: string` - The label text to search for.
- `options?: SelectorMatcherOptions` - Optional selector matching options.

#### Returns:
- The matching element if it exists.

### `isTestIdTruthy`
Checks if an element with the given `data-testid` is present in the DOM.

```ts
import { isTestIdTruthy } from 'react-testing-library-utils';

isTestIdTruthy('submit-button'); // Asserts if an element with the test ID 'submit-button' exists
```

#### Parameters:
- `testId: string` - The test ID to search for.
- `options?: MatcherOptions` - Optional matching options.

#### Returns:
- The matching element if it exists.

### `isTestIdFalsy`
Checks if no element with the given `data-testid` is present in the DOM.

```ts
import { isTestIdFalsy } from 'react-testing-library-utils';

isTestIdFalsy('cancel-button'); // Asserts if no element with the test ID 'cancel-button' exists
```

#### Parameters:
- `testId: string` - The test ID to search for.
- `options?: MatcherOptions` - Optional matching options.
