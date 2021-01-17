import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromHomeActions from './home.actions';
import { Store } from '@ngrx/store';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Injectable()
export class HomeEffects {

    loadCurrentWeather$ = createEffect(() => this.action$
        .pipe(
            ofType(fromHomeActions.loadCurrentWeather),
            mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery(query)),
            catchError((err, caught$) => {
                this.store.dispatch(fromHomeActions.loadCurrentWeatherFail());
                return caught$;
            }),
            map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
        ),
    );

    constructor(private action$: Actions,
                private store: Store,
                private weatherService: WeatherService) {}
}