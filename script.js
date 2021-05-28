const fullName = "Matthew McGuire";
let age = 40;
const birthday = "May 6";
const detroitGC = false;
const lifeEvents = [
  "I was born in Southfield",
  "I went to CCS",
  "I like art",
  "I live in Brighton",
];

if (detroitGC) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(`My name is ${fullName} and I am a student at Grand Circus in Grand Rapids,
    Michigan. I am currently ${age} years old and my birthday is on ${birthday} .`);
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber}!== 5`);
  } else {
    counter++;
    console.log(`5===5.It took ${counter}
        iterations to randomly generate the number 5.`);
    break;
  }
}
