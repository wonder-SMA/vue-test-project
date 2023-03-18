export const getData = async (page, limit) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({
    _page: page,
    _limit: limit
  }));
  const count = Math.ceil(response.headers.get('x-total-count') / limit);
  const data = await response.json();
  return { data, count };
};

export const createData = async (post) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};
