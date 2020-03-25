const numberize = (obj, res = {}) => {
  for (const prop in obj) {
    res[prop] = Number(obj[prop]);
  }
  return res;
};
const greaterOrEqual = (x, y) => x > y || x === y;
const calcPerceptron = data => {
  const {x1, x2, y1, y2, threshold, sigma, iters, time} = numberize(data);
  let w1 = 0,
    w2 = 0,
    p1 = 0,
    p2 = 0,
    count = 0,
    delta;
  const begin = Date.now();

  while (greaterOrEqual(p1, threshold) || greaterOrEqual(threshold, p2)) {
    if (greaterOrEqual(p1, threshold)) {
      delta = threshold - p1;
      w1 += delta * x1 * sigma;
      w2 += delta * y1 * sigma;
    } else if (greaterOrEqual(threshold, p2)) {
      delta = threshold - p2;
      w1 += delta * x2 * sigma;
      w2 += delta * y2 * sigma;
    }

    p1 = x1 * w1 + y1 * w2;
    p2 = x2 * w1 + y2 * w2;
    count++;
    if (greaterOrEqual(count, iters)) {
      return [null, 'Досягнуто максимальної кількості ітерацій'];
    }
    const end = Date.now();
    if (greaterOrEqual(end - begin, time * 1000)) {
      return [null, 'Досягнуто максимального часу'];
    }
  }
  return [{w1, w2}, ''];
};

export default calcPerceptron;
