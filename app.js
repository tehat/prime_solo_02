// ! ! !
// Three Bugs

var objectAtticus = {
  name: "Atticus", 
  employeeNumber: "2405", 
  baseSalary: "47000", 
  reviewScore: 3
};
var objectJem = {
  name: "Jem", 
  employeeNumber: "62347", 
  baseSalary: "63500", 
  reviewScore: 4
};
var objectBoo = {
  name: "Boo", 
  employeeNumber: "11435", 
  baseSalary: "54000", 
  reviewScore: 3
};
var objectScout = {
  name: "Scout", 
  employeeNumber: "6243", 
  baseSalary: "74750", 
  reviewScore: 5
};

var array = [objectAtticus, objectJem, objectBoo, objectScout];

var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'


for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);


  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}



function calculateSTI(object){
  //var newArray = [];

  //newArray[0] = array[0];
  var name = object.name;
  var employeeNumber = object.employeeNumber;
  var baseSalary = object.baseSalary;
  var reviewScore = object.reviewScore;

  var newObject ={
  name: "",
  basePercent: "",
  yearAdjustment: "",
  incomeAdjustment: ""
  };

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
  newObject.name = name;
  newObject.basePercent = bonus;
  newObject.yearAdjustment = Math.round(baseSalary * (1.0 + bonus));
  newObject.incomeAdjustment = baseSalary * bonus;
  console.log(newObject.name + " " + newObject.basePercent + " " + newObject.yearAdjustment + " " + newObject.incomeAdjustment);
  return newObject;
};



function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
};

console.log();

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
};

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01; 
  }
  return incomeAdjustment;
};
console.log(array);