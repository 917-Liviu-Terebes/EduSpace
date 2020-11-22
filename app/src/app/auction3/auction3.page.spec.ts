import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Auction3Page } from './auction3.page';

describe('Auction3Page', () => {
  let component: Auction3Page;
  let fixture: ComponentFixture<Auction3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auction3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Auction3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
