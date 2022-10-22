import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3001/counter/increment', async (req, res, ctx) => {
    const { value } = res.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
];
