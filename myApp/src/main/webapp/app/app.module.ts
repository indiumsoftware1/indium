import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyApplicationSharedModule } from 'app/shared/shared.module';
import { MyApplicationCoreModule } from 'app/core/core.module';
import { MyApplicationAppRoutingModule } from './app-routing.module';
import { MyApplicationHomeModule } from './home/home.module';
import { MyApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyApplicationSharedModule,
    MyApplicationCoreModule,
    MyApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyApplicationEntityModule,
    MyApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyApplicationAppModule {}
