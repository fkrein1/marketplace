// authors.ts
import { Hono } from 'hono';

export const authors = new Hono()
  .get('/', c => c.json('list authors'))
  .post('/', c => c.json('create an author', 201))
  .get('/:id', c => c.json(`get ${c.req.param('id')}`));
