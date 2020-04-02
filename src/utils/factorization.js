import {isSquare, greaterEq, smallerEq} from './mathFunctions';

const fermatsFactorizator = n => {
  if (n === 1) return [{x: 1, y: 1}, ''];
  const begin = Date.now();

  for (let x = Math.ceil(Math.sqrt(n)); smallerEq(x, n); x += 1) {
    const ySquared = x ** 2 - n;

    if (isSquare(ySquared)) {
      const y = Math.sqrt(ySquared);

      return [{x: Number(x - y), y: Number(x + y)}, ''];
    }
    const end = Date.now();
    if (greaterEq(end - begin, 3000)) {
      return [null, 'Досягнуто максимального часу'];
    }
  }
};

export default fermatsFactorizator;
