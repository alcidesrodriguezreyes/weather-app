import { City } from './city';
import { List } from './list';

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
