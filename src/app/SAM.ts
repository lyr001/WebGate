export class Geometry {
  world: Volume;              // shape 为 box
  scanner: System;
  phantom: Volume | VoxelizedPhantom;

  constructor() {
    this.world = new Volume();
    this.scanner = undefined;
    this.phantom = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'world': return 'Volume'; break;
      case 'scanner': return {type: 'System',
        subclass: ['Scanner', 'CTscanner', 'CylindricalPET', 'CPET', 'ECAT', 'ECATAccel', 'OPET', 'SPECThead']}; break;
      case 'phantom': return {type: 'Volume | VoxelizedPhantom', subclass: ['Volume', 'VoxelizedPhantom']}; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'scanner':
        switch (subclass) {
          case 'Scanner': this.scanner = new Scanner(); break;
          case 'CTscanner': this.scanner = new CTscanner(); break;
          case 'CylindricalPET': this.scanner = new CylindricalPET(); break;
          case 'CPET': this.scanner = new CPET(); break;
          case 'ECAT': this.scanner = new ECAT(); break;
          case 'ECATAccel': this.scanner = new ECATAccel(); break;
          case 'OPET': this.scanner = new OPET(); break;
          case 'SPECThead': this.scanner = new SPECThead(); break;
          default: this.scanner = undefined;
        }
        break;
      case 'phantom':
        switch (subclass) {
          case 'Volume': this.phantom = new Volume(); break;
          case 'VoxelizedPhantom': this.phantom = new VoxelizedPhantom(); break;
          default: this.phantom = undefined;
        }
        break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class System {
  base: Volume;

  constructor() {
    this.base = new Volume();
  }
}

export class Scanner extends System {
  level1: Volume;
  level2: Volume;
  level3: Volume;
  level4: Volume;
  level5: Volume;

  constructor() {
    super();
    this.level1 = new Volume();
    this.level2 = new Volume();
    this.level3 = new Volume();
    this.level4 = new Volume();
    this.level5 = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'level1': return 'Volume'; break;
      case 'level2': return 'Volume'; break;
      case 'level3': return 'Volume'; break;
      case 'level4': return 'Volume'; break;
      case 'level5': return 'Volume'; break;
    }
  }
}

export class CTscanner extends System {
  module: Volume;
  cluster: Volume[];         // max3
  pixel: Volume[];           // max3

  constructor() {
    super();
    this.module = new Volume();
    this.cluster = [new Volume()];
    this.pixel = [new Volume()];
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'cluster': return 'Volume'; break;
      case 'pixel': return 'Volume'; break;
    }
  }
}

export class CylindricalPET extends System {
  rsector: Volume;
  module: Volume;
  submodule: Volume;
  crystal: Volume;
  layer: Volume[];           // max4

  constructor() {
    super();
    this.rsector = new Volume();
    this.module = new Volume();
    this.submodule = new Volume();
    this.crystal = new Volume();
    this.layer = [new Volume()];
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'rsector': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'submodule': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'Volume'; break;
    }
  }
}

export class CPET extends System {
  sector: Volume;
  cassette: Volume;
  module: Volume;
  crystal: Volume;
  layer: Volume[];          // max4

  constructor() {
    super();
    this.sector = new Volume();
    this.cassette = new Volume();
    this.module = new Volume();
    this.crystal = new Volume();
    this.layer = [new Volume()];
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'sector': return 'Volume'; break;
      case 'cassette': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'Volume'; break;
    }
  }
}

export class ECAT extends System {
  block: Volume;
  crystal: Volume;

  constructor() {
    super();
    this.block = new Volume();
    this.crystal = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'block': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
    }
  }
}

export class ECATAccel extends System {
  block: Volume;
  crystal: Volume;

  constructor() {
    super();
    this.block = new Volume();
    this.crystal = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'block': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
    }
  }
}

export class OPET extends System {
  rsector: Volume;
  module: Volume;
  submodule: Volume;
  crystal: Volume;
  layer: Volume[];            // max8

  constructor() {
    super();
    this.rsector = new Volume();
    this.module = new Volume();
    this.submodule = new Volume();
    this.crystal = new Volume();
    this.layer = [new Volume()];
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'rsector': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'submodule': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'Volume'; break;
    }
  }
}

export class SPECThead extends System {
  crystal: Volume;
  pixel: Volume;

  constructor() {
    super();
    this.crystal = new Volume();
    this.pixel = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'pixel': return 'Volume'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Volume {
  name: string;
  shape: Shape;
  material: string;
  attach: string;
  appearance: Appearance;

  constructor() {
    this.name = '';
    this.shape = undefined;
    this.material = '';
    this.attach = '';
    this.appearance = new Appearance();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'shape': return {type: 'Shape',
        subclass: ['Box', 'Sphere', 'Cylinder', 'Cone', 'Ellipsoid', 'EllipticalTube',
          'Tessellated', 'TetMeshBox', 'TRPD', 'Hexagone', 'Wedge']}; break;
      case 'material': return 'string'; break;
      case 'attach': return 'string'; break;
      case 'appearance': return 'Appearance'; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'shape':
        switch (subclass) {
          case 'Box': this.shape = new Box(); break;
          case 'Sphere': this.shape = new Sphere(); break;
          case 'Cylinder': this.shape = new Cylinder(); break;
          case 'Cone': this.shape = new Cone(); break;
          case 'Ellipsoid': this.shape = new Ellipsoid(); break;
          case 'EllipticalTube': this.shape = new EllipticalTube(); break;
          case 'Tessellated': this.shape = new Tessellated(); break;
          case 'TetMeshBox': this.shape = new TetMeshBox(); break;
          case 'TRPD': this.shape = new TRPD(); break;
          case 'Hexagone': this.shape = new Hexagone(); break;
          case 'Wedge': this.shape = new Wedge(); break;
          default: this.shape = undefined;
        }
        break;
    }
  }

}

/////////////////////////////////////////////////////////////////////////////////

export class Shape {
  constructor() {}
}

export class Box extends Shape {
  size: Vec3;

