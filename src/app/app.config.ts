import {provideRouter, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {ROUTES} from "./app.routes";

export const APP_CONFIG = {
  providers: [provideRouter(ROUTES, withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: 'always'
  }))]
}
