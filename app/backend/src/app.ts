import * as express from 'express';
import errorHandler from './middlewares/errorHandler';
import routerLogin from './routes/loginRouter';
import routerTeams from './routes/teamsRouter';
import routerMatches from './routes/matchesRouter';
import routerLeaderBoard from './routes/leaderBorderRouter';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.router();
    this.errorHandler();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    // ...
  }

  private router():void {
    this.app.use(routerLogin);
    this.app.use(routerTeams);
    this.app.use(routerMatches);
    this.app.use(routerLeaderBoard);
  }

  private errorHandler():void {
    this.app.use(errorHandler);
  }

  // ...
  public start(PORT: string | number):void {
    // ...
    this.app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