  constructor() {
    super();
    this.size = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'size': return 'Vec3'; break;
    }
  }
}

export class Sphere extends Shape {
  rmin: Value;
  rmax: Value;
  phi_start: Value;
  delta_phi: Value;
  theta_start: Value;
  delta_theta: Value;

  constructor() {
    super();
    this.rmin = new Value();
    this.rmax = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
    this.theta_start = new Value();
    this.delta_theta = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin': return 'Value'; break;
      case 'rmax': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
      case 'theta_start': return 'Value'; break;
      case 'delta_theta': return 'Value'; break;
    }
  }
}

export class Cylinder extends Shape {
  rmin: Value;
  rmax: Value;
  height: Value;
  phi_start: Value;
  delta_phi: Value;

  constructor() {
    super();
    this.rmin = new Value();
    this.rmax = new Value();
    this.height = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin': return 'Value'; break;
      case 'rmax': return 'Value'; break;
      case 'height': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
    }
  }
}

export class Cone extends Shape {
  rmin1: Value;
  rmax1: Value;
  rmin2: Value;
  rmax2: Value;
  height: Value;
  phi_start: Value;
  delta_phi: Value;

  constructor() {
    super();
    this.rmin1 = new Value();
    this.rmax1 = new Value();
    this.rmin2 = new Value();
    this.rmax2 = new Value();
    this.height = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin1': return 'Value'; break;
      case 'rmax1': return 'Value'; break;
      case 'rmin2': return 'Value'; break;
      case 'rmax2': return 'Value'; break;
      case 'height': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
    }
  }
}

export class Ellipsoid extends Shape {
  size: Vec3;
  z_bottom_cut: Value;
  z_top_cut: Value;

  constructor() {
    super();
    this.size = new Vec3();
    this.z_bottom_cut = new Value();
    this.z_top_cut = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'size': return 'Vec3'; break;
      case 'z_bottom_cut': return 'Value'; break;
      case 'z_top_cut': return 'Value'; break;
    }
  }
}

export class EllipticalTube extends Shape {
  long: Value;
  short: Value;
  height: Value;

  constructor() {
    super();
    this.long = new Value();
    this.short = new Value();
    this.height = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'long': return 'Value'; break;
      case 'short': return 'Value'; break;
      case 'height': return 'Value'; break;
    }
  }
}

export class Tessellated extends Shape {
  path_to_vertices_file: string;

  constructor() {
    super();
    this.path_to_vertices_file = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path_to_vertices_file': return 'string'; break;
    }
  }
}

export class TetMeshBox extends Shape {
  path_to_ele_file: string;
  unit_of_length: string;
  path_to_attribute_map: string;

  constructor() {
    super();
    this.path_to_ele_file = '';
    this.unit_of_length = '';
    this.path_to_attribute_map = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path_to_ele_file': return 'string'; break;
      case 'unit_of_length': return 'string'; break;
      case 'path_to_attribute_map': return 'string'; break;
    }
  }
}

export class TRPD extends Shape {
  x1: Value;
  y1: Value;
  x2: Value;
  y2: Value;
  z: Value;
  box_size: Vec3;
  box_pos: Vec3;

  constructor() {
    super();
    this.x1 = new Value();
    this.y1 = new Value();
    this.x2 = new Value();
    this.y2 = new Value();
    this.z = new Value();
    this.box_size = new Vec3();
    this.box_pos = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'x1': return 'Value'; break;
      case 'y1': return 'Value'; break;
      case 'x2': return 'Value'; break;
      case 'y2': return 'Value'; break;
      case 'z': return 'Value'; break;
      case 'box_size': return 'Vec3'; break;
      case 'box_pos': return 'Vec3'; break;
    }
  }
}

export class Hexagone extends Shape {
  radius: Value;
  height: Value;

  constructor() {
    super();
    this.radius = new Value();
    this.height = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'radius': return 'Value'; break;
      case 'height': return 'Value'; break;
    }
  }
}

export class Wedge extends Shape {
  narrower_xlength: Value;
  size: Vec3;

