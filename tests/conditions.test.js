it('testing conditons',()=>{
  // if statements
  // declaring a variable num, am assiging it a value 1
  let num = 1
  //declaring a variable, but I am not assigning it a value
  let isodd

  expect(num).toBe(1)
  expect(isodd).toBe(undefined)
  //expect(isEven).not.toBe(error) isEven is not defined (this not undefined)
  expect(isodd).not.toBe(null)

  // logic error/semantic (user error)
/*
  if(num % 2 !== 0){
  isOdd == true 
  } else{
    isOdd = false
  }
  
  expect(isOdd).toBe(true)
*/
  //canDrink
  let tonyAge = 21
  let sallyAge = 41
  let Bobage = 18

  let isTonyLegal
  let isSallyLegal
  let isBobLegal


  //functions do stuff and they return 1 value
  const canDrink = (personAge) => {

    if(personAge >= 21){
      return true
    } else {
      return false
    }
  }

  // call the function
  isTonyLegal = canDrink(tonyAge)
  isSallyLegal = canDrink(sallyAge)
  isBobLegal =canDrink(Bobage)

  expect(isTonyLegal).toBe(true)
  expect(isSallyLegal).toBe(true)
  expect(isBobLegal).toBe(false)





  })




  // if else statements
  // if else if else statments