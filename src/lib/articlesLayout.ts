export function sortByNewestFirst<T extends { publishedAt: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function addPaidFlag<T>(articles: T[]) {
  const rowSize = 3;

  return articles.map((article, index) => {
    const row = Math.floor(index / rowSize);
    const col = index % rowSize;

    let isPaid = false;

    if (row % 2 === 0 && col === 2) {
      isPaid = true;
    }

    return {
      ...article,
      isPaid,
    };
  });
}
