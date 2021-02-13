import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IcecreamcomponentComponent } from './icecreamcomponent.component';

describe('IcecreamComponent UT', () => {
  let component: IcecreamcomponentComponent;
  let fixture: ComponentFixture<IcecreamcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'I love amul chocobar.'`, waitForAsync(() => {
    fixture = TestBed.createComponent(IcecreamcomponentComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I love amul chocobar.');
  }));
})
