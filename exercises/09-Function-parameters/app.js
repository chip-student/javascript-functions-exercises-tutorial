// Your code goes here:

function renderPerson(name,datebirth, color,age, genero){
    let concatena = name +" is a "+ age +" years old "+ genero +" born on " + datebirth + " with " + color +" eyes"
    return concatena;
}



  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));