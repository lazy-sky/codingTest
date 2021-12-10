function solution(s) {
  let count = 0;

  for (let c of s) {
    for (let c of s) {
      if (c === '(') {
        count += 1;
      } else {
        if (count === 0) return false;

        count -= 1;
      }
    }

    return count === 0;
  }
}

function solution_stack(s) {
  const stack = [];

  for (let c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;

      stack.pop();
    }
  }

  return stack.length === 0;
}
