import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postBinding = '';
  id = 0;

  @Output() postCreated = new EventEmitter<Post>();

  addPost() {
    if (this.postBinding != '') {
      this.id++;
      const post: Post = {
        id: this.id,
        content: this.postBinding,
      };
      this.postCreated.emit(post);
      this.postBinding = '';
    }
  }
}
