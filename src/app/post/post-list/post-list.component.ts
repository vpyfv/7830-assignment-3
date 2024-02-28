import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() posts: Post[] = [];

  getCombinedPostContent(index: number): string {
    return this.posts
      .slice(0, index + 1)
      .map((p) => p.content)
      .join(',');
  }
}
