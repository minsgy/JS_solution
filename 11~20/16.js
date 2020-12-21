// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
n = prompt("입력")

let name = "";
for(let i=n.length-1;i>=0;i--){
  name += n[i];
}

console.log(name);