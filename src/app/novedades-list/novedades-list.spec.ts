import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesList } from './novedades-list';

describe('NovedadesList', () => {
  let component: NovedadesList;
  let fixture: ComponentFixture<NovedadesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovedadesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
