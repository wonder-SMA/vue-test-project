export function getObserver(getData, page) {
  return new IntersectionObserver(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        getData(page);
      }
    },
    { threshold: 0.1 }
  );
}
