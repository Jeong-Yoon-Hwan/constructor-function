const arr = [];

for(let i=0;i<3;i++){
  arr.push(Math.floor(Math.random()*20));
} //* arr배열에 1~20 범위의 난수 입력


//* 배열 arr 값들의 평균값을 계산하여 average 로 반환
function clacAverage(arr){
  const average = arr.reduce((sum,current)=> (sum+current)/arr.length);
  return underAndOverMessage(average); 
}

//* 평균값이 10 미만이면 under, 10 이상이면 over 메세지 출력
function underAndOverMessage(average){
  if(average < 10) {
    console.log("under");
  }else if(average > 10){
    console.log("over");
  }
}

//* 함수 실행
clacAverage(arr);