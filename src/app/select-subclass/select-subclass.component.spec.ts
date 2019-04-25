import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubclassComponent } from './select-subclass.component';

describe('SelectSubclassComponent', () => {
  let component: SelectSubclassComponent;
  let fixture: ComponentFixture<SelectSubclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSubclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
