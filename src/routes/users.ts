import * as express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
const router = Router();

// router.get('/', async (req, res) => {
//   let result = await usersService.getUsers();
//   res.send(result);
// });

router.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Ciao 3 world',
  });
});

export { router };