  constructor() {
    super();
    this.narrower_xlength = new Value();
    this.size = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'narrower_xlength': return 'Value'; break;
      case 'size': return 'Vec3'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class PlacementTranslation {
  value: Vec3;
  target: PlacementObjects[];
}

export class PlacementRotation {
  axis: [number, number, number];
  angle: Value;
  target: PlacementObjects[];
}

export type PlacementObjects = Volume | VoxelizedPhantom | PlacementTranslation | PlacementRotation;

/////////////////////////////////////////////////////////////////////////////////

export class MoveTranslation {
  speed: Vec3;
  target: MoveObjects[];
}

export class MoveRotation {
  speed: Value;
  axis: [boolean, boolean, boolean];
  target: MoveObjects[];
}

export class MoveOrbiting {
  speed: Value;
  point1: Vec3;
  point2: Vec3;
  auto_rotation: boolean;
  target: MoveObjects[];
}

export class MoveOscTrans {
  amplitude: Vec3;
  frequency: Value;
  period: Value;
  phase: Value;
  target: MoveObjects[];
}

export class MoveEccentRot {
  shifts: Vec3;
  speed: Value;
  target: MoveObjects[];
}

export type MoveObjects = Volume | VoxelizedPhantom | MoveTranslation
  | MoveRotation | MoveOrbiting | MoveOscTrans | MoveEccentRot;

/////////////////////////////////////////////////////////////////////////////////

export class LinearRepeater {
  repeat_number: number;
  repeat_vector: Vec3;
  auto_center: boolean;
  target: RepeatObjects[];
}

export class RingRepeater {
  repeat_number: number;
  point1: Vec3;
  point2: Vec3;
  first_angle: Value;
  angular_span: Value;
  modulo_number: number;
  z_shift: [Value, Value, Value, Value, Value, Value, Value];
  auto_rotation: boolean;
  target: RepeatObjects[];
}

export class CubicArrayRepeater {
  repeat_number: [number, number, number];
  repeat_vector: Vec3;
  target: RepeatObjects[];
}

export class QuadrantRepeater {
  line_number: number;
  orientation: Value;
  copy_spacing: Value;
  max_range: Value;
  target: RepeatObjects[];
}

export class SphereRepeater {
  radius: Value;
  repeat_number_with_theta: number;
  repeat_number_with_phi: number;
  theta_angle: Value;
  phi_angle: Value;
  target: RepeatObjects[];
}

export class GenericRepeater {
  placements_filename: string;
  relative_translation: boolean;
  target: RepeatObjects[];
}

export type RepeatObjects = Volume | VoxelizedPhantom | LinearRepeater
  | RingRepeater | CubicArrayRepeater | QuadrantRepeater | SphereRepeater | GenericRepeater;

/////////////////////////////////////////////////////////////////////////////////

export class Appearance {
  color: string;
  visible: boolean;
  daughters_invisible: boolean;
  line_style: string;
  line_width: number;
  force_solid: boolean;
  force_wireframe: boolean;

  constructor() {
    this.color = '';
    this.visible = false;
    this.daughters_invisible = false;
    this.line_style = '';
    this.line_width = null;
    this.force_solid = false;
    this.force_wireframe = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'color': return 'string'; break;
      case 'visible': return 'boolean'; break;
      case 'daughters_invisible': return 'boolean'; break;
      case 'line_style': return 'string'; break;
      case 'line_width': return 'number'; break;
      case 'force_solid': return 'boolean'; break;
      case 'force_wireframe': return 'boolean'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class VoxelizedPhantom {
  name: string;
  insert: string;
  image: string;
  material_database: string;
  range_to_material_file: string;
  hu_to_material_file: string;
  attach: string;
  skip_equal_materials: boolean;
  material_table: string;
  density_table: string;
  density_tolerance: Value;
  output_material_database_filename: string;
  output_hu_material_filename: string;
  fictitious_energy: Value;
  gamma_discard_energy: Value;

  constructor() {
    this.name = '';
    this.insert = '';
    this.image = '';
    this.material_database = '';
    this.range_to_material_file = '';
    this.hu_to_material_file = '';
    this.attach = '';
    this.skip_equal_materials = false;
    this.material_table = '';
    this.density_table = '';
    this.density_tolerance = new Value();
    this.output_material_database_filename = '';
    this.output_hu_material_filename = '';
    this.fictitious_energy = new Value();
    this.gamma_discard_energy = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'insert': return 'string'; break;
      case 'image': return 'string'; break;
      case 'material_database': return 'string'; break;
      case 'range_to_material_file': return 'string'; break;
      case 'hu_to_material_file': return 'string'; break;
      case 'attach': return 'string'; break;
      case 'skip_equal_materials': return 'boolean'; break;
      case 'material_table': return 'string'; break;
      case 'density_table': return 'string'; break;
      case 'density_tolerance': return 'Value'; break;
      case 'output_material_database_filename': return 'string'; break;
      case 'output_hu_material_filename': return 'string'; break;
      case 'fictitious_energy': return 'Value'; break;
      case 'gamma_discard_energy': return 'Value'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Vec3 {
  value: [number, number, number];
  unit: string;

  constructor() {
    this.value = [null, null, null];
    this.unit = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'value': return ['number', 'number', 'number']; break;
      case 'unit': return 'string'; break;
    }
  }
}


export class Value {
  num: number;
  unit: string;

  constructor() {
    this.num = null;
    this.unit = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'num': return 'number'; break;
      case 'unit': return 'string'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Physics {
  physics_list: string;
  cut_in_world: CutInRegion;
  cut_in_patient: CutInRegion;
  activate_step_limiter: string;
  process: Process[];
  mag_field: Vec3;

  constructor() {
    this.physics_list = '';
    this.cut_in_world = new CutInRegion();
    this.cut_in_patient = new CutInRegion();
    this.activate_step_limiter = '';
    this.process = [new Process()];
    this.mag_field = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'physics_list': return 'string'; break;
      case 'cut_in_world': return 'CutInRegion'; break;
      case 'cut_in_patient': return 'CutInRegion'; break;
      case 'activate_step_limiter': return 'string'; break;
      case 'process': return ['Process']; break;
      case 'mag_field': return 'Vec3'; break;
    }
  }
}

export class CutInRegion {
  gamma: Value;
  electron: Value;
  positron: Value;
  proton: Value;
  max_step: Value;

  constructor() {
    this.gamma = new Value();
    this.electron = new Value();
    this.positron = new Value();
    this.proton = new Value();
    this.max_step = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'gamma': return 'Value'; break;
      case 'electron': return 'Value'; break;
      case 'positron': return 'Value'; break;
      case 'proton': return 'Value'; break;
      case 'max_step': return 'Value'; break;
    }
  }
}

export class Process {
  add: boolean;
  process_name: string;
  particle: string;
  model: Model;

  constructor() {
    this.add = false;
    this.process_name = '';
    this.particle = '';
    this.model = new Model();
  }

  input_type(key: string) {
    switch (key) {
      case 'add': return 'boolean'; break;
      case 'process_name': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'model': return 'Model'; break;
    }
  }
}

export class Model {
  set: boolean;
  model_name: string;
  particle: string;
  energy_range: boolean;
  e_max: SetE;
  e_min: SetE;

  constructor() {
    this.set = false;
    this.model_name = '';
    this.particle = '';
    this.energy_range = false;
    this.e_max = new SetE();
    this.e_min = new SetE();
  }

  input_type(key: string) {
    switch (key) {
      case 'set': return 'boolean'; break;
      case 'model_name': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'energy_range': return 'boolean'; break;
      case 'e_max': return 'SetE'; break;
      case 'e_min': return 'SetE'; break;
    }
  }
}

export class SetE {
  value: Value;
  particle: string;
  option: string;

  constructor() {
    this.value = new Value();
    this.particle = '';
    this.option = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'value': return 'Value'; break;
      case 'particle': return 'string'; break;
      case 'option': return 'string'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Dataset {
  set: boolean;
  model_name: string;
  particle: string;
  target: SetDatasetObjects[];
}

export type SetDatasetObjects = Process | Dataset;

/////////////////////////////////////////////////////////////////////////////////

export class Distribution {
  constructor() {}
}

export class Flat extends Distribution {
  min: Value;
  max: Value;
  amplitude: Value;

  constructor() {
    super();
    this.min = new Value();
    this.max = new Value();
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'min': return 'Value'; break;
      case 'max': return 'Value'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Gaussian extends Distribution {
  mean: Value;
  sigma: Value;
  amplitude: Value;

  constructor() {
    super();
    this.mean = new Value();
    this.sigma = new Value();
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'mean': return 'Value'; break;
      case 'sigma': return 'Value'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Exponential extends Distribution {
  lambda: number;
  amplitude: Value;

  constructor() {
    super();
    this.lambda = null;
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'lambda': return 'number'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Manual extends Distribution {
  unit_x: string;
  unit_y: string;
  insert_point: [number, number];
  add_point: number;
  auto_x_start: number;

  constructor() {
    super();
    this.unit_x = '';
    this.unit_y = '';
    this.insert_point = [null, null];
    this.add_point = null;
    this.auto_x_start = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'unit_x': return 'string'; break;
      case 'unit_y': return 'string'; break;
      case 'insert_point': return ['number', 'number']; break;
      case 'add_point': return 'number'; break;
      case 'auto_x_start': return 'number'; break;
    }
  }
}

export class File extends Distribution {
  unit_x: string;
  unit_y: string;
  auto_x: boolean;
  auto_x_start: Value;
  file_name: string;
  column_x: number;
  column_y: number;

  constructor() {
    super();
    this.unit_x = '';
    this.unit_y = '';
    this.auto_x = false;
    this.auto_x_start = new Value();
    this.file_name = '';
    this.column_x = null;
    this.column_y = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'unit_x': return 'string'; break;
      case 'unit_y': return 'string'; break;
      case 'auto_x': return 'boolean'; break;
      case 'auto_x_start': return 'Value'; break;
      case 'file_name': return 'string'; break;
      case 'column_x': return 'number'; break;
      case 'column_y': return 'number'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Digitizer {
  adder: Adder;
  readout: Readout;
  blurring: Blurring;
  calibration: Calibration;
  crosstalk: Crosstalk;
  thresholder: Thresholder;
  upholder: Upholder;
  window: Window[];
  sigmoidal_thresholder: SigmoidalThresholder;
  time_resolution: TimeResolution;
  noise: Noise;
  local_efficiency: LocalEfficiency;
  buffer: Buffer;
  pileup: Pileup;
  deadtime: DeadTime;
  coincidences: Coincidences;
  coincidence_sorter: CoincidenceSorter;

  constructor() {
    this.adder = new Adder();
    this.readout = new Readout();
    this.blurring = new Blurring();
    this.calibration = new Calibration();
    this.crosstalk = new Crosstalk();
    this.thresholder = new Thresholder();
    this.upholder = new Upholder();
    this.window = [new Window()];
    this.sigmoidal_thresholder = new SigmoidalThresholder();
    this.time_resolution = new TimeResolution();
    this.noise = new Noise();
    this.local_efficiency = new LocalEfficiency();
    this.buffer = new Buffer();
    this.pileup = new Pileup();
    this.deadtime = new DeadTime();
    this.coincidences = new Coincidences();
    this.coincidence_sorter = new CoincidenceSorter();
  }

  input_type(key: string) {
    switch (key) {
      case 'adder': return 'Adder'; break;
      case 'readout': return 'Readout'; break;
      case 'blurring': return 'Blurring'; break;
      case 'calibration': return 'Calibration'; break;
      case 'crosstalk': return 'Crosstalk'; break;
      case 'thresholder': return 'Thresholder'; break;
      case 'upholder': return 'Upholder'; break;
      case 'window': return ['Window']; break;
      case 'sigmoidal_thresholder': return 'SigmoidalThresholder'; break;
      case 'time_resolution': return 'TimeResolution'; break;
      case 'noise': return 'Noise'; break;
      case 'local_efficiency': return 'LocalEfficiency'; break;
      case 'buffer': return 'Buffer'; break;
      case 'pileup': return 'Pileup'; break;
      case 'deadtime': return 'DeadTime'; break;
      case 'coincidences': return 'Coincidences'; break;
      case 'coincidence_sorter': return 'CoincidenceSorter'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Adder {
  readonly insert: boolean;
  adder_compton: boolean;

  constructor() {
    this.insert = true;
    this.adder_compton = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'adder_compton': return 'boolean'; break;
    }
  }
}

export class Readout {
  readonly  insert: boolean;
  policy: string;
  depth: number;

  constructor() {
    this.insert = true;
    this.policy = '';
    this.depth = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'policy': return 'string'; break;
      case 'depth': return 'number'; break;
    }
  }
}

export class Blurring {
  insert: boolean;
  law: BlurringLaw;
  crystal_blurring: CrystalBlurring;
  local_blurring: LocalBlurring[];
  transfer_efficiency: TransferEfficiency[];
  light_yield: LightYield[];
  intrinsic_resolution_blurring: IntrinsicResolutionBlurring[];
  quantum_efficiency: QuantumEfficiency[];
  spblurring: Spblurring;

  constructor() {
    this.insert = false;
    this.law = undefined;
    this.crystal_blurring = new CrystalBlurring();
    this.local_blurring = [new LocalBlurring()];
    this.transfer_efficiency = [new TransferEfficiency()];
    this.light_yield = [new LightYield()];
    this.intrinsic_resolution_blurring = [new IntrinsicResolutionBlurring()];
    this.quantum_efficiency = [new QuantumEfficiency()];
    this.spblurring = new Spblurring();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'law': return {type: 'BlurringLaw', subclass: ['InverseSquareLaw', 'LinearLaw']}; break;
      case 'crystal_blurring': return 'CrystalBlurring'; break;
      case 'local_blurring': return ['LocalBlurring']; break;
      case 'transfer_efficiency': return ['TransferEfficiency']; break;
      case 'light_yield': return ['LightYield']; break;
      case 'intrinsic_resolution_blurring': return ['IntrinsicResolutionBlurring']; break;
      case 'quantum_efficiency': return ['QuantumEfficiency']; break;
      case 'spblurring': return 'Spblurring'; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'law':
        switch (subclass) {
          case 'InverseSquareLaw': this.law = new InverseSquareLaw(); break;
          case 'LinearLaw': this.law = new LinearLaw(); break;
          default: this.law = undefined;
        }
        break;
    }
  }
}

export class BlurringLaw {
  constructor() {}
}

export class InverseSquareLaw extends BlurringLaw {
  resolution: number;
  energy_of_reference: Value;

  constructor() {
    super();
    this.resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}

export class LinearLaw extends BlurringLaw {
  resolution: number;
  energy_of_reference: Value;
  slope: Value;

  constructor() {
    super();
    this.resolution = null;
    this.energy_of_reference = new Value();
    this.slope = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
      case 'slope': return 'Value'; break;
    }
  }
}

export class CrystalBlurring {
  insert: boolean;
  crystal_resolution_min: number;
  crystal_resolution_max: number;
  crystal_qe: number;
  crystal_energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.crystal_resolution_min = null;
    this.crystal_resolution_max = null;
    this.crystal_qe = null;
    this.crystal_energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'crystal_resolution_min': return 'number'; break;
      case 'crystal_resolution_max': return 'number'; break;
      case 'crystal_qe': return 'number'; break;
      case 'crystal_energy_of_reference': return 'Value'; break;
    }
  }
}

export class LocalBlurring {
  insert: boolean;
  volume: string;
  resolution: number;
  energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}

export class TransferEfficiency {
  insert: boolean;
  volume: string;
  tecoef: number;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.tecoef = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'tecoef': return 'number'; break;
    }
  }
}

export class LightYield {
  insert: boolean;
  volume: string;
  light_output: number;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.light_output = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'light_output': return 'number'; break;
    }
  }
}

export class IntrinsicResolutionBlurring {
  insert: boolean;
  volume: string;
  intrinsic_resolution: number;
  energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.intrinsic_resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'intrinsic_resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}

export class QuantumEfficiency {
  insert: boolean;
  volume: string;
  unique_qe: number | string;       // number | string[]

  constructor() {
    this.insert = false;
    this.volume = '';
    this.unique_qe = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'unique_qe': return {type: 'number | string[]', subclass: ['number', 'string']}; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'unique_qe':
        switch (subclass) {
          case 'number': this.unique_qe = null; break;
          case 'string': this.unique_qe = ''; break;
          default: this.unique_qe = undefined;
        }
        break;
    }
  }
}

export class Spblurring {
  insert: boolean;
  spresolution: Value;
  verbose: number;

  constructor() {
    this.insert = false;
    this.spresolution = new Value();
    this.verbose = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'spresolution': return 'Value'; break;
      case 'verbose': return 'number'; break;
    }
  }
}

export class Calibration {
  insert: boolean;
  value: number;

  constructor() {
    this.insert = false;
    this.value = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'number'; break;
    }
  }
}

export class Crosstalk {
  insert: boolean;
  crosstalk_volume: string;
  edges_fraction: number;
  corners_fraction: number;

  constructor() {
    this.insert = false;
    this.crosstalk_volume = '';
    this.edges_fraction = null;
    this.corners_fraction = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'crosstalk_volume': return 'string'; break;
      case 'edges_fraction': return 'number'; break;
      case 'corners_fraction': return 'number'; break;
    }
  }
}

export class Thresholder {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}

export class Upholder {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}

export class Window {
  insert: boolean;
  input_name: string;
  thresholder: Thresholder;
  uphold: Upholder;

  constructor() {
    this.insert = false;
    this.input_name = '';
    this.thresholder = new Thresholder();
    this.uphold = new Upholder();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'input_name': return 'string'; break;
      case 'thresholder': return 'Thresholder'; break;
      case 'uphold': return 'Upholder'; break;
    }
  }
}

export class SigmoidalThresholder {
  insert: boolean;
  threshold: Value;
  threshold_alpha: number;
  threshold_percent: number;

  constructor() {
    this.insert = false;
    this.threshold = new Value();
    this.threshold_alpha = null;
    this.threshold_percent = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'threshold': return 'Value'; break;
      case 'threshold_alpha': return 'number'; break;
      case 'threshold_percent': return 'number'; break;
    }
  }
}

export class TimeResolution {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}

export class Noise {
  insert: boolean;
  deltaT_distribution: Distribution;
  energy_distribution: Distribution;

  constructor() {
    this.insert = false;
    this.deltaT_distribution = undefined;
    this.energy_distribution = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'deltaT_distribution': return {type: 'Distribution',
        subclass: ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File']}; break;
      case 'energy_distribution': return {type: 'Distribution',
        subclass: ['Flat', 'Gaussian', 'Exponential', 'Manual', 'File']}; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'deltaT_distribution':
        switch (subclass) {
          case 'Flat': this.deltaT_distribution = new Flat(); break;
          case 'Gaussian': this.deltaT_distribution = new Gaussian(); break;
          case 'Exponential': this.deltaT_distribution = new Exponential(); break;
          case 'Manual': this.deltaT_distribution = new Manual(); break;
          case 'File': this.deltaT_distribution = new File(); break;
          default: this.deltaT_distribution = undefined;
        }
        break;
      case 'energy_distribution':
        switch (subclass) {
          case 'Flat': this.energy_distribution = new Flat(); break;
          case 'Gaussian': this.energy_distribution = new Gaussian(); break;
          case 'Exponential': this.energy_distribution = new Exponential(); break;
          case 'Manual': this.energy_distribution = new Manual(); break;
          case 'File': this.energy_distribution = new File(); break;
          default: this.energy_distribution = undefined;
        }
        break;
    }
  }
}

export class LocalEfficiency {
  insert: boolean;
  Level1: Distribution | null | undefined;
  Level2: Distribution | null | undefined;

  constructor() {
    this.insert = false;
    this.Level1 = undefined;
    this.Level2 = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'Level1': return {type: 'Distribution',
        subclass: [undefined, 'Flat', 'Gaussian', 'Exponential', 'Manual', 'File']}; break;
      case 'Level2': return {type: 'Distribution',
        subclass: [undefined, 'Flat', 'Gaussian', 'Exponential', 'Manual', 'File']}; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'Level1':
        switch (subclass) {
          case 'Flat': this.Level1 = new Flat(); break;
          case 'Gaussian': this.Level1 = new Gaussian(); break;
          case 'Exponential': this.Level1 = new Exponential(); break;
          case 'Manual': this.Level1 = new Manual(); break;
          case 'File': this.Level1 = new File(); break;
          default: this.Level1 = undefined;
        }
        break;
      case 'Level2':
        switch (subclass) {
          case 'Flat': this.Level2 = new Flat(); break;
          case 'Gaussian': this.Level2 = new Gaussian(); break;
          case 'Exponential': this.Level2 = new Exponential(); break;
          case 'Manual': this.Level2 = new Manual(); break;
          case 'File': this.Level2 = new File(); break;
          default: this.Level2 = undefined;
        }
        break;
    }
  }
}

export class Buffer {
  insert: boolean;
  buffer_size: Value;
  read_frequency: Value;
  mode: number;

  constructor() {
    this.insert = false;
    this.buffer_size = new Value();
    this.read_frequency = new Value();
    this.mode = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'buffer_size': return 'Value'; break;
      case 'read_frequency': return 'Value'; break;
      case 'mode': return 'number'; break;
    }
  }
}

export class Pileup {
  insert: boolean;
  depth: number;
  value: Value;

