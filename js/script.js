function calculateRatio() {
    let preFDWeight = document.getElementById("preFDWeight").value;
    let postFDWeight = document.getElementById("postFDWeight").value;

    let reconstRatioG = (preFDWeight - postFDWeight)/postFDWeight;
    let reconstRatioOz = reconstRatioG/28.35;

    document.getElementById("reconstResultBoxG").innerHTML = reconstRatioG.toFixed(3).toString() + "g H2O per 1g powder";
    document.getElementById("reconstResultBoxOz").innerHTML = reconstRatioOz.toFixed(3).toString() + "oz H2O per 1g powder";

    document.getElementById("waterToPowderRatio").value = reconstRatioOz.toFixed(3);
}

function calculatePowderNeeded() {
    let h2oDesired = document.getElementById("desiredH2O").value;
    let reconstRatioOz = document.getElementById("waterToPowderRatio").value;

    let powderNeededG = h2oDesired/reconstRatioOz;

    document.getElementById("powderNeeded").innerHTML = powderNeededG.toFixed(3).toString() + "g"
}

const submitRatioCalc = document.getElementById("calcRatioSubmit");
submitRatioCalc.onclick = calculateRatio;

const submitPowderNeededCalc = document.getElementById("calcPowderNeededSubmit");
submitPowderNeededCalc.onclick = calculatePowderNeeded;