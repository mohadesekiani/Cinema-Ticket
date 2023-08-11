import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ABDataService } from 'src/app/core/services/data/abstract-data.service';
import { Ipost } from 'src/app/core/shema/models/Ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Array<Ipost> = [];
  constructor(private dataService: ABDataService, private router: Router) {}
  /**
   * صفحه مورد نظر را با آیدی مشخص هدایت می‌کند
   * @param id آیدی مشخص برای هر فیلم
   */
  buyTicket(id: number) {
    this.router.navigate(['/sans/sans/', id]);
  }
  ngOnInit() {
    this.dataService.getFakedata().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      error: (err) => {
        console.log(err, 'خطای سرور');
      },
      complete: () => {
        console.log('complated req');
      },
    });
  }
}
