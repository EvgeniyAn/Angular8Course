import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {id: 1, title: 'Post 1', text: 'Some text 1'}
    // {id: 2, title: 'Post 2', text: 'Some text 2'},
    // {id: 3, title: 'Post 3', text: 'Some text 3'}
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      //this.posts[0].title = 'Changed!'; //не работает если ChangeDetectionStrategy.OnPush
      this.posts[0] = {
        title: 'changed',
        text: 'chnaged 2',
        id: 33
      };

    }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    console.log('Id to remove: ', id);
    this.posts = this.posts.filter(item => item.id !== id);
  }


}
