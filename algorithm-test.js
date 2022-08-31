const arr = [];

 //* arr배열에 1~20 범위의 난수 입력
function randomInt(arr,max,min){
  for(let i=0;i<3;i++){
    // randomNum 변수에 랜덤 숫자 생성
    let randomNum = Math.floor((Math.random() * (max+1-min))+min);
    if(arr.indexOf(randomNum) === -1){  
      //? arr.indexOf(값) : arr배열에 찾는 값이 없으면 -1를 반환한다. 
      //* arr 배열에 랜덤으로 생성된 수가 없으면 push 함.
      arr.push(randomNum);
    }else{
      i--; //* arr 배열에 이미 같은 숫자가 있으면 i값을 1감소
    }
  }
}


//* 배열 arr 값들의 평균값을 계산하여 average 로 반환
function clacAverage(arr){
  const average = arr.reduce((sum,current)=> sum+current)/arr.length;
  return underAndOverMessage(Math.floor(average)); 
}

// //* 평균값이 10 미만이면 under, 10 이상이면 over 메세지 출력
function underAndOverMessage(average){
  if(average < 10) {
    console.log("평균값: "+average+" under");
  }else if(average > 10){
    console.log("평균값: "+average+" over");
  }
}

randomInt(arr,1,20); //* 1~20까지의 난수를 arr 배열에 입력
clacAverage(arr);
//console.log(arr);


function objectAdd(first,second,third){
  this.first= first;
  this.second = second;
  this.third = third;
}

//랜덤으로 가져온 수를 objectData 객체에 키값으로 입력
const objectData=[]; 
objectData.push(new objectAdd(...arr)); //?스프레드 문법
console.log(objectData);






