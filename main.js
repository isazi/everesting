// Global variables

var isPaused;
var previousAscent;

function evaluate(input, output)
{
  var ascentDiff = 0;
  
  if ( isPaused )
  {
    return;
  }
  ascentDiff = input.ascent - previousAscent;
  if ( (ascentDiff == 0) && (output.remainingAscent <= 0) ) {
    return;
  }
  output.remainingAscent = output.remainingAscent - ascentDiff;
  previousAscent = input.ascent;
}

function onLoad(input, output)
{
  if ( input.unit == 0 ){
    output.remainingAscent = 8848.86;
  }
  else
  {
    output.remainingAscent = 29031.7;
  }
}

function onExerciseStart()
{
  isPaused = false;
  previousAscent = 0.0;
}

function onExercisePause()
{
  isPaused = true;
}

function onExerciseContinue()
{
  isPaused = false;
}

/*
function onLap() { trace('--- onLap ---'); }
function onAutoLap() { trace('--- onAutoLap ---'); }
function onInterval() { trace('--- onInterval ---'); }
function onPoolLength() { trace('--- onPoolLength ---'); }
function onExerciseStart() { trace('--- onExerciseStart ---'); }
function onExercisePause() { trace('--- onExercisePause ---'); }
function onExerciseContinue() { trace('--- onExerciseContinue ---'); }
function onExerciseEnd() { trace('--- onExerciseEnd ---'); }
function onExercisePause() { trace('--- onExerciseEnd ---'); }
function onExerciseContinue() { trace('--- onExerciseEnd ---'); }
*/

function getUserInterface(info)
{
  return {
    template: 'template-{zapp_disp}'
  };
}

// This is called also when user backs from exercise start panel without starting
// exercise. onExerciseEnd() is not working at all as zapp gets disabled before
// it is called (and it would be called only when exercise is really started).
function getSummaryOutputs(input, output)
{
  return [{
    id: "myzapp01.remainingAscent",
    name: "Remaining ascent",
    format: "Count_Fourdigits",
    value: output.remainingAscent
  }];
}
