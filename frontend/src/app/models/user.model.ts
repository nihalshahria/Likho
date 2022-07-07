export class User {
  uuid!: string;
  name!: string;
  email!: string;
  role!: string;
  image!: string;

  //assign vals from json to properties
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
