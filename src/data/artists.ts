export interface Artist {
  name: string;
  profilePhoto?: string;
  slug: string;
}

const artists: Artist[] = [
  {
    name: 'Rachael Goto',
    slug: 'rachael-goto',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: 'Elizabeth Li',
    slug: 'elizabeth-li',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: 'Liu Bei',
    slug: 'liu-bei',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: 'Mark Gomez',
    slug: 'mark-gomez',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: 'George R',
    slug: 'george-r',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: '#1xb0e2',
    slug: '1xb0e2',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: 'Robin T',
    slug: 'robin-t',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  },
  {
    name: "Michelle Yeo",
    slug: 'michelle-yeo',
    profilePhoto: 'https://source.unsplash.com/500x500?portrait'
  }
]

export default artists;