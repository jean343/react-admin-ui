const CACHE = {};

const normalize = link => {
  if (!CACHE[link]) {
    const l = document.createElement("a");
    l.href = link;
    CACHE[link] = l.pathname;
  }

  return CACHE[link];
};

const getPath = obj => {
  if (obj && obj.pathname) {
    return obj.pathname;
  }

  return obj;
};

export const isSelected = (selected, href, to) => {
  const left = normalize(getPath(selected));
  const right = normalize(getPath(href) || getPath(to));
  const result = left === right;
  console.log("isSelected", selected, to, result);
  return result;
};