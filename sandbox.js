function User(firstName, lastName, userName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = userName;
}

let user1 = new User("John", 'Doe', 'voldemort');
let user2 = new User('Bark', 'Osama', 'bomboclat');
/* '*' Pattern Rectangle with extra spaces */
/* for (let i=0;i<5;i++){
    let string='';
    for(let j=0;j<5;j++){
        string+='*';
    }
    console.log(string+'\n');
} */
/* number rectangle 5 times 3 numbers */

/* let number=0;
for (let i=0;i<3;i++){
    let string='';
    for(let j=0;j<5;j++){
        string+=number;
    }
    number++;
    console.log(string);
} */

/* Right angled triangle with stars */
/* for (let i=0;i<5;i++){
    let string='';
    for(let j=0;j<=i;j++){
        string+='*';
    }
    console.log(string);
} */

/* Reversed Triangle with stars */
/* for (let i=5;i>=0;i--){
    let string='';
    for(let j=0;j<i;j++){
        string+='*';
    }
    console.log(string);
} */

/* Numbers inverted triangle */
/* for (let i=0;i<5;i++){
    let string='';
    for(let j=5;j>i;j--){
        string+=j;
    }
    console.log(string);
}
 */

/* Right Angle triangle */
/* for (let i=5;i>=0;i--){
    let string='';
    for(let j=0;j<i;j++){
        string+=' ';
    }
    for(let j=5;j>i;j--){
        string+='*';
    }
    console.log(string);
}  */

/* Pyramid */
/* let n=1;
for (let i=5;i>=0;i--){
    let string='';
    for(let j=0;j<i;j++){
        string+=' ';
    }
    for(let j=0;j<n;j++){
        string+='*';
    }
    n+=2;
    console.log(string);
}  */

/* Inverted Pyramid */
/* let n=9;
for (let i=0;i<=5;i++){
    let string='';
    for(let j=0;j<i;j++){
        string+=' ';
    }
    for(let j=n;j>0;j--){
        string+='*';
    }
    n-=2;
    console.log(string);
}  */

/* Hour Glass */
/* let n=11;
for (let i=0;i<=5;i++){
    let string='';
    for(let j=0;j<i;j++){
        string+=' ';
    }
    for(let j=n;j>0;j--){
        string+='*';
    }
    n-=2;
    console.log(string);
} 
n=3;
for (let i=4;i>=0;i--){
    let string='';
    for(let j=0;j<i;j++){
        string+=' ';
    }
    for(let j=0;j<n;j++){
        string+='*';
    }
    n+=2;
    console.log(string);
}  */
let height = 5;
let mid = Math.round(height / 2);
for (let i = height; i >0; i--) {
    let stars = Math.round(height - 2 * (mid - i));
    let spaces = Math.abs(mid - i);
    let string = '';
    for(let sp=0;sp<spaces;sp++){
        string+=' ';
    }
    for(let st=0;st<stars;st++){
        string+='*'
    }
    console.log(string);
}