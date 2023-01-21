class Calculator{
    constructor(prevNumBox, currentNumBox){
        this.prevNumBox = prevNumBox;
        this.currentNumBox = currentNumBox;
        this.clear()
    }
    clear(){
        this.prevNum = ""
        this.currentNum = ""
        this.operator = undefined;
    }
    delete(){
        this.currentNum = this.currentNum.slice(0,-1)
    }
    addNumber(number){
        if(number == "." && this.currentNum.includes(".")) return
        this.currentNum = this.currentNum.toString() + number.toString()
    }
    addOperator(operator){
        if(this.currentNum == "") return
        if(this.prevNum != ""){
                this.calc()
        }
        this.operator = operator;
        this.prevNum = this.currentNum;
        this.currentNum = "";
    }
    calc(){
        let result;
        const prev = parseFloat(this.prevNum);
        const current = parseFloat(this.currentNum);
        switch(this.operator){
            case "+":
                result = prev + current
                break;
            case "-":
                result = prev - current
                break;
            case "/":
                result = prev / current
                break;
            case "*":
                result = prev * current
                break;
            default:
                 return;
        }
        this.currentNum = result;
        this.operator = undefined;
        this.prevNum = "";
    }
    updateDisplay(){
        if(this.operator != null){
            this.prevNumBox.innerText = this.prevNum + " " + this.operator
        }else{
            this.prevNumBox.innerText = "";
        }
        this.currentNumBox.innerText = this.currentNum
    }
}

const numberBtns = document.querySelectorAll(".btn-number");
const operatorBtns = document.querySelectorAll(".btn-operator");
const deleteBtn = document.querySelector(".btn-del");
const clearBtn = document.querySelector(".btn-clear");
const equalsBtn = document.querySelector(".btn-equal");
const prevNumBox = document.querySelector("[data-prev]");
const currentNumBox = document.querySelector("[data-current]");

const calculator = new Calculator(prevNumBox, currentNumBox);

numberBtns.forEach(button =>{
    button.addEventListener("click", () => {
        calculator.addNumber(button.dataset.num)
        calculator.updateDisplay()
    })
})


clearBtn.addEventListener("click", ()=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteBtn.addEventListener("click", ()=>{
    calculator.delete()
    calculator.updateDisplay()
})
operatorBtns.forEach(operator =>{
    operator.addEventListener("click", ()=>{
        calculator.addOperator(operator.dataset.num)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener("click", ()=>{
    calculator.calc()
    calculator.updateDisplay()
})


console.warn("This project is done by Farhan");
