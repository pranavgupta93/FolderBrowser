import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderviewComponent } from './folderview.component';

describe('FolderviewComponent', () => {
  let component: FolderviewComponent;
  let fixture: ComponentFixture<FolderviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
