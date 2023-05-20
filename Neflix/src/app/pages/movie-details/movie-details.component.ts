import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/Service/movie-api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service:MovieApiService,private router:ActivatedRoute){ }
  
  getMovieResult:any;
  getMovieVideoResult:any
  getMovieCastResult:any

  ngOnInit():void{
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getParamId#');

    this.getMovie(getParamId)
    this.getMovieVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result,'getMovieResult#');
      this.getMovieResult = result;
      
    })
  }

  getMovieVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result,'getMovieResult#');
      result.results.forEach((element:any) => {
        if(element.type === "Trailer"){
          this.getMovieVideoResult = element.key;
        }
      })
    })
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result,'getMovieResult#');
      this.getMovieCastResult = result.cast;
      })
  }

}
