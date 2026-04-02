export const removeHash = (): void => {
  if (typeof window === "undefined") return;

  history.replaceState(
    null,
    document.title,
    window.location.pathname + window.location.search,
  );
};
