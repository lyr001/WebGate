import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Box,
  Cone, CPET,
  CTscanner,
  Cylinder, CylindricalPET, ECAT, ECATAccel,
  Ellipsoid,
  EllipticalTube, Exponential, Flat, File, Gaussian,
  Hexagone, Manual, OPET,
  Scanner, SPECThead,
  Sphere,
  Tessellated,
  TetMeshBox,
  TRPD, Volume, VoxelizedPhantom,
  Wedge, InverseSquareLaw, LinearLaw, LinearTranslator, RangeTranslator, Value
} from '../SAM';

@Component({
  selector: 'app-select-subclass',
  templateUrl: './select-subclass.component.html',
  styleUrls: ['./select-subclass.component.css']
})
export class SelectSubclassComponent implements OnInit {

  // @Input() item: any;
  @Input() name: string;
  @Output() outputitem = new EventEmitter<any>();
  item: any;
  subclass: string[];
  subclassName: string;

  constructor() { }

  ngOnInit() {
  }

  judgeClass() {
    switch (this.name) {
      case 'scanner':
        this.subclass = ['Scanner', 'CTscanner', 'CylindricalPET', 'CPET',
          'ECAT', 'ECATAccel', 'OPET', 'SPECThead'];
        break;
      case 'phantom':
        this.subclass = ['Volume', 'VoxelizedPhantom'];
        break;
      case 'shape':
        this.subclass = ['Box', 'Sphere', 'Cylinder', 'Cone', 'Ellipsoid',
          'EllipticalTube', 'Tessellated', 'TetMeshBox', 'TRPD', 'Hexagone', 'Wedge'];
        break;
      case 'deltaT_distribution':
        this.subclass = ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File'];
        break;
      case 'energy_distribution':
        this.subclass = ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File'];
        break;
      case 'Level1':
        this.subclass = ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File', 'undefined'];
        break;
      case 'Level2':
        this.subclass = ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File', 'undefined'];
        break;
      case 'law':
        this.subclass = ['InverseSquareLaw', 'LinearLaw'];
        break;
      case 'insert_translator':
        this.subclass = ['LinearTranslator', 'RangeTranslator'];
        break;
      case 'time_slice':
        this.subclass = ['Value', 'string'];
        break;
      case 'engine_seed':
        this.subclass = ['number', 'string'];
        break;
      default: this.subclass = undefined;
    }
    return this.subclass;
  }

  chooseSubclass(event: any) {
      switch (event) {
        case 'Scanner':
          this.item = new Scanner();
          break;
        case 'CTscanner':
          this.item = new CTscanner();
          break;
        case 'CylindricalPET':
          this.item = new CylindricalPET();
          break;
        case 'CPET':
          this.item = new CPET();
          break;
        case 'ECAT':
          this.item = new ECAT();
          break;
        case 'ECATAccel':
          this.item = new ECATAccel();
          break;
        case 'OPET':
          this.item = new OPET();
          break;
        case 'SPECThead':
          this.item = new SPECThead();
          break;
        //////////////////////////////////////////////////////////////////
        case 'Volume':
          this.item = new Volume();
          break;
        case 'VoxelizedPhantom':
          this.item = new VoxelizedPhantom();
          break;
        //////////////////////////////////////////////////////////////////
        case 'Box':
          this.item = new Box();
          break;
        case 'Sphere':
          this.item = new Sphere();
          break;
        case 'Cylinder':
          this.item = new Cylinder();
          break;
        case 'Cone':
          this.item = new Cone();
          break;
        case 'Ellipsoid':
          this.item = new Ellipsoid();
          break;
        case 'EllipticalTube':
          this.item = new EllipticalTube();
          break;
        case 'Tessellated':
          this.item = new Tessellated();
          break;
        case 'TetMeshBox':
          this.item = new TetMeshBox();
          break;
        case 'TRPD':
          this.item = new TRPD();
          break;
        case 'Hexagone':
          this.item = new Hexagone();
          break;
        case 'Wedge':
          this.item = new Wedge();
          break;
        //////////////////////////////////////////////////////////////////
        case 'Flat':
          this.item = new Flat();
          break;
        case 'Gaussian':
          this.item = new Gaussian();
          break;
        case 'Exponential':
          this.item = new Exponential();
          break;
        case 'Manual':
          this.item = new Manual();
          break;
        case 'File':
          this.item = new File();
          break;
        //////////////////////////////////////////////////////////////////
        case 'InverseSquareLaw':
          this.item = new InverseSquareLaw();
          break;
        case 'LinearLaw':
          this.item = new LinearLaw();
          break;
        //////////////////////////////////////////////////////////////////
        case 'LinearTranslator':
          this.item = new LinearTranslator();
          break;
        case 'RangeTranslator':
          this.item = new RangeTranslator();
          break;
        //////////////////////////////////////////////////////////////////
        case 'Value':
          this.item = [new Value()];
          break;
        case 'string':
          this.item = '';
          break;
        case 'number':
          this.item = -1;
          break;
        //////////////////////////////////////////////////////////////////
        default: this.item = undefined;
      }
      this.outputitem.emit(this.item);
  }

  getType(item) {
    return Object.prototype.toString.call(item);
  }

}
