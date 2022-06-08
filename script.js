
var btn_bixer = document.getElementById("btn-bixer"); 
var btn_stripe = document.getElementById("btn-stripe"); 
var btn_amex = document.getElementById("btn-amex"); 

const bixer = 0.3;
const stripe = 2.9;
const amex = 1.3;


btn_bixer.onclick =  function sum_number(){
    
    var vendor_bills = parseInt(document.getElementById("vendor-bills").value);
    var media = parseInt(document.getElementById("media").value);
    var corp_spend = parseInt(document.getElementById("corp-spend").value);
    var team_project = parseInt(document.getElementById("team-project").value);
    var sum = vendor_bills + media + corp_spend + team_project;  
   
   document.getElementById("show-result-bixer").value =  "$" + sum*bixer;
    
}

btn_stripe.onclick =  function sum_number(){
    
    var vendor_bills = parseInt(document.getElementById("vendor-bills").value);
    var media = parseInt(document.getElementById("media").value);
    var corp_spend = parseInt(document.getElementById("corp-spend").value);
    var team_project = parseInt(document.getElementById("team-project").value);
    var sum = vendor_bills + media + corp_spend + team_project;  
   
    document.getElementById("show-result-stripe").value = "$" +  sum*stripe;
    
}

btn_amex.onclick =  function sum_number(){
    
    var vendor_bills = parseInt(document.getElementById("vendor-bills").value);
    var media = parseInt(document.getElementById("media").value);
    var corp_spend = parseInt(document.getElementById("corp-spend").value);
    var team_project = parseInt(document.getElementById("team-project").value);
    var sum = vendor_bills + media + corp_spend + team_project;  
   
    document.getElementById("show-result-amex").value = "$" +  sum*amex;
    
}



