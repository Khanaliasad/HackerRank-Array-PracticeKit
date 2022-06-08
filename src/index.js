import "./styles.css";
let test0 = {
  steps: 8,
  path: "UDDDUDUU"
};
let test1 = {
  steps: 12,
  path: "DDUUDDUDUUUD"
};
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
  // Write your code here
  let sealevel = 0;
  let setseaLevelCounter = [];
  let flag = false;

  // dduuuddduu

  [...path].forEach((a) => {
    if (sealevel < 0 && flag == false) {
      flag = true;
      setseaLevelCounter.push("1");
    }
    if (a == "D") {
      sealevel--;
    } else {
      sealevel++;
    }
    if (sealevel >= 0 && flag == true) {
      flag = false;
    }

    return setseaLevelCounter.length;
  });

  return setseaLevelCounter.length;
}
const sol1 = countingValleys(test0.steps, test0.path);
const sol2 = countingValleys(test1.steps, test1.path);

document.getElementById("clg1").innerHTML = sol1;
document.getElementById("clg2").innerHTML = sol2;
