import { Component } from '@angular/core';
import {Acquisition, Box, ChooseSource, DataOutput, Digitizer, Geometry, MaterialDatabase, Physics, Vec3, Volume} from './SAM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project0411';

  a = new Volume();
  geometry = new Geometry();
  physics = new Physics();
  digitizer = new Digitizer();
  source = new ChooseSource();
  data_output = new DataOutput();
  acquisition = new Acquisition();
  material_database = new MaterialDatabase();

  getKeys(item) {
    return Object.keys(item);
  }

  getType(item) {
    return Object.prototype.toString.call(item);
  }

}
