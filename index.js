let stepNumber = 1;
let lastToggleValue = 0;
let planSelected;
let yearlyOrMonthly = 'monthly';
let arcadeSelected = 0;
let advancedSelected = 0; 
let proSelected = 0; 
let onlineSelected = 0;
let largerStorageSelected = 0;
let customProfileSelected = 0;
let arcadeMonthlyPrice = 9;
let arcadeYearlyPrice = 90;
let advancedMonthlyPrice = 12;
let advancedYearlyPrice = 120;
let proMonthlyPrice = 15;
let proYearlyPrice = 150; 
let onlineMonthlyPrice = 1;
let onlineYearlyPrice = 10;
let storageMonthlyPrice = 2;
let storageYearlyPrice = 20; 
let customProfileMonthlyPrice = 2;
let customProfileYearlyPrice = 20;
let summation = 0; 

var priceArray = [
    [arcadeSelected, 9, 90], //Arcade Plan
    [advancedSelected, 12, 120], //Advanced Plan
    [proSelected, 15, 150], //Pro Plan
    [onlineSelected, 1, 10], //Online Add On
    [largerStorageSelected, 2, 20], //Storage Add On
    [customProfileSelected, 2, 20], //Custom Add On
];
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
const onlineService = document.getElementById('onlineService');
const largerStorage = document.getElementById('largerStorage');
const customProfile = document.getElementById('customProfile');
const thirdStageArr = [onlineService, largerStorage, customProfile];

const arcadePrice = document.getElementById('arcadePrice');
const advancedPrice = document.getElementById('advancedPrice');
const proPrice = document.getElementById('proPrice');
const planTimeframe = document.getElementsByClassName('planTimeframe');

const addOnPriceContainer = document.getElementsByClassName('addOnPriceContainer');
const onlineServiceCheckbox = document.getElementById('onlineServiceCheckbox');
const largerStorageCheckbox = document.getElementById('largerStorageCheckbox');
const customProfileCheckbox = document.getElementById('customProfileCheckbox');
const onlineAddOnPrice = document.getElementById('onlineAddOnPrice');
const storageAddOnPrice = document.getElementById('storageAddOnPrice');
const customProfileAddOnPrice = document.getElementById('customProfileAddOnPrice');
const addOnPeriod = document.getElementsByClassName('addOnPeriod');

const finalPriceContainer = document.getElementById('finalPriceContainer');
const finalSummary = document.getElementById('finalSummary');
const finalPrice = document.getElementById('finalPrice');

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
        for (let x = 0; x < firstStageArr.length; x++){
            firstStageArr[x].style.display = 'block';
            secondStageArr[x].style.display = 'none';
            promoText[x].style.display = 'none';
        }
        timeframeSelection.style.display = 'none';
    } else if(stepInput == 2){
        for (let x = 0; x < secondStageArr.length; x++){
            secondStageArr[x].style.display = 'flex';
            firstStageArr[x].style.display= 'none';
            thirdStageArr[x].style.display = 'none';
        }
        if(toggleSwitch.value == 1){
            for(let y = 0; y < promoText.length; y++){
                promoText[y].style.display = 'block';
                secondStageArr[y].style.alignItems = 'flex-start';
            }
        }
        timeframeSelection.style.display = 'flex';
    } else if (stepInput == 3){
        for (let x = 0; x < thirdStageArr.length; x++){
            thirdStageArr[x].style.display = 'flex';
            secondStageArr[x].style.display= 'none';
        }
        if(toggleSwitch.value == 1){
            onlineAddOnPrice.innerHTML = '+$' + onlineYearlyPrice;
            storageAddOnPrice.innerHTML = '+$' + storageYearlyPrice;
            customProfileAddOnPrice.innerHTML = '+$' + customProfileYearlyPrice;
            for (let y = 0; y < addOnPeriod.length; y ++){
                addOnPeriod[y].innerHTML = "/yr"
            } 
        } else{
            onlineAddOnPrice.innerHTML = '+$'+ onlineMonthlyPrice;
            storageAddOnPrice.innerHTML = '+$'+ storageMonthlyPrice;
            customProfileAddOnPrice.innerHTML = '+$'+ customProfileMonthlyPrice;
            for (let y = 0; y < addOnPeriod.length; y ++){
                addOnPeriod[y].innerHTML = "/mo";
            } 
        }
        finalSummary.style.display = 'none';
        finalPriceContainer.style.display = 'none';
        timeframeSelection.style.display = 'none';
    } else if (stepInput == 4){
        for (let x = 0; x < thirdStageArr.length; x++){
            thirdStageArr[x].style.display = 'none';
        }
        finalSummary.style.display = 'flex';
        finalPriceContainer.style.display = 'flex';
        costSummation();
        finalPrice.innerHTML = '+$' + summation;

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
    arcadePrice.innerHTML = '$' + arcadeMonthlyPrice;
    advancedPrice.innerHTML = '$' + advancedMonthlyPrice;
    proPrice.innerHTML = '$' + proMonthlyPrice;
    for(let z = 0; z < planTimeframe.length; z++){
        planTimeframe[z].innerHTML = '/mo';
    }
    yearlyOrMonthly = 'monthly';
}

