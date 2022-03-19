const fs=require("fs");
const path = require("path");

function tree(srcpath){
    //if we want apply tree command current directory
    if(srcpath==undefined){
        srcpath =process.cwd();
    }
    //if srcpath not exist
    if(!fs.existsSync(srcpath)){
        console.log("path not exist");
        process.exit();
    }
   treehelper(srcpath," ");
}

function treehelper(srcpath ,iden){
    let content = fs.readdirSync(srcpath);
    let basename = path.basename(srcpath);
    console.log(iden+"|__"+basename);
    for(let i=0;i<content.length;i++){
        let temp =path.join(srcpath,content[i]);
        let isFile =fs.lstatSync(temp).isFile();
        
        if(isFile){
            console.log(iden+"|--"+content[i]);
        }else{
            treehelper(temp,iden+"\t");
        }
    }

}


module.exports ={
    tree:tree
}