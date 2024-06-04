import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitteCardComponent } from './twitte-card.component';

describe('TwitteCardComponent', () => {
  let component: TwitteCardComponent;
  let fixture: ComponentFixture<TwitteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
