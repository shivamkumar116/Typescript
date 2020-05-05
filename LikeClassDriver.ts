import { Like } from "./LikeClass";

let likes = new Like(100);

//pressing the button
console.log("When user press the button..............");

likes.c();
console.log("Like Count : " + likes.LikeCount);
console.log("Is selected : " + likes.isSelected);

//again pressing the button

console.log("When user again press the button..............");

likes.c();
console.log("Like Count : " + likes.LikeCount);
console.log("Is selected : " + likes.isSelected);