  constructor() {
    this.insert = false;
    this.depth = null;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'depth': return 'number'; break;
      case 'value': return 'Value'; break;
    }
  }
}

export class DeadTime {
  insert: boolean;
  value: Value;
  mode: string;
  dt_volume: string;
  buffer_size: Value;
  buffer_mode: number;

  constructor() {
    this.insert = false;
    this.value = new Value();
    this.mode = '';
    this.dt_volume = '';
    this.buffer_size = new Value();
    this.buffer_mode = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
      case 'mode': return 'string'; break;
      case 'dt_volume': return 'string'; break;
      case 'buffer_size': return 'Value'; break;
      case 'buffer_mode': return 'number'; break;
    }
  }
}

export class Coincidences {
  window: Value;
  min_sector_difference: number;
  offset: Value;
  depth: number;
  all_pulse_open_coinc_gate: boolean;
  multiple_policy: string;

  constructor() {
    this.window = new Value();
    this.min_sector_difference = null;
    this.offset = new Value();
    this.depth = null;
    this.all_pulse_open_coinc_gate = false;
    this.multiple_policy = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'window': return 'Value'; break;
      case 'min_sector_difference': return 'number'; break;
      case 'offset': return 'Value'; break;
      case 'depth': return 'number'; break;
      case 'all_pulse_open_coinc_gate': return 'boolean'; break;
      case 'multiple_policy': return 'string'; break;
    }
  }
}

