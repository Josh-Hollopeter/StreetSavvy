export class User {

  username:String;
  password:String;


  constructor(username?:String,password?:String){
    this.password = password;
    this.username = username;
  }

}
