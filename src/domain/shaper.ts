export function shaper(text: string) {
  let now = text;
  const intro = "1.  Introduction";
  if (!text.split(intro)[2]) return "";
  now = intro + text.split(intro)[2];

  let arr = now.split("\n").reduce(
    (acc, cur) => {
      if (cur.slice(0, 9) === "Rosenberg") {
        acc = [...acc].slice(0, -3);
      } else if (
        acc[acc.length - 3] &&
        acc[acc.length - 3].slice(0, 3) === "RFC"
      ) {
        const next = [...acc].slice(0, -4);
        next.push(cur);
        acc = next;
      } else acc.push(cur);
      return acc;
    },
    [] as string[]
  );

  arr = arr.map(s => (s.slice(0, 3) === "   " ? s.slice(2, s.length) : s));

  console.log([...arr]);

  arr = arr.reduce(
    (acc, cur) => {
      const last = acc.slice(-1)[0];
      if (cur === "" && last !== "" && last !== "\n") acc.push("\n\n");
      else if (cur !== "") acc.push(cur);
      return acc;
    },
    [] as string[]
  );

  //   console.log([...arr]);

  //   arr = arr.reduce(
  //     (acc, cur) => {
  //       return acc;
  //     },
  //     [] as string[]
  //   );

  now = arr.join("");
  return now;
}
