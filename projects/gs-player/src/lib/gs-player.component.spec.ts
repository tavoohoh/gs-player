import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsPlayerComponent } from './gs-player.component';

describe('GsPlayerComponent', () => {
  let component: GsPlayerComponent;
  let fixture: ComponentFixture<GsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
