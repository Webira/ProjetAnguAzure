import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentTweetComponent } from './curent-tweet.component';

describe('CurentTweetComponent', () => {
  let component: CurentTweetComponent;
  let fixture: ComponentFixture<CurentTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurentTweetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
