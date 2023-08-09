const getRandomData = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const progressionLength = getRandomData(5, 10);

const getProgression = (startNum, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const generateDataForProgression = () => {
  const startNum = getRandomData(1, 10);
  const step = getRandomData(1, 10);

  const progression = getProgression(startNum, step);
  const missedNumber = getRandomData(1, progression.length - 1);

  const correctAnswear = `${progression[missedNumber]}`;
  progression[missedNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswear];
};
  console.log(generateDataForProgression())