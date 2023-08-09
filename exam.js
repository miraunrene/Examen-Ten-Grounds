// Declare global variable for tube hours array, and "rand()" function to generate values and arrange them //
var randTubes;
function rand() {
  randTubes = Array.from({length: 4}, () => Math.floor(Math.random() * (200 - 100 + 1) + 100));
  randTubes.sort();
}

//Solution A//
function examA() {
  // Declare variables to count broken tubes and tube changes (4 each 2 broken tubes)//
  var brokenTubes = 0;
  var tubeChanges = 0;

  // Begin a for loop to run 4 cicles of the simulation, one for each flourescent tube unit//
  for (i = 1; i <= 4; i++) {

    // Begin a for loop to measure 2700 hours, calculated according to the specifications of the problem//
    for (timeline = 0; timeline < 2700;) {

      // Call rand() function to generate a set of tubes, and take the first two values//
      rand();
      var tubeOne = randTubes[0];
      var tubeTwo = randTubes[1];

      // If the sum of the timeline and the tubeTwo values are less than 2700, we add 2 to brokenTubes, and 4 to tubeChanges//
      // Else if, the sum of the timeline and tubeOne values are less than 2700, we add 1 to brokenTubes (being this one possible last cicle)//
      // Else, sum of the timeline and the tubeOne values, (being this a second posible last cicle)//

      if ((timeline + tubeTwo) < 2700){
        timeline = timeline + tubeTwo;
        brokenTubes = brokenTubes + 2;
        tubeChanges = tubeChanges + 4;
      } else if ((timeline + tubeOne) < 2700) {
        timeline = timeline + tubeOne;
        brokenTubes++
      } else {
        timeline = timeline + tubeOne;
      }
    }
  }

  // Calculate spent money, and print the results at the log//
  var moneyA = tubeChanges * 7;
  console.log('Broken Flourescent Tubes =', brokenTubes);
  console.log('Total Tube Changes', tubeChanges);
  console.log('Money spent in one year = $', moneyA);
}

//Solution B//
function examB() {

  // Declare variables to count broken tubes and tube changes (4 each 2 broken tubes)//
  var brokenTubes = 0;
  var tubeChanges = 0;

  // Begin a for loop to run 4 cicles of the simulation, one for each flourescent tube unit//
  for (i = 1; i <= 4; i++) {

    // Begin a for loop to measure 2700 hours, calculated according to the specifications of the problem//
    for (timeline = 0; timeline < 2700;) {

      // Call rand() function to generate a set of tubes, and take the first two values//
      rand();
      var tubeA = randTubes[0];
      var tubeB = randTubes[1];

      // If the sum of the timeline and tubeA values is less than 2700, add 1 to brokenTubes//
      // Else add tubeA value to timeline
      if ((timeline + tubeA) < 2700) {
        timeline = timeline + tubeA;
        brokenTubes++;
      } else {
       timeline = timeline + tubeA;
      }

      // If the sum of the timeline and the difference between tubeB and tubeA is less than 2700, add 1 to brokenTubes and 4 to tubeChanges//
      // Else add the difference between tubeB and TubeA to the timeline //
      if ((timeline + (tubeB - tubeA)) < 2700) {
        timeline = timeline + (tubeB - tubeA);
        brokenTubes++;
        tubeChanges = tubeChanges + 4;
      } else {
        timeline = timeline + (tubeB - tubeA);
      }
    }
  }

  // Calculate spent money, and print the results at the log//
  var moneyB = tubeChanges * 7;
  console.log('Broken Flourescent Tubes =', brokenTubes);
  console.log('Total Tube Changes', tubeChanges);
  console.log('Money spent in one year = $', moneyB);
}
