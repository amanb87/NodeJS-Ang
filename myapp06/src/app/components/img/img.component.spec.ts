import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComponent } from './img.component';

describe('ImgComponent', () => {
  let component: ImgComponent;
  let fixture: ComponentFixture<ImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have image', () => {
    //const fixture = TestBed.createComponent(BtnComponent);
    fixture.nativeElement.querySelector('button');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img')
        .src).toContain('/assets/images/ice01.jpg');
  });
});
