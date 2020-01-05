import { Component } from '@angular/core';
import { MyutilserviceService } from './myutilservice.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectname2';
  name = "Avi's World";
  gender = ['male','female'];
  isAvailable = true;
  startDate = new Date();
  jsonval = {name:'Avi', age:'3', address:{a1:'Mumbai', a2:'Orissa'}};
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
              "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
   names =[];
   textValue="";
   students;
  myClickEvent(e){
    this.names.push(this.textValue);
     console.log("Event triggered",e);
     console.log(this.students);
  }
  changeGender(e){
        console.log("Gender changed",e.target.value);
        if(e.target.value === 'female')
           this.isAvailable = false;
         else
           this.isAvailable = true;
   }
   textFieldChanged(e){
   console.log("key entered ",e.target.value);
    this.textValue = e.target.value;
   }


  constructor(private http: HttpClient) { }
    ngOnInit() {
      console.log("ngOnInit called");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
         this.http.get("https://jsonplaceholder.typicode.com/posts",{headers}).subscribe(res=>
         {
          console.log(res);
          this.students = res;
         }
         );
      }

    ngAfterViewInit(){
      console.log("ngAfterViewInit called");
    }
    ngOnChanges(){
      console.log("ngOnChanges called");
    }
    ngDestroy(){
      console.log("ngOnChanges called");
    }

}
