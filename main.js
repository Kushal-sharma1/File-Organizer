const fs =require("fs");
let input =process.argv.slice(2);
let command =input[0];
let path =input[1];
let helpFunc =require("./commands/help.js");
let orgfunc =require("./commands/organize.js");
let treefunc =require("./commands/tree.js")
switch(command){
  case "tree":
        treefunc.tree(path);
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