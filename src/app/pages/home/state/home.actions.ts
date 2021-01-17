import { createAction, props } from '@ngrx/store';

export const loadCurrentWeather = createAction(
    '[Home] Current Weather',
    props<{ query: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Weather API] Load Current Weather Success',
    props<{ entity: any }>(),
);

export const loadCurrentWeatherFail = createAction(
    '[Weather API] Load Current Weather Failed'
);