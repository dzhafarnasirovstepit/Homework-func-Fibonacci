function returnN(n) {

    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return returnN(n - 1) + returnN(n - 2);
    }
    
  }
  

  console.log(returnN(0));

  console.log(returnN(1));

  console.log(returnN(2));

  console.log(returnN(3));

  console.log(returnN(4));

  console.log(returnN(10));

  console.log(returnN(16)); 