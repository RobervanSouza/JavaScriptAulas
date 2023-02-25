function gradingStudents(grades) {
  // Write your code here
  for(let index = 0; index < grades.length; index += 1){ // para cada um dos elementos
    if(grades[index] >= 38){ // se for mair vaa para outro se não  ja si fora
      if(grades[index] % 5 === 3){//  divide por 5 se o resto ===3 então aumenta 2
        grades[index] += 2;
      } else if(grades[index] % 5 === 4){ // se dividir por 5 = 4 então acrescenta 1
        grades[index] += 1;
      }
    }
  }
  return grades;
};

console.log(gradingStudents([73, 67, 38, 33]));
// [ 75, 67, 40, 33 ]