export class CoincidenceSorter {
  insert: boolean;
  name: string;
  input_name: string;
  window: Value;

  constructor() {
    this.insert = false;
    this.name = '';
    this.input_name = '';
    this.window = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'name': return 'string'; break;
      case 'input_name': return 'string'; break;
      case 'window': return 'Value'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class ChooseSource {
  choose_source: Source | VoxelizedSource;

  constructor() {
    this.choose_source = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'choose_source': return {type: 'Source | VoxelizedSource', subclass: ['Source', 'VoxelizedSource']}; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'choose_source':
        switch (subclass) {
          case 'Source': this.choose_source = new Source(); break;
          case 'VoxelizedSource': this.choose_source = new VoxelizedSource(); break;
          default: this.choose_source = undefined;
        }
        break;
    }
  }
}

export class Source {
  name: string;
  activity: Value;
  type: string;
  centre: Vec3;
  particle: string;
  energytype: string;
  monoenergy: Value;
  gps_type: string;
  shape: string;
  radius: Value;
  halfz: Value;
  angtype: string;
  mintheta: Value;
  maxtheta: Value;
  minphi: Value;
  maxphi: Value;

  constructor() {
    this.name = '';
    this.activity = new Value();
    this.type = '';
    this.centre = new Vec3();
    this.particle = '';
    this.energytype = '';
    this.monoenergy = new Value();
    this.gps_type = '';
    this.shape = '';
    this.radius = new Value();
    this.halfz = new Value();
    this.angtype = '';
    this.mintheta = new Value();
    this.maxtheta = new Value();
    this.minphi = new Value();
    this.maxphi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'activity': return 'Value'; break;
      case 'type': return 'string'; break;
      case 'centre': return 'Vec3'; break;
      case 'particle': return 'string'; break;
      case 'energytype': return 'string'; break;
      case 'monoenergy': return 'Value'; break;
      case 'gps_type': return 'string'; break;
      case 'shape': return 'string'; break;
      case 'radius': return 'Value'; break;
      case 'halfz': return 'Value'; break;
      case 'angtype': return 'string'; break;
      case 'mintheta': return 'Value'; break;
      case 'maxtheta': return 'Value'; break;
      case 'minphi': return 'Value'; break;
      case 'maxphi': return 'Value'; break;
    }
  }
}

