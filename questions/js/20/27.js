window.onload = function () {
  const name = window.prompt("Write names").split(" ");
  const grade = window.prompt("Write grades").split(" ");

  /*
  const object = {
    [name[0]]: grade[0],
    [name[1]]: grade[1],
  };
  console.log(object);
  */

  const object = {};
  for (let i = 0; i < name.length; i++) {
    object[name[i]] = parseInt(grade[i], 10);
  }
  console.log(object);
};
