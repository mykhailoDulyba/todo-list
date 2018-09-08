import * as angular from 'angular';

import { DataService } from './data.service';
export const dataModule = angular
    .module('app.data', [])
    .service('DataService', DataService)
    .name;
