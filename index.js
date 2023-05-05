let stepNumber = 1;
const goBackButton = document.getElementById('goBack');
const firstIndicator = document.getElementById('firstIndicator');
const secondIndicator = document.getElementById('secondIndicator');
const thirdIndicator = document.getElementById('thirdIndicator');
const fourthIndicator = document.getElementById('fourthIndicator');
const indicatorArr = [firstIndicator, secondIndicator, thirdIndicator, fourthIndicator];
const toggleSwitch = document.getElementById('toggleSwitch');
const monthlyTimeframeText = document.getElementById('monthlyTimeframeText');
const yearlyTimeframeText = document.getElementById('yearlyTimeframeText');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const telField = document.getElementById('telField');
const firstStageArr = [nameField, emailField, telField];
const arcadeSelection = document.getElementById('arcadeSelection');
const advancedSelection = document.getElementById('advancedSelection');
const proSelection = document.getElementById('proSelection');
const secondStageArr = [arcadeSelection, advancedSelection, proSelection];
const timeframeSelection = document.getElementById('timeframeSelection');
const promoText = document.getElementsByClassName('promoText');
function nextButton(){
    stepNumber++;
    if(stepNumber == 1){
        goBackButton.style.visibility = hidden;
    } else {
        goBackButton.style.visibility = 'visible';
    }
    numberIndicator(stepNumber);
    mainForm(stepNumber);
}

function goBack(){
    stepNumber--;
    console.log(stepNumber);
    if(stepNumber == 1){
        goBackButton.style.visibility = 'hidden';
    } 
    numberIndicator(stepNumber);
    mainForm(stepNumber)
}

function numberIndicator(stepInput){
    for(let i = 0; i < indicatorArr.length; i++){
        if((i+1) == stepInput){
            indicatorArr[i].style.backgroundColor = '#d6d9e6';
            indicatorArr[i].style.color = '#02295a';
        } else {
            indicatorArr[i].style.backgroundColor = 'transparent';
            indicatorArr[i].style.color = '#ffffff';
        }
    }
}

function mainForm(stepInput){
    if(stepInput == 1){
        for (let x = 0; x < firstStageArr.length; x++){
            firstStageArr[x].style.display = 'block';
            secondStageArr[x].style.display = 'none';
            promoText[x].style.display = 'none'
        }
        timeframeSelection.style.display = 'none';
    } else if(stepInput == 2){
        for (let x = 0; x < firstStageArr.length; x++){
            secondStageArr[x].style.display = 'flex';
            firstStageArr[x].style.display= 'none';
        }
        if(toggleSwitch.value == 1){
            for(let y = 0; y < promoText.length; y++){
                promoText[y].style.display = 'block';
            }
        }
        timeframeSelection.style.display = 'flex';
    }
}

function monthlySelection(){
    toggleSwitch.value = 0; 
    monthlyTimeframeText.style.color = '#02295a';
    yearlyTimeframeText.style.color = '#9699ab';
    for(let y = 0; y < promoText.length; y++){
        promoText[y].style.display = 'none';
        secondStageArr[y].style.alignContent = 'center';
    }
}

function yearlySelection(){
    toggleSwitch.value = 1; 
    monthlyTimeframeText.style.color = '#9699ab';
    yearlyTimeframeText.style.color = '#02295a';
    for(let y = 0; y < promoText.length; y++){
        promoText[y].style.display = 'block';
        secondStageArr[y].style.alignContent = 'top';
    }
}

function timeframeToggle(){
    if (toggleSwitch.value == 1){
        monthlyTimeframeText.style.color = '#9699ab';
        yearlyTimeframeText.style.color = '#02295a';
        for(let y = 0; y < promoText.length; y++){
            promoText[y].style.display = 'block';
            secondStageArr[y].style.alignContent = 'top';
        }

    } else {
        monthlyTimeframeText.style.color = '#02295a';
        yearlyTimeframeText.style.color = '#9699ab';
        for(let y = 0; y < promoText.length; y++){
            promoText[y].style.display = 'none';
            secondStageArr[y].style.alignContent = 'center';
        }
    }
}