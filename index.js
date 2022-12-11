function hasSurvive(attackers, defenders) {
  const initPowerAttacker = attackers.reduce((a, b) => a + b);
  const initPowerDefenders = defenders.reduce((a, b) => a + b);
  let attSurvivers = 0;
  let defSurvivers = 0;
  for (let i = 0; i < defenders.length; i++) {
    defenders[i] > attackers[i] ? defSurvivers++ : attSurvivers++;
  }
  return [attSurvivers, defSurvivers];
}

console.log(hasSurvive([2, 9, 9, 7], [1, 1, 3, 8]));
