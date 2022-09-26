export interface Artist {
  name: string;
  profilePhoto?: string;
  slug: string;
}

const artists: Artist[] = [
  {
    name: 'Rachael Goto',
    slug: 'rachael-goto',
  },
  {
    name: 'Elizabeth Li',
    slug: 'elizabeth-li',
  },
  {
    name: 'Liu Bei',
    slug: 'liu-bei',
  },
  {
    name: 'Mark Gomez',
    slug: 'mark-gomez',
  },
  {
    name: 'George R',
    slug: 'george-r'
  },
  {
    name: '#1xb0e2',
    slug: '1xb0e2',
  },
  {
    name: 'Robin T',
    slug: 'robin-t'
  },
  {
    name: "Michelle Yeo",
    slug: 'michelle-yeo'
  }
]

export default artists;