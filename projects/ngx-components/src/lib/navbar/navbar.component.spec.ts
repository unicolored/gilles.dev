import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NAVBAR_DATA_MAIN, NAVBAR_DATA_MOBILE, NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        {
          provide: NAVBAR_DATA_MAIN,
          useValue: {},
        },
        {
          provide: NAVBAR_DATA_MOBILE,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
