import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittesComponent } from './twittes.component';

describe('TwittesComponent', () => {
  let component: TwittesComponent;
  let fixture: ComponentFixture<TwittesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwittesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwittesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
