import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestingComponent } from './child-testing.component';
import { first } from 'rxjs/operators';

describe('ChildTestingComponent', () => {
  it('raises the selected event when clicked', () => {
    const comp = new ChildTestingComponent();
    const defaultItem = {id: 42, name: 'Test'};
    comp.item = defaultItem;
  
    comp.onSelecteItem.pipe(first()).subscribe((item) => expect(item).toBe(defaultItem));
    comp.clickItem();
  });
});
