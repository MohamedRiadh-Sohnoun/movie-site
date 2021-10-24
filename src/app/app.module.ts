import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { HelloPipe } from './hello.pipe';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-Pagination';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './search.pipe';
import { TvComponent } from './tv/tv.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { NewDirective } from './new.directive';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavbarComponent,
     FooterComponent, AboutComponent, ContactsComponent,
      MoviesComponent, TvComponent, NotfoundComponent, HelloPipe,
       GenderPipe, SearchPipe, RegisterComponent, LoginComponent,
        MoviedetailsComponent, TvShowDetailsComponent, PeopleComponent,
         PeopledetailsComponent, ProfileComponent, NewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    NgxPaginationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
