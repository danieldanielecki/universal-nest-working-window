import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
// TODO:/FIXME: Comment out this code to notice that the applyDomino infleunces the build, i.e. it'll break without that line.
applyDomino(global, join(BROWSER_DIR, 'index.html')); // Mock document, window etc.

@Module({
  imports: [
    // TODO:/FIXME: the setup is slightly different than in the newest "@nestjs/ng-universal", i.e. there's no "bootstrap" and "bundle" is there.
    AngularUniversalModule.forRoot({
      bundle: require('./../server/main'),
      templatePath: join(BROWSER_DIR, 'index.html'),
      viewsPath: BROWSER_DIR,
    }),
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
