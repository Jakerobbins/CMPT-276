function meanFunction(){

	var N1= document.forms["A1"]["A1N"].value;
	var D1= document.forms["A1"]["A1D"].value;
	var N2= document.forms["A2"]["A2N"].value;
	var D2= document.forms["A2"]["A2D"].value;
	var N3= document.forms["A3"]["A3N"].value;
	var D3= document.forms["A3"]["A3D"].value;
	var N4= document.forms["A4"]["A4N"].value;
	var D4= document.forms["A4"]["A4D"].value;


	var count = 0;
	var sum = 0;


	if(   N1>=0   && D1>0 ){  //IF NUMERATOR & DENOMINATOR ARE VALID
		var Pe1=(N1/D1)*100;
		document.getElementById("P1").innerHTML =Pe1.toFixed(1) + "%";
		count=count+1;
		sum=sum+Pe1;
	}
	else if(isNaN(N1) || isNaN(D1) ){   //IF INVALID INPUT
		document.getElementById("P1").innerHTML ="Invalid Input";
	}
	else if(N1 < 0   || D1<0){
		document.getElementById("P1").innerHTML ="Invalid Input";
	}

	else{   
		document.getElementById("P1").innerHTML = "";
	}



	if(   N2>=0   && D2>0 ){
		var Pe2=(N2/D2)*100;
		document.getElementById("P2").innerHTML =Pe2.toFixed(1) + "%";
		count=count+1;
		sum=sum+Pe2;
	}
	else if(isNaN(N2) || isNaN(D2)){
		document.getElementById("P2").innerHTML ="Invalid Input";
	}
	else if(N2 < 0   || D2<0){
		document.getElementById("P2").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P2").innerHTML ="";
	}


	if(   N3>=0   && D3>0 ){
		var Pe3=(N3/D3)*100;
		document.getElementById("P3").innerHTML =Pe3.toFixed(1) + "%";
		count=count+1;
		sum=sum+Pe3;
	}
	else if(isNaN(N3) || isNaN(D3)){
		document.getElementById("P3").innerHTML ="Invalid Input";
	}
	else if(N3 < 0   || D3<0){
		document.getElementById("P3").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P3").innerHTML ="";
	}



	if(   N4>=0   && D4>0 ){
		var Pe4=(N4/D4)*100;
		document.getElementById("P4").innerHTML =Pe4.toFixed(1) + "%";
		count=count+1;
		sum=sum+Pe4;
	}
	else if(isNaN(N4) || isNaN(D4)){
		document.getElementById("P4").innerHTML ="Invalid Input";
	}
	else if(N4 < 0   || D4<0){
		document.getElementById("P4").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P4").innerHTML ="";
	}




var Me = sum/count ;

if(isNaN(Me)){
	document.getElementById("Tot").innerHTML = "";
}
else{
	document.getElementById("Tot").innerHTML = "Mean = " + Me.toFixed(1) + "%";
}







}







function avgFunction(){
//READS VALUES FROM ALL FORMS
	var N1= (document.forms["A1"]["A1N"].value);
	var D1= (document.forms["A1"]["A1D"].value);
	var N2= Number(document.forms["A2"]["A2N"].value);
	var D2= Number(document.forms["A2"]["A2D"].value);
	var N3= Number(document.forms["A3"]["A3N"].value);
	var D3= Number(document.forms["A3"]["A3D"].value);
	var N4= Number(document.forms["A4"]["A4N"].value);
	var D4= Number(document.forms["A4"]["A4D"].value);


//DECLARES NUMERATOR, DENOMINATOR 
	var nom=0;
	var dom=0;


	if(   N1>=0   && D1>0 ){  //IF NUMERATOR & DENOMINATOR ARE VALID
		var Pe1=(N1/D1)*100;
		document.getElementById("P1").innerHTML =Pe1.toFixed(1) + "%";
		nom = nom+N1;
		dom = dom+D1;
	}
	else if(isNaN(N1) || isNaN(D1) ){   //IF INVALID INPUT
		document.getElementById("P1").innerHTML ="Invalid Input";
	}
	else if(N1 < 0   || D1<0){
		document.getElementById("P1").innerHTML ="Invalid Input";
	}

	else{   
		document.getElementById("P1").innerHTML = "";
	}



	if(   N2>=0   && D2>0 ){
		var Pe2=(N2/D2)*100;
		document.getElementById("P2").innerHTML =Pe2.toFixed(1) + "%";
		nom = nom + N2;
		dom = dom + D2;
	}
	else if(isNaN(N2) || isNaN(D2)){
		document.getElementById("P2").innerHTML ="Invalid Input";
	}
	else if(N2 < 0   || D2<0){
		document.getElementById("P2").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P2").innerHTML ="";
	}


	if(   N3>=0   && D3>0 ){
		var Pe3=(N3/D3)*100;
		document.getElementById("P3").innerHTML =Pe3.toFixed(1) + "%";
		nom = nom+N3;
		dom = dom+D3;
	}
	else if(isNaN(N3) || isNaN(D3)){
		document.getElementById("P3").innerHTML ="Invalid Input";
	}
	else if(N3 < 0   || D3<0){
		document.getElementById("P3").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P3").innerHTML ="";
	}



	if(   N4>=0   && D4>0 ){
		var Pe4=(N4/D4)*100;
		document.getElementById("P4").innerHTML =Pe4.toFixed(1) + "%";
		nom = nom+N4;
		dom = dom+D4;
	}
	else if(isNaN(N4) || isNaN(D4)){
		document.getElementById("P4").innerHTML ="Invalid Input";
	}
	else if(N4 < 0   || D4<0){
		document.getElementById("P4").innerHTML ="Invalid Input";
	}
	else{
		document.getElementById("P4").innerHTML ="";

	}




var Av = nom/dom *100;

if(isNaN(Av)){
	document.getElementById("Tot").innerHTML = "";
}
else{
	document.getElementById("Tot").innerHTML = "Avg = " + Av.toFixed(1) + "%";
}

}