import { screen, MatcherOptions } from "@testing-library/react";

export const getText = (text: string, options?: MatcherOptions) => {
  return screen.getByText('text', options);
}

export const getAsyncText = async (text: string, options?: MatcherOptions) => {
  return await screen.findByText('text', options);
}