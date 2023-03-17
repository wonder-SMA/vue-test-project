export default async (page, limit) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({
    _page: page,
    _limit: limit
  }));
  const count = Math.ceil(response.headers.get('x-total-count') / limit);
  const data = await response.json();
  return { data, count };
};
