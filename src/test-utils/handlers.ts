import { rest } from "msw";

export const handlers = [
  rest.get(process.env.VITE_API_URL!, (_req, res, ctx) => {
    return res(
      ctx.json({
        data: "Hello from MSW",
      })
    );
  }),
];
