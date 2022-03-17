const fs=require("fs");
const path = require("path");

function tree(srcpath){
    //if we want apply tree command current directory
    if(srcpath==undefined){
        srcpath =process.cwd();
    }
   let content = fs.readdirSync(srcpath);
   let basename = path.basename(srcpath);
   console.log(basename);
   for(let i=0;i<content.length;i++){
       let temp =path.join(srcpath,content[i]);
       let isFile =fs.lstatSync(temp).isFile();
       
       if(isFile){
           console.log("\t"+content[i]);
       }else{
           tree(temp);
       }
   }
}

tree(process.cwd());
module.exports ={
    tree:tree
}