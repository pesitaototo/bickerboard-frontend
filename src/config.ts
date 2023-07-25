
export const baseUrl = process.env.NODE_ENV === 'test'
  ? 'http://localhost:3001'
  : '';