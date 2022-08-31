const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

function student(id,name){
  this.id = id;
  this.name = name;
}

const students=[];
for(let i=0;i<studentList.length;i++){
  students.push(new student(i+1,studentList[i]))
}

// const studentId=[];
// for(let i=0;i<studentList.length;i++){
//   studentId.push(students[i].id);
// }
for(key in students){
  if(students[key].name === "정윤환"){
    students[key].address ="대전";
    students[key].weight = 70;
  }
  if(students[key].name[0] === "김"){
    students[key].address ="서울";
    //console.log("김씨:"+students[key].name);
  }
  if(students[key].id%2===0){
    students[key].name +=": 짝수";
    //console.log("짝수:"+students[key].name);
  }

}


// console.log(students[1].name[0]);

// console.table(students);

