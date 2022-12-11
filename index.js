function hasSurvive(attackers, defenders) {
  const initPowerAttacker = attackers.reduce((a, b) => a + b);
  const initPowerDefenders = defenders.reduce((a, b) => a + b);
  return [initPowerAttacker, initPowerDefenders];
}

console.log(hasSurvive([2, 9, 9, 7], [1, 1, 3, 8]));
