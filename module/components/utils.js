const normalize = link => {
  if (link && link[0] !== "/") {
    link = "/" + link;
  }

  return link;
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
  return left === right;
};
export const triggerResize = e => {
  if (e.propertyName === "transform") {
    window.dispatchEvent(new Event('resize'));
  }
};