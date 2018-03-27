import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoatsComponent } from './moats.component';

describe('MoatsComponent', () => {
  let component: MoatsComponent;
  let fixture: ComponentFixture<MoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
