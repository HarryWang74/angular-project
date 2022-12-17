import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new AppComponent();
    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);
    comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);
    comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });
});
