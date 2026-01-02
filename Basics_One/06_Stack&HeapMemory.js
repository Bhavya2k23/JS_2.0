// Stack (Always in Primitive) & Heap(Always in Non-Primitive)

// Stack (Give a Copy of Value)

let myYTname = "KingOfHell"

let anothername = myYTname
anothername = "KingSteve"

console.log(myYTname);
console.log(anothername);

// Heap (Give Original Value of Reference)

let userOne = {
    email: "zoro@gamai.com",
    upi: "ptyves@icici"
}

let userTwo = userOne

userTwo.email = "Steve@google.com"

console.log(userOne.email);
console.log(userTwo.email);
