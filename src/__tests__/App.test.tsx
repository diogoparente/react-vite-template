import FetchDataComponent from "../App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";

test("fetches and displays data", async () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  render(
    <QueryClientProvider client={client}>
      <FetchDataComponent />
    </QueryClientProvider>
  );

  expect(await screen.findByText("Data: Hello from MSW")).toBeTruthy();
});
