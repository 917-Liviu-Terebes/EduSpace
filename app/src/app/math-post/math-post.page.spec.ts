import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathPostPage } from './math-post.page';

describe('MathPostPage', () => {
  let component: MathPostPage;
  let fixture: ComponentFixture<MathPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
