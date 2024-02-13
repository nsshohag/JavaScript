//Web storage API- allows us to store and read data in browser

//Web storage API- localStorage, sessionStorage

//localStorage -store , read, update and remove data
// no expiry date: data never gets lost even if you close the browser

//sessionStorage -store , read, update and remove data
//expiry date: data gets lost if you close the browser

// localStorage vs sessionStorage
// 10mb vs 5mb
//permanent vs session(tab)

//localStorage store data as key value pair- string
//setItem(key, value)
console.log(localStorage);//it is in window default

//setItem(key,value)

localStorage.setItem("username","Sadat");
localStorage.setItem("reg","2018331099");

//getItem(key)
const userName = localStorage.getItem("username");
const reg=localStorage.getItem("reg");
console.log(userName);
console.log(reg);

//update
localStorage.setItem("username","SadatX");
localStorage.setItem("reg","2018331099");
const userNameUpdated=localStorage.getItem("username");
console.log(userNameUpdated);

//removeItem(key)
localStorage.removeItem("reg");

//setItem(key,value) in this case array is passed
const names=["Sadat","Rony","Preity"];
localStorage.setItem("names",JSON.stringify(names));// to pass array we need to stringify


//getItem
//returns array
const namesArray=JSON.parse(localStorage.getItem("names"));
console.log(namesArray);

//to clear all the localStoarge
localStorage.clear();





//sessionStorage (all the methods are like localStorage)

sessionStorage.setItem("user1","Sadat");
const user1=sessionStorage.getItem("user1");
//console.clear();
console.log(user1);

//object
const user={
    id: 101,
    name: "Sadat"
}
;
sessionStorage.setItem("user",JSON.stringify(user));

//returns object
const userObject=JSON.parse(sessionStorage.getItem("user"));
console.log(userObject);
//to clear all sessionStorage
sessionStorage.clear();


//cookie
document.cookie= "username=Sadat; expires = Sat, 17 Sep 2022 18:59:00 GMT";//check gmt time google
console.log(document.cookie);