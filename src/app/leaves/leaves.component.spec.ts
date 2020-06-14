import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, RouterModule } from '@angular/router';
import { LeavesComponent } from './leaves.component';
import { BalanceComponent } from './balance/balance.component';
import { ApplyComponent } from './apply/apply.component';

describe('LeavesComponent', () => {
  const routes: Routes = [
    {
      path: '', component: LeavesComponent, children: [
        {path: 'apply', component: ApplyComponent},
        {path: 'balance', component: BalanceComponent},
        {path:'', redirectTo: 'balance', pathMatch: 'full'}
      ]
    }
  ];
  let component: LeavesComponent;
  let fixture: ComponentFixture<LeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesComponent ],
      imports: [
        RouterModule.forChild(routes),
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
