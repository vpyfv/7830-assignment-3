import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-3';
  posts: Post[] = [];

  onPostAdded(post: Post) {
    this.posts.push(post);
  }
}
