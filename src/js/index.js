import helloworld from './helloworld';
import {promiseName,promiseSurName} from './promise';
import 'bootstrap/dist/css/bootstrap.min.css';

helloworld();

var notes = document.getElementById("myNotes");

const log = (data) => {
  notes.innerHTML = `<h1>${data}</h1>`;
}

Promise.all([promiseName,promiseSurName]).then( data => {
  const [names,surnames] = data;
  var fullname = '';
  for(var i=0;i<names.length;i++){
    const name = names[i];
    const surname = surnames[i];
    fullname += `${name} ${surname} <br/>`;
  }
  log(fullname);
}).catch( error => {
  log(error);
});



