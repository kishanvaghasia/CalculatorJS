function getHistoryValue(){
    return document.getElementById("history-value").innerHTML;
}

function setHistoryValue(num){
    document.getElementById("history-value").innerHTML = num;
}

function getOutputValue(){
    return document.getElementById("output-value").innerHTML;
    
}
function setOutputValue(num){
    
    if(num==""){
        document.getElementById("output-value").innerHTML= num;
    }
    else{
    document.getElementById("output-value").innerHTML = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operator");

for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        
        if(this.id=="C"){
            setOutputValue("");
            setHistoryValue("");
        }
        else if(this.id=="CE"){
            var output = reverseNumberFormat(getOutputValue()).toString();
            
            output = output.substr(0,output.length-1);
            
            setOutputValue(output);
        }
        else{
           var  output = getOutputValue();
            var history = getHistoryValue();
            
            if(output =="" && history !=""){
                if(isNaN(history[history.length-1])){
                    history = history.substring(0,history.length-1);
                }
            }
            
         
            if(output != "" || history!= ""){
                output = output==""?output:reverseNumberFormat(output);
                
                
                history = history+output;
                
                if(this.id == "="){
                    var result = eval(history);
                    setOutputValue(result);
                    setHistoryValue("");
                
                }else{
                    history = history +this.id;
                    setHistoryValue(history);
                    setOutputValue("");
                }
            }
        }
        
    })
}


var numbers = document.getElementsByClassName("number");

for(var i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        var output = reverseNumberFormat(getOutputValue());
        
        if(output != NaN){
            output = output+this.id;
            setOutputValue(output);
        }
        
    })
}

