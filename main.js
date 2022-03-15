const fs =require("fs");
let input =process.argv.slice(2);
let command =input[0];
let path =input[1];
let helpFunc =require("./commands/help.js");
let orgfunc =require("./commands/organize.js")
switch(command){
  case "tree":
       //code
        break;
  case "organize":
       orgfunc.organize(path);
       break;
  case "help":
       helpFunc.help();
       break;
  default :
     console.log(command +" command not recognized /:");
}