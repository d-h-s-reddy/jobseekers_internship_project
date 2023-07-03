import { Component } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
   constructor(private ser:NewserviceService){}
   rowdata:any
   ngOnInit(){
    let data={
      email:localStorage.getItem('email'),
    }
    this.ser.profiledata(data).subscribe((res:any)=>{
      this.rowdata=res;
    })
   }
}
