import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;

}
