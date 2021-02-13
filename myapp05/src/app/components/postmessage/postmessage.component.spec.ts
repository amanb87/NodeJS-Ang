import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmessageComponent } from './postmessage.component';

describe('PostmessageComponent', () => {
  let component: PostmessageComponent;
  let fixture: ComponentFixture<PostmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