export class VoxelizedSource {
  name: string;
  insert_reader: string;
  insert_translator: Translator;
  read_file: string;
  verbose: boolean;
  position: Vec3;
  dump: boolean;
  type: string;
  particle: string;
  energy_type: string;
  monoenergy: Value;
  angtype: string;
  mintheta: Value;
  maxtheta: Value;
  minphi: Value;
  maxphi: Value;
  confine: string;
  forced_unstable_flag: boolean;
  forced_half_life: Value;

  constructor() {
    this.name = '';
    this.insert_reader = '';
    this.insert_translator = undefined;
    this.read_file = '';
    this.verbose = false;
    this.position = new Vec3();
    this.dump = false;
    this.type = '';
    this.particle = '';
    this.energy_type = '';
    this.monoenergy = new Value();
    this.angtype = '';
    this.mintheta = new Value();
    this.maxtheta = new Value();
    this.minphi = new Value();
    this.maxphi = new Value();
    this.confine = '';
    this.forced_unstable_flag = false;
    this.forced_half_life = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'insert_reader': return 'string'; break;
      case 'insert_translator': return {type: 'Translator', subclass: ['LinearTranslator', 'RangeTranslator'] }; break;
      case 'read_file': return 'string'; break;
      case 'verbose': return 'boolean'; break;
      case 'position': return 'Vec3'; break;
      case 'dump': return 'boolean'; break;
      case 'type': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'energy_type': return 'string'; break;
      case 'monoenergy': return 'Value'; break;
      case 'angtype': return 'string'; break;
      case 'mintheta': return 'Value'; break;
      case 'maxtheta': return 'Value'; break;
      case 'minphi': return 'Value'; break;
      case 'maxphi': return 'Value'; break;
      case 'confine': return 'string'; break;
      case 'forced_unstable_flag': return 'boolean'; break;
      case 'forced_half_life': return 'Value'; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'insert_translator':
        switch (subclass) {
          case 'LinearTranslator': this.insert_translator = new LinearTranslator(); break;
          case 'RangeTranslator': this.insert_translator = new RangeTranslator(); break;
          default: this.insert_translator = undefined;
        }
        break;
    }
  }
}

