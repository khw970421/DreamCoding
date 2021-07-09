let fs = require('fs');
let testFolder = './'

fs.readdir('testFolder',function(error,filelist){
  filelist.map(file=>{
    let extension = file.split('.')[file.split('.').length-1];

    checkVideo(file,extension,filelist);
    checkCaptured(file,extension,filelist);
    checkDuplicated(file,filelist);
  })
})

function checkVideo(file,extension,filelist){
  if(extension == 'mp4'|| extension=='mov') {
    if(filelist.indexOf('video')  == -1){
      fs.mkdir('./video',{recursive:true},(err)=>{
        if(err) throw err;
      });
    }
    fs.rename(`./${file}`, `./video/${file}`, () => {
    })
  }
}


function checkCaptured(file,extension,filelist){
  if(extension == 'png'|| extension=='aae'){
    if(filelist.indexOf('captured')  == -1){
      fs.mkdir('./captured',{recursive:true},(err)=>{
        if(err) throw err;
      });
    }
    fs.rename(`./${file}`,`./captured/${file}`,()=>{})
  }
}

function checkDuplicated(file,filelist){
  let check  = file.split('')
  check.splice(4,1)
  if(filelist.indexOf(check.join('')) > -1){
    if(filelist.indexOf('duplicated')  == -1){
      fs.mkdir('./duplicated',{recursive:true},(err)=>{
        if(err) throw err;
      });
    }
    fs.rename(`./${check.join('')}`,`./duplicated/${check.join('')}`,()=>{})

  }
}


