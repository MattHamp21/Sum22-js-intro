// Loop through an array

let nums = [10,20,30,40]

const isGreaterThan10 = (num)=>{
  if(num>=10){
    console.log(num + 'is greater equal than ten')
  } else {
    console.log(num + 'is less than ten')
  }
}

isGreaterThan10(30)
isGreaterThan10(20)
isGreaterThan10(3)
nums.forEach(isGreaterThan10)