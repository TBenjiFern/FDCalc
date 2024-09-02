function calculateRatio() {
    if (document.getElementById("preFDWeight").value != "" && document.getElementById("postFDWeight").value != "") {
        if (document.getElementById("postFDWeight").value == 0){
            document.getElementById("reconstResultBoxG").innerHTML = "Post-FD Weight field cannot be 0.";
            document.getElementById("reconstResultBoxOz").innerHTML = "";
        }
        else {
            document.getElementById("reconstResultBoxG").innerHTML = "";
            document.getElementById("reconstResultBoxOz").innerHTML = "";

            let preFDWeight = document.getElementById("preFDWeight").value;
            let postFDWeight = document.getElementById("postFDWeight").value;
        
            let reconstRatioG = (preFDWeight - postFDWeight)/postFDWeight;
            let reconstRatioOz = reconstRatioG/28.35;
        
            document.getElementById("reconstResultBoxG").innerHTML = reconstRatioG.toFixed(3).toString() + "g H2O per 1g powder";
            document.getElementById("reconstResultBoxOz").innerHTML = reconstRatioOz.toFixed(3).toString() + "oz H2O per 1g powder";
        
            document.getElementById("waterToPowderRatio").value = reconstRatioOz.toFixed(3);
        }     
    } 
    else {
        if (document.getElementById("preFDWeight").value == "") {
            document.getElementById("reconstResultBoxG").innerHTML = "Pre-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("reconstResultBoxG").innerHTML = "";
        }
        if (document.getElementById("postFDWeight").value == ""){
            document.getElementById("reconstResultBoxOz").innerHTML = "Post-FD Weight field is empty! Please enter a value.";
        }
        else {
            document.getElementById("reconstResultBoxOz").innerHTML = "";
        }
    }
}

function calculatePowderNeeded() {
    if (document.getElementById("desiredH2O").value != "" && document.getElementById("waterToPowderRatio").value != "") {
        if (document.getElementById("waterToPowderRatio").value == 0) {
            document.getElementById("powderNeeded").innerHTML = "Amount of Desired H2O field cannot be 0.";
            document.getElementById("secondaryPowderWarning").innerHTML = "";
        }
        else {
            document.getElementById("powderNeeded").innerHTML = "";
            document.getElementById("secondaryPowderWarning").innerHTML = "";
            
            let h2oDesired = document.getElementById("desiredH2O").value;
            let reconstRatioOz = document.getElementById("waterToPowderRatio").value;
        
            let powderNeededG = h2oDesired/reconstRatioOz;
        
            document.getElementById("powderNeeded").innerHTML = powderNeededG.toFixed(3).toString() + "g"
        }       
    }   
    else {
        if (document.getElementById("desiredH2O").value == "") {
            document.getElementById("powderNeeded").innerHTML = "Amount of Desired H2O field is empty! Please enter a value.";
        }
        else {
            document.getElementById("powderNeeded").innerHTML = "";
        }
        if (document.getElementById("waterToPowderRatio").value == ""){
            document.getElementById("secondaryPowderWarning").innerHTML = "Reconstitution Ratio field is empty! Please enter a value.";
        }
        else {
            document.getElementById("secondaryPowderWarning").innerHTML = "";
        }
    }
}

const submitRatioCalc = document.getElementById("calcRatioSubmit");
submitRatioCalc.onclick = calculateRatio;

const submitPowderNeededCalc = document.getElementById("calcPowderNeededSubmit");
submitPowderNeededCalc.onclick = calculatePowderNeeded;