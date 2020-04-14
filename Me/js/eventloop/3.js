// let arr = []




setImmediate(() => {

  console.log(111);

  setImmediate(() => {
    console.log(333);
  })

  setTimeout(() => { 
    console.log(222);
  }, 0);

});