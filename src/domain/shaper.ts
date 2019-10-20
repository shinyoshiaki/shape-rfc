export function shaper(text: string) {
  // rm mokuji
  let now = text;
  const intro = "1.  Introduction";
  now = intro + text.split(intro)[2];

  now = now
    .split("\n")
    .filter(s => s.slice(0, 9) !== "Rosenberg" && s.slice(0, 3) !== "RFC")
    .map(s => (s.slice(0, 2) === "  " ? s.slice(2, s.length) : s))
    .map(s => (s.slice(0, 1) === " " ? s.slice(1, s.length) : s))
    .map(s => (s.slice(0, 2) === " \n" ? s.slice(2, s.length) : s))
    .reduce(
      (acc, cur) => {
        const last = acc.slice(-1)[0];
        if (cur === "" && last !== "" && last !== "\n") acc.push("\n");
        else if (cur !== "") acc.push(cur);
        return acc;
      },
      [] as string[]
    )
    .reduce(
      (acc, cur) => {
        const last = acc.slice(-1)[0];
        if (cur !== "\n" && cur !== "") acc.push(cur);
        else if (cur === "\n" && last !== "\n") acc.push(cur);
        return acc;
      },
      [] as string[]
    )
    .reduce(
      (acc, cur) => {
        if (cur !== " ") acc.push(cur);
        return acc;
      },
      [] as string[]
    )
    .join("");

  console.log(now.split("\n"));
  return now;
}