function yearlySelection(){
    toggleSwitch.value = 1; 
    monthlyTimeframeText.style.color = '#9699ab';
    yearlyTimeframeText.style.color = '#02295a';
    for(let y = 0; y < promoText.length; y++){
        promoText[y].style.display = 'block';
        secondStageArr[y].style.alignItems = 'flex-start';
    }
    arcadePrice.innerHTML = '$' + arcadeYearlyPrice;
    advancedPrice.innerHTML = '$' + advancedYearlyPrice;
    proPrice.innerHTML = '$' + proYearlyPrice;
    for(let z = 0; z < planTimeframe.length; z++){
        planTimeframe[z].innerHTML = '/yr';
    }
    yearlyOrMonthly = 'yearly';
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
        arcadePrice.innerHTML = '$' + arcadeMonthlyPrice;
        advancedPrice.innerHTML = '$' + advancedMonthlyPrice;
        proPrice.innerHTML = '$' + proMonthlyPrice;
        for(let z = 0; z < planTimeframe.length; z++){
            planTimeframe[z] = '/mo';
        }
        yearlyOrMonthly = 'monthly';
    } else {
        toggleSwitch.value = 1;
        monthlyTimeframeText.style.color = '#9699ab';
        yearlyTimeframeText.style.color = '#02295a';
        for(let y = 0; y < promoText.length; y++){
            promoText[y].style.display = 'block';
            secondStageArr[y].style.alignItems = 'flex-start';
        }
        arcadePrice.innerHTML = '$' + arcadeYearlyPrice;
        advancedPrice.innerHTML = '$' + advancedYearlyPrice;
        proPrice.innerHTML = '$' + proYearlyPrice;
        for(let z = 0; z < planTimeframe.length; z++){
            planTimeframe[z] = '/yr';
        }
        yearlyOrMonthly = 'yearly';
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
        arcadeSelected = 1;
        priceArray[0][0] = 1;
        advancedSelected = 0;
        priceArray[1][0] = 0;
        proSelected = 0;
        priceArray[2][0] = 0; 
    } else if (item == 'advanced'){ 
        arcadeSelection.style.backgroundColor = '#ffffff';
        arcadeSelection.style.border = '1px solid #d6d9e6';
        advancedSelection.style.backgroundColor = '#f0f6ff';
        advancedSelection.style.border = '1px solid #473dff';
        proSelection.style.backgroundColor = '#ffffff';
        proSelection.style.border = '1px solid #d6d9e6';
        planSelected = item;
        arcadeSelected = 0;
        priceArray[0][0] = 0;
        advancedSelected = 1;
        priceArray[1][0] = 1;
        proSelected = 0;
        priceArray[2][0] = 0; 
    } else if (item == 'pro'){
        arcadeSelection.style.backgroundColor = '#ffffff';
        arcadeSelection.style.border = '1px solid #d6d9e6';
        advancedSelection.style.backgroundColor = '#ffffff';
        advancedSelection.style.border = '1px solid #d6d9e6';
        proSelection.style.backgroundColor = '#f0f6ff';
        proSelection.style.border = '1px solid #473dff';
        planSelected = item;
        arcadeSelected = 0;
        priceArray[0][0] = 0;
        advancedSelected = 0;
        priceArray[1][0] = 0;
        proSelected = 1;
        priceArray[2][0] = 1; 
    } else if (item == 'onlineAddOn'){
        if(onlineSelected == 0){
            onlineService.style.backgroundColor = '#f0f6ff';
            onlineService.style.border = '1px solid #473dff';
            onlineServiceCheckbox.checked = true;
            onlineSelected = 1; 
            arcadeSelected = 1;
            priceArray[3][0] = 1;
        } else {
            onlineService.style.backgroundColor = '#ffffff';
            onlineService.style.border = '1px solid #d6d9e6';
            onlineServiceCheckbox.checked = false;
            onlineSelected = 0; 
            priceArray[3][0] = 0;
        }
    } else if (item == 'storageAddOn'){
        if(largerStorageSelected == 0){
            largerStorage.style.backgroundColor = '#f0f6ff';
            largerStorage.style.border = '1px solid #473dff';
            largerStorageCheckbox.checked = true;
            largerStorageSelected = 1; 
            priceArray[4][0] = 1;
        } else {
            largerStorage.style.backgroundColor = '#ffffff';
            largerStorage.style.border = '1px solid #d6d9e6';
            largerStorageCheckbox.checked = false;
            largerStorageSelected = 0;
            priceArray[4][0] = 0; 
        }
    } else if (item == 'customAddOn'){
        if(customProfileSelected == 0){
            customProfile.style.backgroundColor = '#f0f6ff';
            customProfile.style.border = '1px solid #473dff';
            customProfileCheckbox.checked = true;
            customProfileSelected = 1; 
            priceArray[5][0] = 1;
        } else {
            customProfile.style.backgroundColor = '#ffffff';
            customProfile.style.border = '1px solid #d6d9e6';
            customProfileCheckbox.checked = false;
            customProfileSelected = 0; 
            priceArray[5][0] = 0;
        }
    }
}

function costSummation(){
    let priceIndex = 0;
    summation = 0;
    yearlyOrMonthly = "monthly" ? priceIndex = 2 : priceIndex = 3;
    for(let x = 0; x < priceArray.length; x++){
        console.log(priceArray)
        if (priceArray[x][0] == 1){
            summation = summation + priceArray[x][priceIndex];
        }
    }
}