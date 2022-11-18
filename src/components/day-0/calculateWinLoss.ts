const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinLoss = (value: string[]) => {
  let judgeEachPattern: string[][] = [];
  let judgeWinLoss = "";

  winPattern.forEach((pattern) => {
    let array: string[] = [];
    pattern.forEach((pat) => {
      if (value[pat] === "○") {
        array.push("○");
      } else if (value[pat] === "✕") {
        array.push("✕");
      }
    });
    judgeEachPattern.push(array);
  });
  judgeEachPattern.forEach((array) => {
    if (array[0] === "○" && array[1] === "○" && array[2] === "○") {
      judgeWinLoss = "○";
    } else if (array[0] === "✕" && array[1] === "✕" && array[2] === "✕") {
      judgeWinLoss = "✕";
    }
  });
  return judgeWinLoss;
};
