function suma(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstSuma=parseFloat(num1)+parseFloat(num2);
    document.getElementById("resultado").value=rstSuma;
}
function resta(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstresta=parseFloat(num1)-parseFloat(num2);
    document.getElementById("resultado").value=rstresta;
}
function multiplicacion(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstmultiplicacion=parseFloat(num1)*parseFloat(num2);
    document.getElementById("resultado").value=rstmultiplicacion;
}
function division(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstdivision=parseFloat(num1)/parseFloat(num2);
    document.getElementById("resultado").value=rstdivision;
}
function residuo(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstresiduo=parseFloat(num1)%parseFloat(num2);
    document.getElementById("resultado").value=rstresiduo;
}
function potencia(){
    let num1=document.getElementById("Num1").value;
    let num2=document.getElementById("Num2").value;

    let rstpotencia=parseFloat(num1)**parseFloat(num2);
    document.getElementById("resultado").value=rstpotencia;
}
function limpiar(){
    document.getElementById("Num1").value="";
    document.getElementById("Num2").value="";
    document.getElementById("resultado").value="";
    var limpiar = document.getElementsByName("btn");
    for(var i = 0; i < btn.length; i++){
        btn[i].checked = false;
      }
}