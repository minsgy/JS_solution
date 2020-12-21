let result= prompt("입력").split(' ');

console.log(
    
  Math.floor(
    parseInt(result[0])/parseInt(result[1])
  )+' '+
    Math.floor(
    parseInt(result[0])%parseInt(result[1])
    )
);
