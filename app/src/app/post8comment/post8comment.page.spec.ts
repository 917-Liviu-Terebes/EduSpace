import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Post8commentPage } from './post8comment.page';

describe('Post8commentPage', () => {
  let component: Post8commentPage;
  let fixture: ComponentFixture<Post8commentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post8commentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Post8commentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
