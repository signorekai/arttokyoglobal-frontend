import slugify from '@sindresorhus/slugify';

let tokens = [
  {
    title: "Token 1",
    src: "/token-1.jpg",
    width: 5616,
    height: 3744,
  },
  {
    title: "Token 2",
    src: "/token-2.jpg",
    width: 2631,
    height: 2629,
  },
  {
    title: "Token 3",
    src: "/token-3.jpg",
    width: 2160,
    height: 2160,
  },
  {
    title: "Token 4",
    src: "https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    width: 416,
    height: 312,
  },
  {
    title: "Token 5",
    src: "https://images.unsplash.com/photo-1664613910899-f91c3452744d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    width: 416,
    height: 624,
  },
  {
    title: "Token 6",
    src: "https://images.unsplash.com/photo-1664572402064-d0d06bf6a0df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    width: 1611,
    height: 906,
  },
  {
    title: "Token 7",
    src: "https://images.unsplash.com/photo-1664581742527-b96b9e9a9783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    width: 1611,
    height: 921,
  },
  {
    title: "Token 8",
    src: "https://images.unsplash.com/photo-1664553118375-8dcc9eda394b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    width: 819,
    height: 819,
  },
  {
    title: "Token 9",
    src: "https://images.unsplash.com/photo-1664445866499-a032f4db7326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    width: 461,
    height: 819,
  },
  {
    title: "Token 10",
    src: "https://images.unsplash.com/photo-1664386047606-c081c0a0812d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    width: 614,
    height: 819,
  },
  {
    title: "Token 11",
    src: "https://images.unsplash.com/photo-1664437325268-2cd76be180d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    width: 1229,
    height: 819,
  },
  {
    title: "Token 12",
    src: "https://images.unsplash.com/photo-1664385951568-f756d207910e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    width: 1228,
    height: 819,
  },
]

tokens = tokens.map(token => ({
  ...token,
  slug: slugify(token.title)
}))

export default tokens;