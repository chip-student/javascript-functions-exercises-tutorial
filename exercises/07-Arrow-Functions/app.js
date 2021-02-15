const rapid = (str) => {
    let vocales;
    for(var i=0; i<str.length; i++)
    {
        vocales = str.toLowerCase().replace(/[aeiou]/ig,'')
    }
  return vocales.toUpperCase();
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));

