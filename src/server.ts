import { Server } from '@overnightjs/core';
import { ForecastController } from '../src/controllers/forecast';
import bodyParser from 'body-parser';
import './util/module-alias';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private PORT = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupController(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
