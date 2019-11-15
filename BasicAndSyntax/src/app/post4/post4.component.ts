import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
      <div class="post4">
          <h2>Post4 title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias assumenda aut dignissimos dolore eum explicabo fugit
              harum illo in ipsam iure, maxime, minima odio omnis optio placeat repudiandae rerum.</p>
      </div>
  `,
  styles: [
      `
          .post4 {
              padding: .5rem;
              border: 2px solid black;
          }

          h2 {
              font-size: 1rem;
          }
    `
  ]
})
export class Post4Component {

}
