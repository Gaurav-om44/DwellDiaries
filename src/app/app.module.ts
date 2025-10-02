import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { MobileProductsComponent } from './components/mobile-products/mobile-products.component';
import { ModernLivingRoomComponent } from './components/modern-living-room/modern-living-room.component';
import { VillaProjectComponent } from './components/villa-project/villa-project.component';
import { MixedUseDevelopmentComponent } from './components/mixed-use-development/mixed-use-development.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { EntrywayDesignComponent } from './components/entryway-design/entryway-design.component';
import { AccentChairsGridComponent } from './components/accent-chairs-grid/accent-chairs-grid.component';
import { AccentChairComponent } from './components/accent-chair/accent-chair.component';
import { ClocksGridComponent } from './components/clocks-grid/clocks-grid.component';
import { ClockComponent } from './components/clock/clock.component';
import { PlantersGridComponent } from './components/planters-grid/planters-grid.component';
import { PlanterComponent } from './components/planter/planter.component';
import { YearlySaleComponent } from './components/yearly-sale/yearly-sale.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ProductService } from './services/product.service';
import { BlogService } from './services/blog.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPopupComponent,
    BillboardComponent,
    CompanyServicesComponent,
    MobileProductsComponent,
    ModernLivingRoomComponent,
    VillaProjectComponent,
    MixedUseDevelopmentComponent,
    PortfolioGridComponent,
    EntrywayDesignComponent,
    AccentChairsGridComponent,
    AccentChairComponent,
    ClocksGridComponent,
    ClockComponent,
    PlantersGridComponent,
    PlanterComponent,
    YearlySaleComponent,
    LatestBlogComponent,
    TestimonialsComponent,
    SubscribeComponent,
    InstagramComponent,
    HomeComponent,
    PortfolioComponent,
    ServicesComponent,
    BlogComponent,
    BlogDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    BlogService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
