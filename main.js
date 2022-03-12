const fs =require("fs");
let input =process.argv.slice(2);
let command =input[0];
let helpFunc =require("./commands/help.js");
switch(command){
  case "tree":
       //code
        break;
  case "organize":
       //code
       break;
  case "help":
       helpFunc.help();
       break;
  default :
     console.log(command +" command not recognized /:");
}