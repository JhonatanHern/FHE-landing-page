export const getPensumUrl = (fileName) =>
  `/pensums/${encodeURIComponent(fileName)}`;
export const getPensumDocUrl = (fileName) =>
  `/pensum-docs/${encodeURIComponent(fileName)}`;

export const isHtmlFallback = (value) => {
  const sample = value.trim().slice(0, 800).toLowerCase();
  return (
    sample.includes("<!doctype html") ||
    sample.includes("<meta charset") ||
    sample.includes("/@vite/client")
  );
};

export const normalizePensumContent = (value) =>
  value
    .replace(/\r\n/g, "\n")
    .replace(/\\([-.])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
