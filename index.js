let stepNumber = 1;
let lastToggleValue = 0;
let planSelected;
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
const formHeaderText = document.getElementById('formHeaderText');
const subtitleText = document.getElementById('subtitleText');
const stageDetailsArr = [
    ['Personal info', 'Please provide your name, email address, and phone number.'],
    ['Select your plan', 'You have the option of monthly or yearly billing.'],
    ['Pick add-ons', 'Add-ons help enhance your gaming experience.'],
    ['Finishing up', 'Double-check everything looks OK before confirming.']
];

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
    mainForm(stepNumber);
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
        for (let x = 0; x < firstStageArr.length; x++){7
            firstStageArr[x].style.display = 'block';
            secondStageArr[x].style.display = 'none';
            promoText[x].style.display = 'none';
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
                secondStageArr[y].style.alignItems = 'flex-start';
            }
        }
        timeframeSelection.style.display = 'flex';
    }
    formHeaderText.innerHTML = stageDetailsArr[stepInput-1][0];
    subtitleText.innerHTML = stageDetailsArr[stepInput-1][1];
}

function monthlySelection(){
    toggleSwitch.value = 0; 
    monthlyTimeframeText.style.color = '#02295a';
    yearlyTimeframeText.style.color = '#9699ab';
    for(let y = 0; y < promoText.length; y++){
        promoText[y].style.display = 'none';
        secondStageArr[y].style.alignItems = 'center';
    }
}

function yearlySelection(){
    toggleSwitch.value = 1; 
    monthlyTimeframeText.style.color = '#9699ab';
    yearlyTimeframeText.style.color = '#02295a';
    for(let y = 0; y < promoText.length; y++){
        promoText[y].style.display = 'block';
        secondStageArr[y].style.alignItems = 'flex-start';
    }
}

function timeframeToggle(){
    if (toggleSwitch.value == 1){
        toggleSwitch.value = 0;
        monthlyTimeframeText.style.color = '#02295a';
        yearlyTimeframeText.style.color = '#9699ab';
        for(let y = 0; y < promoText.length; y++){
            promoText[y].style.display = 'none';
            secondStageArr[y].style.alignItems = 'center';
        }
    } else {
        toggleSwitch.value = 1;
        monthlyTimeframeText.style.color = '#9699ab';
        yearlyTimeframeText.style.color = '#02295a';
        for(let y = 0; y < promoText.length; y++){
            promoText[y].style.display = 'block';
            secondStageArr[y].style.alignItems = 'flex-start';
        }
    }
}

function itemSelected(item){
    if(item == 'arcade'){
        arcadeSelection.style.backgroundColor = '#f0f6ff';
        arcadeSelection.style.border = '1px solid #473dff';
        advancedSelection.style.backgroundColor = '#ffffff';
        advancedSelection.style.border = '1px solid #d6d9e6';
        proSelection.style.backgroundColor = '#ffffff';
        proSelection.style.border = '1px solid #d6d9e6';
        planSelected = item;
    } else if (item == 'advanced'){ 
        arcadeSelection.style.backgroundColor = '#ffffff';
        arcadeSelection.style.border = '1px solid #d6d9e6';
        advancedSelection.style.backgroundColor = '#f0f6ff';
        advancedSelection.style.border = '1px solid #473dff';
        proSelection.style.backgroundColor = '#ffffff';
        proSelection.style.border = '1px solid #d6d9e6';
        planSelected = item;
    } else if (item == 'pro'){
        arcadeSelection.style.backgroundColor = '#ffffff';
        arcadeSelection.style.border = '1px solid #d6d9e6';
        advancedSelection.style.backgroundColor = '#ffffff';
        advancedSelection.style.border = '1px solid #d6d9e6';
        proSelection.style.backgroundColor = '#f0f6ff';
        proSelection.style.border = '1px solid #473dff';
        planSelected = item;
    }
 
}