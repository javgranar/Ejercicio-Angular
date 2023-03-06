import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsoleComponent } from './add-console.component';

describe('AddConsoleComponent', () => {
  let component: AddConsoleComponent;
  let fixture: ComponentFixture<AddConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
