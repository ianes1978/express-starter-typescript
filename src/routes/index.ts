import { router as usersRoute } from './users';
import { Express } from 'express';

export default function (app: Express) {
  app.use('/api/users', usersRoute);
}
