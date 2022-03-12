const fs =require("fs");
const path =require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}
function organize( srcpath){
 
    if(srcpath==undefined){//if path not give . take current folder where NodeJs running
        srcpath=process.cwd(); 
    }
    let organized_file =path.join(srcpath,"Organized_Folder");
    //create a file if not exist
    if(!fs.existsSync(organized_file)){
        fs.mkdirSync(organized_file);
    }else{
        console.log("Folder already exist");
    }
    //traverse directory
    let allfiles = fs.readdirSync(srcpath);
    
    //traverse the file on the basis of extension
    for(let i=0;i<allfiles.length;i++){
      let ext =allfiles[i].split(".")[1];
     console.log(ext);//only for checking
    }

}
let mypath =process.cwd();
console.log(mypath);
mypath=path.join(mypath,"downloads");
organize(mypath);