import { Component } from '@angular/core';
import { ABDataService } from 'src/app/core/services/data/abstract-data.service';
import { Ipost } from 'src/app/core/shema/models/Ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Array<Ipost> = [];
  constructor(
    private dataService :ABDataService
  ){}
  ngOnInit(){
    this.dataService.getFakedata().subscribe({

      next: (res)=>{
        this.posts = res
        console.log(this.posts);
        
      },
      error:(err)=>{
        console.log(err,"خطای سرور");
        
      },
      complete:()=>{
        console.log("complated req");
        
      }
    });
  }
}
