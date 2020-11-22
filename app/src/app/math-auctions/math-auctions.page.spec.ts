import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathAuctionsPage } from './math-auctions.page';

describe('MathAuctionsPage', () => {
  let component: MathAuctionsPage;
  let fixture: ComponentFixture<MathAuctionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathAuctionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathAuctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
