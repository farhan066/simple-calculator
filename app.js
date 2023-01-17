class Calculator{
    constructor(previusNumberBox, currentNumberBox){
        this.prevNumBox = previusNumberBox;
        this.currentNumBox = currentNumberBox;
        this.clear();
    }
    clear(){
        this.prevNum = "";
        this.currentNum = "";
        this.operation = undefined;
    }
    delete(){
        this.currentNum = this.currentNum.toString().slice(0,-1)
    }
    addNumber(number){
        if(number == "." && this.currentNum.includes(".")){
            return
        }
        this.currentNum = this.currentNum.toString() + number.toString();
    }
    addOperation(operation){
        if(this.currentNum == "") return
        if(this.prevNum != ""){
            this.calc()
        }
        this.operation = operation;
        this.prevNum = this.currentNum;
        this.currentNum = ""
    }
    calc(){
       let result;
       const prev = parseFloat(this.prevNum)
       const current = parseFloat(this.currentNum);
        if(isNaN(prev) || isNaN(current)) return
       switch(this.operation){
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;

        default:
            return;
       }
       this.currentNum = result;
       this.operation = undefined;
       this.prevNum = "";
    }
    organizeNum(number){
        return number
    }
    updateDisplay(){
        this.currentNumBox.innerText = this.organizeNum(this.currentNum)
        if(this.operation != null){
            this.prevNumBox.innerText = `${this.prevNum} ${this.operation}`
        }else{
            this.prevNumBox.innerText = ""
        }
    }
}

////selection////
const numberBtns = document.querySelectorAll(".btn-number");
const operationBtns = document.querySelectorAll(".btn-operator");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-del");
const equalsBtn = document.querySelector(".btn-equal");
const prevNumBox = document.querySelector("[data-prev]");
const currentNumBox = document.querySelector("[data-current]");

const calculator = new Calculator(prevNumBox, currentNumBox);

numberBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        calculator.addNumber(btn.dataset.num);
        calculator.updateDisplay()
    })
})
operationBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        calculator.addOperation(btn.dataset.num);
        calculator.updateDisplay()
    })
})
equalsBtn.addEventListener("click",()=>{
   calculator.calc()
   calculator.updateDisplay()
})
clearBtn.addEventListener("click",()=>{
   calculator.clear()
   calculator.updateDisplay()
})
deleteBtn.addEventListener("click",()=>{
   calculator.delete()
   calculator.updateDisplay()
})








console.warn("This project is done by Farhan")

















///////////=========EASY WAY=========///////////
// const buttons = document.querySelectorAll(".btn");
// const screen = document.querySelector(".screen");
// const equal = document.querySelector(".btn-equal");
// const clear = document.querySelector(".btn-clear");
// const del = document.querySelector(".btn-del");


// buttons.forEach(function(button){
//     button.addEventListener("click", function(e){
//         let value = e.currentTarget.dataset.num;

//         screen.value += value
//     })
// })

// equal.addEventListener("click", function(){
//     if(screen.value == ""){
//         screen.value = ""
//     }else{
//         try {
//             let answer = eval(screen.value)
//             screen.value = answer;
//           } catch (error) {
//             screen.value = "syntax error";
//           }
//     }
// })


// clear.addEventListener("click", function(){
//     screen.value = "";
// })

// del.addEventListener("click", function(){
//     let value = screen.value;
//     screen.value = value.slice(0,-1)
// })