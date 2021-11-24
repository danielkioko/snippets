import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { SlidesComponent } from './slides/slides.component';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryComponent,
    data: {
      title: 'Kioko.io - Library'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Kioko.io - Library'
    }
  },
  {
    path: 'business',
    component: BusinessComponent,
    data: {
      title: 'Business'
    }
  },
  {
    path: 'slides',
    component: SlidesComponent,
    data: {
      title: 'Projects'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
