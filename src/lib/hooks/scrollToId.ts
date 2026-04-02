export const scrollToId = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;

  history.pushState(null, "", `#${id}`);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
