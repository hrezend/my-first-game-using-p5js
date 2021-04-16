var timeOfSurvive = 30;

function decrementTimeOfSurvive(){
    if(currentScenery === 'secondStage' && timeOfSurvive > 0){
        timeOfSurvive--;
    }
}

setInterval(decrementTimeOfSurvive, 1000);