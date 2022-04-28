/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 27 April, 2022
 *License: Public Domain
 */

 function sortUserName() {
   var userName = window.prompt("Hi, my name is the great WEdsde, your name sucks so please let me help you get a new one, enter your current name here.");
   console.log("userName =", userName);

   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   var nameToUpperCase = nameSorted.toUpperCase('');
   console.log("nameToUpperCase =",nameToUpperCase);

   return nameToUpperCase;
 }

 document.writeln("You can now proudly call yourself the great ",
   sortUserName(), "</br>");
