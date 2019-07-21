import { Request, Response, Application } from 'express';
import * as user from './user.routes';

export const register = ( app: Application ) => {
  app.get( '/api', ( req: Request, res: Response ) => {
    res.send( 'Api called!' );
  } );

  user.register( app );
};
