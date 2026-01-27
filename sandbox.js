function User(firstName,lastName,userName){
this.firstName=firstName;
this.lastName=lastName;
this.username=userName;
}

let user1=new User("John",'Doe','voldemort');
let user2=new User('Bark','Osama','bomboclat');
console.log(user1);
console.log(user2.username);