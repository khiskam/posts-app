import { posts } from './posts.schema';
import * as auth from './auth';

export const schema = {
  posts,
  ...auth,
};

export type Schema = typeof schema;
