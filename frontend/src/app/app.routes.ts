import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'assessments' },
  {  path: 'assessments',
    loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsModule)
   }
];