export class Translator {
  insert: boolean;

  constructor() {
    this.insert = false;
  }
}

export class LinearTranslator extends Translator {
  scale: boolean;

  constructor() {
    super();
    this.scale = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'scale': return 'boolean'; break;
    }
  }
}

export class RangeTranslator extends Translator {
  read_table: string;
  describe: boolean;

  constructor() {
    super();
    this.read_table = '';
    this.describe = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'read_table': return 'string'; break;
      case 'describe': return 'boolean'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class DataOutput {
  ascii: Ascii;
  root: Root;
  interfile: Interfile;
  sinogram: Sinogram;
  sinoaccel: Sinogram;
  ecat7: Ecat7;
  lmf: Lmf;
  imageCT: ImageCT;

  constructor() {
    this.ascii = new Ascii();
    this.root = new Root();
    this.interfile = new Interfile();
    this.sinogram = new Sinogram();
    this.sinoaccel = new Sinogram();
    this.ecat7 = new Ecat7();
    this.lmf = new Lmf();
    this.imageCT = new ImageCT();
  }

  input_type(key: string) {
    switch (key) {
      case 'ascii': return 'Ascii'; break;
      case 'root': return 'Root'; break;
      case 'interfile': return 'Interfile'; break;
      case 'sinogram': return 'Sinogram'; break;
      case 'sinoaccel': return 'Sinogram'; break;
      case 'ecat7': return 'Ecat7'; break;
      case 'lmf': return 'Lmf'; break;
      case 'imageCT': return 'ImageCT'; break;
    }
  }
}

export class Ascii {
  enable: boolean;
  file_name: string;
  out_file_hits_flag: boolean;
  out_file_singles_flag: boolean;
  out_file_coincidences_flag: boolean;
  coincidence_mask: [boolean, boolean, boolean, boolean, boolean, boolean];
  single_mask: [boolean, boolean, boolean, boolean];
  out_file_size_limit: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.out_file_hits_flag = false;
    this.out_file_singles_flag = false;
    this.out_file_coincidences_flag = false;
    this.coincidence_mask = [false, false, false, false, false, false];
    this.single_mask = [false, false, false, false];
    this.out_file_size_limit = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'out_file_hits_flag': return 'boolean'; break;
      case 'out_file_singles_flag': return 'boolean'; break;
      case 'out_file_coincidences_flag': return 'boolean'; break;
      case 'coincidence_mask': return ['boolean', 'boolean', 'boolean', 'boolean', 'boolean', 'boolean']; break;
      case 'single_mask': return ['boolean', 'boolean', 'boolean', 'boolean']; break;
      case 'out_file_size_limit': return 'number'; break;
    }
  }
}

export class Root {
  enable: boolean;
  file_name: string;
  root_hit_flag: boolean;
  root_singles_flag: boolean;
  root_coincidences_flag: boolean;
  root_ntuple_flag: boolean;
  out_file_singles_adder_flag: boolean;
  out_file_singles_readout_flag: boolean;
  out_file_singles_spblurring_flag: boolean;
  out_file_singles_blurring_flag: boolean;
  out_file_singles_thresholder_flag: boolean;
  out_file_singles_upholder_flag: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.root_hit_flag = false;
    this.root_singles_flag = false;
    this.root_coincidences_flag = false;
    this.root_ntuple_flag = false;
    this.out_file_singles_adder_flag = false;
    this.out_file_singles_readout_flag = false;
    this.out_file_singles_spblurring_flag = false;
    this.out_file_singles_blurring_flag = false;
    this.out_file_singles_thresholder_flag = false;
    this.out_file_singles_upholder_flag = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'root_hit_flag': return 'boolean'; break;
      case 'root_singles_flag': return 'boolean'; break;
      case 'root_coincidences_flag': return 'boolean'; break;
      case 'root_ntuple_flag': return 'boolean'; break;
      case 'out_file_singles_adder_flag': return 'boolean'; break;
      case 'out_file_singles_readout_flag': return 'boolean'; break;
      case 'out_file_singles_spblurring_flag': return 'boolean'; break;
      case 'out_file_singles_blurring_flag': return 'boolean'; break;
      case 'out_file_singles_thresholder_flag': return 'boolean'; break;
      case 'out_file_singles_upholder_flag': return 'boolean'; break;
    }
  }
}

