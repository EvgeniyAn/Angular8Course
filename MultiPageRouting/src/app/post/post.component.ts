import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params ', params);
      this.post = this.postsService.getById(+params.id);
    })
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
