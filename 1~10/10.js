// 별 찍기
// 수열에 관한 문제로, JS의 경우 처음 경험한 프로그래밍 방법
// 문자열의 합을 이용하여 프로그래밍함.
// 각 줄마다의 공백/별을 나타내는 line 변수
// 전체적인 모양을 나타내는 tree 변수

let n;
n = prompt("뭐든 입력해");
let tree = "";
let i, j, k;

for (i = 0; i < n; i++) {
  let line = "";
  for (j = 0; j < n - i; j++) {
    line += " ";
  }
  for (k = 0; k < 2 * i - 1; k++) {
    line += "*";
  }
  tree += line + "\n";
}

console.log(tree);
