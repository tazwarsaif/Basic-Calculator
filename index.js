const display = document.getElementById("display");
const btn = document.querySelectorAll(".btn")
let on = false;
let arr = [];



function process(data){
    if(on==true){
        display.value+=data
    }
}




function equal(data){
    if(on==true){
        let str1 = display.value.trim();
        let arr2 = str1.split(" ");
        let num = Number(arr2[0]);
        for(j=1;j<arr2.length;j++){
            if(j%2 != 0){
                if(arr2[j] === '+'){
                    num += Number(arr2[j+1])
                    console.log(num)
                }
                else if(arr2[j] == "*"){
                    num *= Number(arr2[j+1])
                }
                else if(arr2[j] == "-"){
                    num -= Number(arr2[j+1])
                }
                else if(arr2[j] == "/"){
                    num /= Number(arr2[j+1])
                }
            }
        }
        display.value = num;
    }
}



function reset(data){
    on = true;
    display.value = " ";
    num = 0;
}


