var timeOfSurvive = 30;

function decrementTimeOfSurvive(){
    if(currentScenery === 'secondStage'){
        timeOfSurvive--;
    }
}

setInterval(decrementTimeOfSurvive, 1000);