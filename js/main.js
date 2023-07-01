let passwordValue = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&"]
let passLengthInp = document.querySelector("input[type='range']")
let checkbox = document.querySelectorAll("input[type='checkbox'")
let passLength = document.querySelector("label")
let passLengthInpColor = document.querySelector(".color")
let strengthName = document.querySelector(".pows p")
let passValuePow = document.querySelectorAll(".pow span")
let btn = document.querySelector("button")
let password = document.querySelector("#pwrd")
let checked = []
let passValuePowColor = ""
let passValue = 0
let randomPassValue = 0
let checkedCheckbox = 0

passLengthInp.addEventListener("input", () =>{
  passLengthInpColor.style.width = `${((passLengthInp.value - passLengthInp.min) / (passLengthInp.max - passLengthInp.min)) * 100}%`
  passLength.innerText = passLengthInp.value
})

for(let i of checkbox){
  i.addEventListener("input", () => {
    checked = [checkbox[0].checked, checkbox[1].checked, checkbox[2].checked, checkbox[3].checked]
    checkedCheckbox = checked.filter(function(value){
      return value == true
    })
    indicator(checkedCheckbox.length)
  })
}

function indicator(strength){
  if(strength == 0){
    strengthName.innerText = "";
    passValuePowColor = "transparent"
  }
  else{
    for(let i = 0; i < strength; i++){
      if(strength == 1){
        strengthName.innerText = "TOO WEAK!";
        passValuePowColor =  "#F64A4A";
      }
      else if(strength == 2){
        strengthName.innerText = "WEAK";
        passValuePowColor = "#FB7C58";
      }
      else if(strength == 3){
        strengthName.innerText = "MEDIUM";
        passValuePowColor = "#F8CD65";
      }
      else{
        strengthName.innerText = "STRONG";
        passValuePowColor = "#A4FFAF";
      }

      passValuePow[i].style.cssText = `
        border: none;
        background: ${passValuePowColor};
      `;
    }
    for(let i = strength; i < 4; i++){
      passValuePow[i].style.cssText = `
      border: 2px solid #E6E5EA;
      background: transparent;
      `
    }
  }
}

function createPassword(elements){
  if(checked.includes(true)){
    password.innerText = ""
    password.style.color = "#E6E5EA"
    for(let i = 1; i <= passLengthInp.value; i++){
      passValue = elements[Math.trunc(Math.random() * elements.length)]
      randomPassValue = passValue[Math.trunc(Math.random() * passValue.length)]
      password.innerText += randomPassValue
    }
  }
  else{
      password.innerText = ""
      password.style.color = ""
      alert("Iltimos INCLUDESlardan kamida birini tanlang!")
  }
}

btn.addEventListener("click", () => {
  let charactersPassed = []
  for(let i = 0; i < 4; i++){
    if(checkbox[i].checked == true){
      charactersPassed.push(passwordValue[i])
    }
  }
  createPassword(charactersPassed)
})