export interface Artist {
  name: string;
  coverImg: string;
  profilePhoto?: string;
  bio: string;
  slug: string;
}

const artists: Artist[] = [
  {
    name: 'Rachael Goto',
    slug: 'rachael-goto',
    coverImg: 'https://images.unsplash.com/photo-1662315317572-f797a4325b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjY0MzUwODQ2&ixlib=rb-1.2.1&q=80&w=500',
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: 'Elizabeth Li',
    slug: 'elizabeth-li',
    coverImg: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: "Lorem ipsum dolor, sit amet consectetur explicabo ullam voluptatum.",
  },
  {
    name: 'Liu Bei',
    slug: 'liu-bei',
    coverImg: 'https://images.unsplash.com/photo-1661789558607-d3bf1009e78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFzaWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    bio: "Lorem ipsum dolor sit amet consectetur, cupiditate qui praesentium? Veritatis, tempora.",
  },
  {
    name: 'James Mango',
    slug: 'james-mango',
    coverImg: 'https://images.unsplash.com/photo-1662394085019-4f529dc1f861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    bio: "Irish Scientist and Artist, based on Scotland",
  },
  {
    name: 'George R',
    slug: 'george-r',
    coverImg: 'https://images.unsplash.com/photo-1661690206751-63393e835513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    bio: "Lorem saepe officiis est in exercitationem enim eveniet, inventore fugit?"
  },
  {
    name: '#1xb0e2',
    slug: '1xb0e2',
    coverImg: 'https://images.unsplash.com/photo-1662350062239-1a8816651f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1596983528250-560ea6bb1859?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY2NDM1ODIzOQ&ixlib=rb-1.2.1&q=80&w=500',
    bio: "Lorem ipsum dolor sit blanditiis consequuntur nihil ad placeat, unde omnis reiciendis debitis!"
  },
  {
    name: 'Robin T',
    slug: 'robin-t',
    coverImg: 'https://images.unsplash.com/photo-1661680934578-3a7fac489c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    profilePhoto: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    bio: "Lorem ipsum dolor, sit amet repudiandae, vitae similique magnam asperiores doloribus quidem ipsam accusantium?"
  },
  {
    name: "Michelle Yeo",
    slug: 'michelle-yeo',
    coverImg: "https://images.unsplash.com/photo-1662130976313-2dcfed8b2abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    profilePhoto: "https://images.unsplash.com/photo-1525875975471-999f65706a10?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YXNpYW4gcG9ydHJhaXR8fHx8fHwxNjY0MzUwOTY1&ixlib=rb-1.2.1&q=80&w=500",
    bio: "Lorem ipsum dolor sit amet consectetur, saepe quis vero fugit facere accusamus recusandae."
  },
  {
    name: "Paityn Culhane",
    slug: "paityn-culhane",
    coverImg: "https://images.unsplash.com/photo-1661515503294-d124db7bdbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80",
    profilePhoto: "https://images.unsplash.com/photo-1641520816036-441dfde0f79c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus."
  },
  {
    name: "Emerson Press",
    slug: "emerson-press",
    coverImg: "https://images.unsplash.com/photo-1661493850545-0daee5f856f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    profilePhoto: "https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, magnam dolore?"
  },
  {
    name: "Ahmad Franci",
    slug: "ahmad-franci",
    coverImg: "https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profilePhoto: "https://images.unsplash.com/photo-1637819203905-2294a31391d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam quis atque dicta dolor."
  },
  {
    name: "Maren Dokidis",
    slug: "maren-dokidis",
    coverImg: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    profilePhoto: "https://images.unsplash.com/photo-1641984790242-d8aa477d306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam quis atque dicta dolor."
  },
]

export const artistSlugs = artists.map((artist) => ({
  params: {
    artistSlug: artist.slug,
  },
}));

export default artists;