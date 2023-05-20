import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { MovieApiService } from 'src/app/Service/movie-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  constructor(private service:MovieApiService){}

  searchResult:any
  errorMessage!: string; 

  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm(){
    {
      if(this.searchForm.value){
        console.log(this.searchForm.value,'searchForm#');
        this.service.getsearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,"Movie Result#");
          this.searchResult = result.results        
        })

      }else{
        this.errorMessage = "No Data Found"
        this.searchResult =[]
      }
    }
  }

}
