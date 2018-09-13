import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { appRoutes } from './app.config';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { dataModule } from './service/data.module';

export const root = angular
    .module('app', [
        uiRouter,   
        ComponentModule,     
        dataModule
        
    ])
    .component('app', AppComponent)    
    .config(appRoutes)
    .name;