export class Interfile {
  enable: boolean;
  file_name: string;
  projection_plane: string;
  pixel_size: [Value, Value];
  pixel_number: [number, number];

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.projection_plane = '';
    this.pixel_size = [new Value(), new Value()];
    this.pixel_number = [null, null];
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'projection_plane': return 'string'; break;
      case 'pixel_size': return ['Value', 'Value']; break;
      case 'pixel_number': return ['number', 'number']; break;
    }
  }
}

export class Sinogram {
  enable: boolean;
  file_name: string;
  radial_bins: number;
  trues_only: boolean;
  raw_output_enable: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.radial_bins = null;
    this.trues_only = false;
    this.raw_output_enable = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'radial_bins': return 'number'; break;
      case 'trues_only': return 'boolean'; break;
      case 'raw_output_enable': return 'boolean'; break;
    }
  }
}

export class Ecat7 {
  enable: boolean;
  file_name: string;
  maxringdiff: number;
  span: number;
  mashing: number;
  system: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.maxringdiff = null;
    this.span = null;
    this.mashing = null;
    this.system = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'maxringdiff': return 'number'; break;
      case 'span': return 'number'; break;
      case 'mashing': return 'number'; break;
      case 'system': return 'number'; break;
    }
  }
}

export class Lmf {
  enable: boolean;
  file_name: string;
  detector_id_bool: boolean;
  energy_bool: boolean;
  gantry_axial_pos_bool: boolean;
  gantry_angular_pos_bool: boolean;
  source_pos_bool: boolean;
  neighbour_bool: boolean;
  neighbourhood_order: boolean;
  coincidence_bool: boolean;
  gate_digi_bool: boolean;
  compton_bool: boolean;
  compton_detector_bool: boolean;
  source_id_bool: boolean;
  source_xyzpos_bool: boolean;
  global_xyzpos_bool: boolean;
  event_id_bool: boolean;
  run_id_bool: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.detector_id_bool = false;
    this.energy_bool = false;
    this.gantry_axial_pos_bool = false;
    this.gantry_angular_pos_bool = false;
    this.source_pos_bool = false;
    this.neighbour_bool = false;
    this.neighbourhood_order = false;
    this.coincidence_bool = false;
    this.gate_digi_bool = false;
    this.compton_bool = false;
    this.compton_detector_bool = false;
    this.source_id_bool = false;
    this.source_xyzpos_bool = false;
    this.global_xyzpos_bool = false;
    this.event_id_bool = false;
    this.run_id_bool = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'detector_id_bool': return 'boolean'; break;
      case 'energy_bool': return 'boolean'; break;
      case 'gantry_axial_pos_bool': return 'boolean'; break;
      case 'gantry_angular_pos_bool': return 'boolean'; break;
      case 'source_pos_bool': return 'boolean'; break;
      case 'neighbour_bool': return 'boolean'; break;
      case 'neighbourhood_order': return 'boolean'; break;
      case 'coincidence_bool': return 'boolean'; break;
      case 'gate_digi_bool': return 'boolean'; break;
      case 'compton_bool': return 'boolean'; break;
      case 'compton_detector_bool': return 'boolean'; break;
      case 'source_id_bool': return 'boolean'; break;
      case 'source_xyzpos_bool': return 'boolean'; break;
      case 'global_xyzpos_bool': return 'boolean'; break;
      case 'event_id_bool': return 'boolean'; break;
      case 'run_id_bool': return 'boolean'; break;
    }
  }
}

export class ImageCT {
  enable: boolean;
  file_name: string;
  num_pixel: [number, number];
  vrt_factor: number;
  start_seed: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.num_pixel = [null, null];
    this.vrt_factor = null;
    this.start_seed = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'num_pixel': return ['number', 'number']; break;
      case 'vrt_factor': return 'number'; break;
      case 'start_seed': return 'number'; break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////

export class Acquisition {
  total_number_of_primaries: number;
  number_of_primaries_perrun: number;
  time_slice: Value | string;     // Value[] | string
  time_start: Value;
  time_stop: Value;
  engine_seed: number | string;
  engine_name: string;
  verbose: number;

  constructor() {
    this.total_number_of_primaries = null;
    this.number_of_primaries_perrun = null;
    this.time_slice = undefined;
    this.time_start = new Value();
    this.time_stop = new Value();
    this.engine_seed = undefined;
    this.engine_name = '';
    this.verbose = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'total_number_of_primaries': return 'number'; break;
      case 'number_of_primaries_perrun': return 'number'; break;
      case 'time_slice': return {type: 'Value[] | string', subclass: ['Value', 'string']}; break;
      case 'time_start': return 'Value'; break;
      case 'time_stop': return 'Value'; break;
      case 'engine_seed': return {type: 'number | string', subclass: ['number', 'string']}; break;
      case 'engine_name': return 'string'; break;
      case 'verbose': return 'number'; break;
    }
  }

  choose_subclass(key: string, subclass: string) {
    switch (key) {
      case 'time_slice':
        switch (subclass) {
          case 'Value': this.time_slice = new Value(); break;
          case 'string': this.time_slice = ''; break;
          default: this.time_slice = undefined;
        }
        break;
      case 'engine_seed':
        switch (subclass) {
          case 'number': this.engine_seed = null; break;
          case 'string': this.engine_seed = ''; break;
          default: this.engine_seed = undefined;
        }
        break;
    }
  }
}

export class MaterialDatabase {
  path: string;

  constructor() {
    this.path = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path': return 'string'; break;
    }
  }
}
