import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Country } from 'src/app/models/Country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

  control: FormControl; //our form control ...
  countries: Country[]; //an array of country objects ....  
  filteredCountries: Observable<Country[]>;//an obserbable array of filtered countries ... 
  subscription: Subscription; //Our subscription....tp the service 

  constructor(private cService: CountriesService) {
    // it is good ptractice to initialise your stuff in the constructor ...
    this.control = new FormControl();  
    this.countries = [];
    this.filteredCountries = new Observable<Country[]>();
    //.....And to subscribe to any services here...
    this.subscription = cService.getCountries().subscribe(d => this.countries = d);
  }

  ngOnInit(): void {
    //in ng oninit you could do some further initialisation to your ui elements...in this case...
    //we retreive the filtered countries whenever the user types in something... event is triggered when the input value changes...
    this.filteredCountries = this.control.valueChanges.pipe(//pipe is used to chain functions together... data is passed betwene them   
      debounceTime(10), //when a valuchanges we are telling rxjs to wait 10 ms before proceeding to the next step in the event that the user is still typing 
      map(text => this.countries.filter(
        c => c.name.toLowerCase().startsWith(text.toLowerCase()//filter out countries based on the user input ... and return them
        ))),
      distinctUntilChanged(),//an added layer to minimise emitting of redundant data...
    );
  }

  ngOnDestroy(): void {
    //remember we could unsubscribe here .... or you may remember to take a look at rxjs take() and takeUntil() :)
    this.subscription.unsubscribe();
  }
}

