import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../shared/rental.model';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentals: Rental[] = [{
    id: "1",
    title: "home like",
    city: "Banglore",
    street: "Electornics City",
    category: "Service Apartment",
    image: "https://via.placeholder.com/350x250",
    bedrooms: "1",
    description: "nice bed root apartment",
    dailyRate: "40",
    shared: false,
    createdAt: new Date('2017/12/12')

  }, {
    id: "2",
    title: "home like",
    city: "Pune",
    street: "Kunal Icon Road",
    category: "Service Apartment",
    image: "https://via.placeholder.com/350x250",
    bedrooms: "2",
    description: "nice bed root apartment",
    dailyRate: "60",
    shared: false,
    createdAt: new Date('2017/12/12')

  }, {
    id: "3",
    title: "home like",
    city: "Mumbai",
    street: "Mulund",
    category: "Service Apartment",
    image: "https://via.placeholder.com/350x250",
    bedrooms: "3",
    description: "nice bed root apartment",
    dailyRate: "40",
    shared: false,
    createdAt: new Date('2017/12/12')

  }, {
    id: "4",
    title: "home like",
    city: "Kolkota",
    street: "Salt lake",
    category: "Service Apartment",
    image: "https://via.placeholder.com/350x250",
    bedrooms: "4",
    description: "nice bed root apartment",
    dailyRate: "42",
    shared: false,
    createdAt: new Date('2017/12/12')

  }];
  public getRentalById(rentalId: String): Observable<Rental> {
    

    return new Observable((observer) => {
      setTimeout(() => {
       const foundRental = this.rentals.find(rental=>rental.id === rentalId);
       // let foundRental = this.rentals.filter(rental=>rental.id ===rentalId)[0];
        console.log("#############", foundRental);
        observer.next(foundRental);
      }, 500);

    })
  }
  public getRentals(): Observable<Rental[]> {
    const rentalObserable: Observable<Rental[]> = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000),
      setTimeout(() => {
      }, 2000),
      setTimeout(() => {
          observer.complete();
      }, 3000)
    });

    return rentalObserable;
  }

}
