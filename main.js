    let num1 = document.querySelector('.calc-1')
    let num2 = document.querySelector('.calc-2')
    let num3 = document.querySelector('.calc-3')
    let num4 = document.querySelector('.calc-4')
    let num5 = document.querySelector('.calc-5')
    let num6 = document.querySelector('.calc-6')
    let num7 = document.querySelector('.calc-7')
    let num8 = document.querySelector('.calc-8')
    let num9 = document.querySelector('.calc-9')
    let num0 = document.querySelector('.calc-0')
    let calcScreen = document.querySelector(".numScreen")
    let Addition = document.querySelector(".calc-add")
    let calcTotal = document.querySelector(".calc-total")
    let subtract = document.querySelector(".calc-subtract")
    let btnCLear = document.querySelector(".calc-clear")
    let btnMult = document.querySelector(".calc-mult")

    num1.addEventListener('click', function(){
    calcScreen.textContent += "1" 
    });

    num2.addEventListener('click', function(){
        calcScreen.textContent += "2"
        });

        num3.addEventListener('click', function(){
            calcScreen.textContent += "3"
            });

            num4.addEventListener('click', function(){
                calcScreen.textContent += "4"
                });

                num5.addEventListener('click', function(){
                    calcScreen.textContent += "5"
                    });

                    num6.addEventListener('click', function(){
                        calcScreen.textContent += "6"
                        });
                        num7.addEventListener('click', function(){
                            calcScreen.textContent += "7"
                            });
                            num8.addEventListener('click', function(){
                                calcScreen.textContent += "8"
                                });
                                num9.addEventListener('click', function(){
                                    calcScreen.textContent += "9"
                                    });
                                    num0.addEventListener('click', function(){
                                        calcScreen.textContent += "0"
                                        });



let sum = []
let sumtotal = 0

Addition.addEventListener('click', function(){
const number = calcScreen.textContent
let converted = Number(number)
sum.push(converted)

 sumtotal = sum.reduce((a,b) => a+b)
console.log(sum)
calcScreen.textContent = ''

});

btnCLear.addEventListener('click', function(){
calcScreen.textContent = '0'
sum =[]

})
subtract.addEventListener('click', function(){
    const number = calcScreen.textContent
    let converted = Number(number)
    sum.push(-converted)
    
     sumtotal = sum.reduce((a,b) => a+b)
    console.log(sum)
    calcScreen.textContent = ''
});

btnMult.addEventListener('click', function(){
    const number = calcScreen.textContent
    let converted = Number(number)
    sum.push(converted)
    
     sumtotal = sum.reduce((a,b) => a*b)
    console.log(sum)
    calcScreen.textContent = ''


});
calcTotal.addEventListener('click', function(){
    calcScreen.textContent = sumtotal
    
    });