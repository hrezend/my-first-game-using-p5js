var timeOfSurvive = tempoParaSobreviverNoEstagioDois;

function decrementTimeOfSurvive(){
    if(currentScenery === 'secondStage' && timeOfSurvive > 0){
        timeOfSurvive--;
    }
}

setInterval(decrementTimeOfSurvive, 1000);