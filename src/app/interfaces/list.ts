import { Clouds } from './clouds';
import { Main } from './main';
import { Rain } from './rain';
import { SysList } from './sys-list';
import { Weather } from './weather';
import { Wind } from './wind';

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: SysList;
  dt_txt: string;
}
