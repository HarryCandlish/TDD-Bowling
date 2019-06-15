module.exports = {
  scoreFrame: scoreFrame,
  totalScore: totalScore,
  isSpare: isSpare
};

function scoreFrame(frame) {
  return frame[0] + frame[1];
}

function totalScore(frame) {
  return frame[0] + frame[1];
}

function isSpare(frame) {
  if (frame[0] + frame[1] === 10) return true;
}
