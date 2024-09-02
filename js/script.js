function calculateRatioUS() {
    if (document.getElementById("usPreFDWeight").value != "" && document.getElementById("usPostFDWeight").value != "") {
        if (document.getElementById("usPostFDWeight").value == 0){
            document.getElementById("usReconstResultBoxG").innerHTML = "Post-FD Weight field cannot be 0.";
            document.getElementById("usReconstResultBoxOz").innerHTML = "";
        }
        else {
            document.getElementById("usReconstResultBoxG").innerHTML = "";
            document.getElementById("usReconstResultBoxOz").innerHTML = "";

            let preFDWeight = document.getElementById("usPreFDWeight").value;
            let postFDWeight = document.getElementById("usPostFDWeight").value;
        
            let reconstRatioG = (preFDWeight - postFDWeight)/postFDWeight;
            let reconstRatioOz = reconstRatioG/29.57;
        
            document.getElementById("usReconstResultBoxG").innerHTML = reconstRatioG.toFixed(3).toString() + "g H2O per 1g powder";
            document.getElementById("usReconstResultBoxOz").innerHTML = reconstRatioOz.toFixed(3).toString() + "oz H2O per 1g powder";
        
            document.getElementById("usWaterToPowderRatio").value = reconstRatioOz.toFixed(3);
        }     
    } 
    else {
        if (document.getElementById("usPreFDWeight").value == "") {
            document.getElementById("usReconstResultBoxG").innerHTML = "Pre-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("usReconstResultBoxG").innerHTML = "";
        }
        if (document.getElementById("usPostFDWeight").value == ""){
            document.getElementById("usReconstResultBoxOz").innerHTML = "Post-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("usReconstResultBoxOz").innerHTML = "";
        }
    }
}

function calculatePowderNeededUS() {
    if (document.getElementById("usDesiredH2O").value != "" && document.getElementById("usWaterToPowderRatio").value != "") {
        if (document.getElementById("usWaterToPowderRatio").value == 0) {
            document.getElementById("usPowderNeeded").innerHTML = "Amount of Desired H2O field cannot be 0.";
            document.getElementById("usSecondaryPowderWarning").innerHTML = "";
        }
        else {
            document.getElementById("usPowderNeeded").innerHTML = "";
            document.getElementById("usSecondaryPowderWarning").innerHTML = "";
            
            let h2oDesired = document.getElementById("usDesiredH2O").value;
            let reconstRatioOz = document.getElementById("usWaterToPowderRatio").value;
        
            let powderNeededG = h2oDesired/reconstRatioOz;
        
            document.getElementById("usPowderNeeded").innerHTML = powderNeededG.toFixed(3).toString() + "g"
        }       
    }   
    else {
        if (document.getElementById("usDesiredH2O").value == "") {
            document.getElementById("usPowderNeeded").innerHTML = "Amount of Desired H2O field is empty! Please enter a value.";
        }
        else {
            document.getElementById("usPowderNeeded").innerHTML = "";
        }
        if (document.getElementById("usWaterToPowderRatio").value == ""){
            document.getElementById("usSecondaryPowderWarning").innerHTML = "Reconstitution Ratio field is empty! Please enter a value.";
        }
        else {
            document.getElementById("usSecondaryPowderWarning").innerHTML = "";
        }
    }
}

function calculateRatioUK() {
    if (document.getElementById("ukPreFDWeight").value != "" && document.getElementById("ukPostFDWeight").value != "") {
        if (document.getElementById("ukPostFDWeight").value == 0){
            document.getElementById("ukReconstResultBoxG").innerHTML = "Post-FD Weight field cannot be 0.";
            document.getElementById("ukReconstResultBoxOz").innerHTML = "";
        }
        else {
            document.getElementById("ukReconstResultBoxG").innerHTML = "";
            document.getElementById("ukReconstResultBoxOz").innerHTML = "";

            let preFDWeight = document.getElementById("ukPreFDWeight").value;
            let postFDWeight = document.getElementById("ukPostFDWeight").value;
        
            let reconstRatioG = (preFDWeight - postFDWeight)/postFDWeight;
            let reconstRatioOz = reconstRatioG/28.41;
        
            document.getElementById("ukReconstResultBoxG").innerHTML = reconstRatioG.toFixed(3).toString() + "g H2O per 1g powder";
            document.getElementById("ukReconstResultBoxOz").innerHTML = reconstRatioOz.toFixed(3).toString() + "oz H2O per 1g powder";
        
            document.getElementById("ukWaterToPowderRatio").value = reconstRatioOz.toFixed(3);
        }     
    } 
    else {
        if (document.getElementById("ukPreFDWeight").value == "") {
            document.getElementById("ukReconstResultBoxG").innerHTML = "Pre-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("ukReconstResultBoxG").innerHTML = "";
        }
        if (document.getElementById("ukPostFDWeight").value == ""){
            document.getElementById("ukReconstResultBoxOz").innerHTML = "Post-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("ukReconstResultBoxOz").innerHTML = "";
        }
    }
}

function calculatePowderNeededUK() {
    if (document.getElementById("ukDesiredH2O").value != "" && document.getElementById("ukWaterToPowderRatio").value != "") {
        if (document.getElementById("ukWaterToPowderRatio").value == 0) {
            document.getElementById("ukPowderNeeded").innerHTML = "Amount of Desired H2O field cannot be 0.";
            document.getElementById("ukSecondaryPowderWarning").innerHTML = "";
        }
        else {
            document.getElementById("ukPowderNeeded").innerHTML = "";
            document.getElementById("ukSecondaryPowderWarning").innerHTML = "";
            
            let h2oDesired = document.getElementById("ukDesiredH2O").value;
            let reconstRatioOz = document.getElementById("ukWaterToPowderRatio").value;
        
            let powderNeededG = h2oDesired/reconstRatioOz;
        
            document.getElementById("ukPowderNeeded").innerHTML = powderNeededG.toFixed(3).toString() + "g"
        }       
    }   
    else {
        if (document.getElementById("ukDesiredH2O").value == "") {
            document.getElementById("ukPowderNeeded").innerHTML = "Amount of Desired H2O field is empty! Please enter a value.";
        }
        else {
            document.getElementById("ukPowderNeeded").innerHTML = "";
        }
        if (document.getElementById("ukWaterToPowderRatio").value == ""){
            document.getElementById("ukSecondaryPowderWarning").innerHTML = "Reconstitution Ratio field is empty! Please enter a value.";
        }
        else {
            document.getElementById("ukSecondaryPowderWarning").innerHTML = "";
        }
    }
}

const usSubmitRatioCalc = document.getElementById("usCalcRatioSubmit");
usSubmitRatioCalc.onclick = calculateRatioUS;

const usSubmitPowderNeededCalc = document.getElementById("usCalcPowderNeededSubmit");
usSubmitPowderNeededCalc.onclick = calculatePowderNeededUS;

const ukSubmitRatioCalc = document.getElementById("ukCalcRatioSubmit");
ukSubmitRatioCalc.onclick = calculateRatioUK;

const ukSubmitPowderNeededCalc = document.getElementById("ukCalcPowderNeededSubmit");
ukSubmitPowderNeededCalc.onclick = calculatePowderNeededUK;

//Collapsible Code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 1200 + "px";
    }
  });
}