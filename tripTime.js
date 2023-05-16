// const tripTime = (arr) => {
//     let result = {
//       avgSpeedLimits: [3.61],
//       segmentTimes: [0, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
//       totalTime: null,
//     };


//     return result
// }

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


// console.log(tripTime(stops));





// function calculateTripTime(trip) {
//   const result = {
//     segmentTimes: [],
//     totalTime: 0,
//     avgSpeedLimits: [],
//   };

//   const { speedLimits, traffic } = trip;

//   let totalDistance = 0;
//   let totalWeightedSpeed = 0;

//   speedLimits.forEach((elem) => {
//     const { distance, speedLimit } = elem;
//     const weightedSpeed = distance * speedLimit;

//     totalDistance += distance;
//     totalWeightedSpeed += weightedSpeed;

//     const time = Math.round((distance / (speedLimit - traffic)) * 100) / 100;
//     result.segmentTimes.push(time);

//     const avgSpeedLimit = totalWeightedSpeed / totalDistance;
//     result.avgSpeedLimits.push(Math.round(avgSpeedLimit));
//   });

//   result.totalTime = result.segmentTimes.reduce((acc, time) => acc + time, 0);

//   return result;
// }

// // Example usage:
// const trip = {
//   name: `Jake's Great Shakes`,
//   speedLimits: [
//     { distance: 100, speedLimit: 75 },
//     { distance: 84, speedLimit: 70 },
//     { distance: 20, speedLimit: 75 },
//   ],
//   traffic: 30,
// };

// const result = calculateTripTime(trip);
// console.log(result);
 
// const tripTime = (arr) => {
//   // loop through arr push avg speed limit to result
//   // loop through arr push segment times to result
//   // loop through arr add up segment times to get total time

//   let result = {
//     avgSpeedLimits: [],
//     segmentTimes: [],
//     totalTime: null,
//   };

//   arr.forEach((stop) => {
//     let avgSpeed = 0;
//     let totalDistance = 0;
//     let totalTime = 0;
//     let segmentTimes = [];
//     let avgSpeedLimits = [];

//     stop.speedLimits.forEach((speedLimit) => {
//       avgSpeedLimits.push(speedLimit.speedLimit);
//       totalDistance += speedLimit.distance;
//       avgSpeed =
//         avgSpeedLimits.reduce((a, b) => a + b, 0) / avgSpeedLimits.length;
//       totalTime = totalDistance / avgSpeed;
//       segmentTimes.push(parseFloat(totalTime.toFixed(2)));
//     });
//     result.avgSpeedLimits.push(Math.round(avgSpeed));
//     result.segmentTimes.push(segmentTimes);
//   });

//   // loop through segmentTimes and add up individual arrays
//   // to get total time
//   tripTimes = result.segmentTimes.forEach((segment) => {
//     let total = 0;
//     segment.forEach((time) => {
//       total += time;
//     });
//     result.totalTime = total;
//   });

//   return result;
// };
// console.log(tripTime(stops));


// const tripTime = (stops) => {
//   let result = {
//     avgSpeedLimits: [],
//     segmentTimes: [],
//     totalTime: 0,
//   };

//   stops.forEach((stop) => {
//     let totalDistance = 0;
//     let weightedSpeedSum = 0;
//     let time = 0;

//     stop.speedLimits.forEach((limit) => {
//       totalDistance += limit.distance;
//       weightedSpeedSum += limit.distance * limit.speedLimit;
//       time += limit.distance / limit.speedLimit;
//     });

//     let avgSpeedLimit = (weightedSpeedSum / totalDistance).toFixed(1);
//     result.avgSpeedLimits.push(avgSpeedLimit);

//     let segmentTime = Math.round(time * 60) + stop.traffic;
//     result.segmentTimes.push(segmentTime);

//     result.totalTime += segmentTime;
//   });

//   return result;
// };

// console.log(tripTime(stops));


const tripTime = (arr) => {
  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: 0,
  };

  arr.forEach((stop) => {
    let totalDistance = 0;
    let weightedSpeedSum = 0;
    let segmentTime = 0;

    stop.speedLimits.forEach((limit) => {
      totalDistance += limit.distance;
      weightedSpeedSum += limit.speedLimit * limit.distance;
      segmentTime += limit.distance / limit.speedLimit;
    });

    result.avgSpeedLimits.push(weightedSpeedSum / totalDistance);
    result.segmentTimes.push(Math.round(segmentTime));
    result.totalTime += Math.round(segmentTime);
  });

  return result;
};
console.log(tripTime(stops));


