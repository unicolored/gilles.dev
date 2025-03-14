import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    // you can also pass the mock implementation
    // to jest.fn as an argument
    const observe = jest.fn();
    const unobserve = jest.fn();
    // @ts-expect-error Definition of IntersectionObserver is not complete
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));

    await TestBed.configureTestingModule({
      imports: [ImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    component.observer = undefined;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.responseOk).toBeFalsy();
  });
});
