import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BtnComponent } from './btn.component';

describe('BtnComponent UT', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'unit testing angular app.'`, () => {
    // const fixture = TestBed.createComponent(BtnComponent);
    // const app = fixture.componentInstance;
    expect(component.title).toEqual('unit testing angular app.');
  });

  it('should change title on btn click', waitForAsync(() => {
      const fixture = TestBed.createComponent(BtnComponent);
      fixture.nativeElement.querySelector('button').click();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('h3')
         .textContent).toEqual('using jasmine & karma.' );
  })) ;

    

});

