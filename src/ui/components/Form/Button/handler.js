import { rest } from 'msw';
export const handler = [
  rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) =>
    res(
      ctx.json({
        status: 200,
        userID: 'MOCK_ID',
        message: 'API Intercepted',
      }),
    ),
  ),
];
