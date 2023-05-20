import { Component , OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:MovieApiService){}
  
  bannerApiData:any = []
  trendingMovieData :any = []
  actionMovieResult :any =[]
  adventureMovieResult :any = []
  animationMovieResult :any = []
  comedyMovieResult :any = []
  documentaryMovieResult :any = []
  scienceFictionalMovieResult :any = []
  thrillerMovieResult:any = []

  ngOnInit():void{
    this.bannerData();
    this.trendingMovie();
    this.actionMovie();
    this.advanturalMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionalMovie();
    this.thrillerMovie();
  }
  // bannerData

   bannerData(){
    this.service.bannerApiData().subscribe((result) => {
      console.log(result,"bannerResult#");
      this.bannerApiData = result.results;
    })
   }

   trendingMovie(){
    this.service.terndingMovie().subscribe((result) => {
      console.log(result,"trendingMovie#");
      this.trendingMovieData = result.results      
    })
   }

   actionMovie(){
    this.service.fetchActionMovie().subscribe((result) => {
      console.log(result,"ActionMovie#");
      this.actionMovieResult =  result.results 
    })
   }

   advanturalMovie(){
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result,"adventuralMovie#");
      this.adventureMovieResult =  result.results 
    })
   }

   animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result,"animationMovie#");
      this.animationMovieResult =  result.results 
    })
   }

   comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result,"comedyMovie#");
      this.comedyMovieResult =  result.results 
    })
   }

   documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result,"documentaryMovie#");
      this.documentaryMovieResult =  result.results 
    })
   }

   scienceFictionalMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result,"scienceFictionalMovie#");
      this.scienceFictionalMovieResult =  result.results 
    })
   }

   thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result,"thrillerMovie#");
      this.thrillerMovieResult =  result.results 
    })
   }


}
