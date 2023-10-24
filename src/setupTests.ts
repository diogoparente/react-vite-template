import { server } from "./test-utils/server";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => {
  // Server has to be globally scoped, so it can properly intercept all api calls during tests.
  server.listen({ onUnhandledRequest: "error" });
  return () => server.close();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
