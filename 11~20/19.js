// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
let result= prompt("입력")
result = result.split(" ");

let a = parseInt(result[0]);
let b = parseInt(result[1]);

let c=1;

for(let i=0;i<b;i++){
   c *= a;
}

console.log(c);