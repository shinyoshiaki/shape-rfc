export function shaper(text: string) {
  let now = text;
  const intro = "1.  Introduction";
  if (!text.split(intro)[2]) return "";
  now = intro + text.split(intro)[2];

  let arr = now
    .split("\n")
    .filter(s => s.slice(0, 9) !== "Rosenberg" && s.slice(0, 3) !== "RFC");

  console.log([...arr]);

  arr = arr.reduce(
    (acc, cur) => {
      const last = acc.slice(-1)[0];
      if (cur === "" && last !== "" && last !== "\n") acc.push("\n");
      else if (cur !== "") acc.push(cur);
      return acc;
    },
    [] as string[]
  );

  console.log([...arr]);

  now = arr
    .reduce(
      (acc, cur) => {
        const last = acc.slice(-1)[0];
        if (cur.length > 1) acc.push(cur);
        else if (cur.length === 1 && last.length > 1) acc.push(cur);
        return acc;
      },
      [] as string[]
    )
    .map(s => (s.slice(0, 3) === "   " ? s.slice(2, s.length) : s))

    .join("")
    .split("\n")
    .map(s => (s.slice(0, 1) === " " ? "\n\n" + s.slice(0, s.length) : s))
    .join("");

  console.log(now.split("\n"));
  return now;
}
