window.onload = function () {
  const name = window.prompt("Write your name");
  // document.write("HELLO I AM" + name);
  // es6 expression, Template literals
  if(!name){
    return false;
  }
  document.write(`HELLO I AM ${name}`);
};
