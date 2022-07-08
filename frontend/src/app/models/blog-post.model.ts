import { User } from './user.model';

export class BlogPost {
  uuid!: string;
  title!: string;
  body!: string;
  category!: string;
  image!: string;
  user!: User;
  createdAt!: Date;

  //assign vals from json to properties
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
/* 
{
	"status": "success",
	"data": {
		"totalItems": 1,
		"totalPages": 1,
		"currentPage": 1,
		"news": [
			{
				"uuid": "72b61fc4-f969-46d3-9d44-f1bcbb273bde",
				"title": "Tempora ut quaerat voluptas maxime sed omnis dolorum et.",
				"body": "Sit omnis aliquam laudantium et earum iusto. Amet quia odit odio. Explicabo voluptates quos nam nobis doloribus eos dolore sit officiis.\n \rQuidem repellendus sed impedit dolorem tempora voluptas eum nihil dolorum. Aut quidem voluptate placeat. Et natus provident architecto cum corporis recusandae culpa eveniet eos. Ea iure rerum unde iusto quas. Mollitia autem sit. Quo et sed odio eum ut quae necessitatibus.\n \rDebitis cum alias quisquam quos quia explicabo fuga deserunt. Ducimus eaque blanditiis quaerat nesciunt ex iusto sed. Similique enim et. Consequatur consequatur at architecto omnis est ut nemo non. Incidunt sint in enim quisquam autem aut temporibus non quibusdam.",
				"image": "http://placeimg.com/640/480/abstract",
				"category": "earum",
				"createdAt": "2022-07-07T21:37:39.250Z",
				"updatedAt": "2022-07-07T21:37:39.250Z",
				"user": {
					"uuid": "b2cbf9e1-bd3d-45fd-a8a3-905e049d0e92",
					"name": "Test01",
					"email": "test01@gmail.com",
					"role": "General",
					"image": null,
					"createdAt": "2022-07-07T09:09:14.977Z",
					"updatedAt": "2022-07-07T09:09:14.977Z"
				}
			}
		]
	}
}
*/
