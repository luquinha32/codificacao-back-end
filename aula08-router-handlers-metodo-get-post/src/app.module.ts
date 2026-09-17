import { Module } from '@nestjs/common';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { convidadosController } from './convidados.controller.js';



@Module({
  imports: [],
  controllers: [AppController, convidadosController],
  providers: [AppService],
})
export class AppModule {}
