
function js_function00(){

    var str =document.querySelector("h1").innerText;
    if(str.indexOf('にゃー')!==-1){
        document.querySelector("h1").innerText ="ぴよぴよ";
        document.getElementById("A1").value = "にゃー";
        document.getElementById("A2").value = "わん";
    }
    if(str.indexOf('わん')!==-1){
        document.querySelector("h1").innerText ="にゃー";
        document.getElementById("A1").value = "わん";
        document.getElementById("A2").value = "ぴよぴよ";
        
    }
    if(str.indexOf('ぴよぴよ')!==-1){
        document.querySelector("h1").innerText ="わん";
        document.getElementById("A1").value = "ぴよぴよ";
        document.getElementById("A2").value = "にゃー";
    }
    console.log(document.querySelector("h1").innerText);
}

　function js_function04(){
    var str =document.getElementById("A1").value;
    if(str.indexOf('にゃー')!==-1){
        document.querySelector("h1").innerText ="にゃー";
        document.getElementById("A1").value = "わん";
        document.getElementById("A2").value = "ぴよぴよ";
        
    }
    if(str.indexOf('わん')!==-1){
        document.querySelector("h1").innerText ="わん";
        document.getElementById("A1").value = "ぴよぴよ";
        document.getElementById("A2").value = "にゃー";
        
    }
    if(str.indexOf('ぴよぴよ')!==-1){
        document.querySelector("h1").innerText ="ぴよぴよ";
        document.getElementById("A1").value = "にゃー";
        document.getElementById("A2").value = "わん";
        
    }
    console.log(document.querySelector("h1").innerText);

}

function js_function05(){
    var str =document.getElementById("A2").value;
    if(str.indexOf('にゃー')!==-1){
        document.querySelector("h1").innerText ="にゃー";
        document.getElementById("A1").value = "ぴよぴよ";
        document.getElementById("A2").value = "わん";
    }
    if(str.indexOf('わん')!==-1){
        document.querySelector("h1").innerText ="わん";
        document.getElementById("A1").value = "ぴよぴよ";
        document.getElementById("A2").value = "にゃー";
    }
    if(str.indexOf('ぴよぴよ')!==-1){
        document.querySelector("h1").innerText ="ぴよぴよ";
        document.getElementById("A1").value = "にゃー";
        document.getElementById("A2").value = "わん";
    }
    console.log(document.querySelector("h1").innerText);

}


// +1,-1,ac
function js_function01(){
    let a=Number(document.querySelector("h2").innerText);
   console.log(a+1);
   a=a+1;
   document.querySelector("h2").innerText =a;
}

function js_function02(){
    let a=Number(document.querySelector("h2").innerText);
    console.log(a+1);
    a=a-1;
    document.querySelector("h2").innerText =a;
}

function js_function03(){

    let a=Number(document.querySelector("h2").innerText);
    console.log(0);
    a=0;
    document.querySelector("h2").innerText =a;

}

