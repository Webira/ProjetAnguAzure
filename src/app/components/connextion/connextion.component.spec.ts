import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnextionComponent } from './connextion.component';

describe('ConnextionComponent', () => {
  let component: ConnextionComponent;
  let fixture: ComponentFixture<ConnextionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnextionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnextionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
