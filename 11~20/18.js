// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.


let n = prompt("입력")
let result = n.split(" ");

for(let i=0; i<result.length;i++){
  result[i] = parseInt(result[i]);
}
let sum_result = result.reduce((result, a) => result+a)
console.log(Math.floor(sum_result / result.length));


// 답안
// const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
// let sum = 0;

// for (let i=0; i<3; i++){
//   sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
// }

// console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.