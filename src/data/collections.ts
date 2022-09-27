import artists, { Artist } from "./artists";
import tokens from "./tokens";

export type CollectionStatus = "CurrentlyMinting" | "MintingPaused" | "FinishedMinting";

export interface Collection {
  title: string;
  status: CollectionStatus;
  slug: string;
  coverImg: string;
  artist: Artist;
  mintPrice: number;
  totalTokens: number;
  description: string;
  tokens?: {
    title: string;
    src: string;
    width: number;
    height: number;
  }[];
};

const collections: Collection[] = [
  {
    title: "Abstract Odyssey",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-1",
    coverImg:
      "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1485&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.4,
    totalTokens: 20,
  },
  {
    title: "Clash of Kings",
    status: "MintingPaused",
    slug: "abstract-odyssey-2",
    coverImg:
      "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.12,
    totalTokens: 20,
  },
  {
    title: "Storm of Swords",
    status: "FinishedMinting",
    slug: "abstract-odyssey-3",
    coverImg:
      "https://images.unsplash.com/photo-1580610447943-1bfbef5efe07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.2,
    totalTokens: 20,
  },
  {
    title: "Feast for Crows",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-4",
    coverImg:
      "https://images.unsplash.com/photo-1552250575-e508473b090f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.2,
    totalTokens: 20,
  },
  {
    title: "Dance With Dragons",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-5",
    coverImg:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.4,
    totalTokens: 20,
  },
  {
    title: "Winds of Winter",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-6",
    coverImg:
      "https://images.unsplash.com/photo-1547560896-7615fab7b8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1359&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.1,
    totalTokens: 20,
  },
  {
    title: "Feast for Crows",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-7",
    coverImg:
      "https://images.unsplash.com/photo-1552250575-e508473b090f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.2,
    totalTokens: 20,
  },
  {
    title: "Dance With Dragons",
    status: "FinishedMinting",
    slug: "abstract-odyssey-8",
    coverImg:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.4,
    totalTokens: 20,
  },
  {
    title: "Winds of Winter",
    status: "CurrentlyMinting",
    slug: "abstract-odyssey-9",
    coverImg:
      "https://images.unsplash.com/photo-1547560896-7615fab7b8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1359&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.1,
    totalTokens: 20,
  },
  {
    title: "Feast for Crows",
    status: "MintingPaused",
    slug: "abstract-odyssey-10",
    coverImg:
      "https://images.unsplash.com/photo-1552250575-e508473b090f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.2,
    totalTokens: 20,
  },
  {
    title: "Dance With Dragons",
    status: "MintingPaused",
    slug: "abstract-odyssey-11",
    coverImg:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.4,
    totalTokens: 20,
  },
  {
    title: "Winds of Winter",
    status: "FinishedMinting",
    slug: "abstract-odyssey-12",
    coverImg:
      "https://images.unsplash.com/photo-1547560896-7615fab7b8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1359&q=80",
    artist: artists[Math.floor(Math.random() * artists.length)],
    mintPrice: 0.1,
    totalTokens: 20,
  }
]

for (const key of Object.keys(collections)) {
  collections[key].tokens = tokens;
  collections[key].description = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo a. Suspendisse in est ante in nibh mauris cursus mattis molestie. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Varius quam quisque id diam vel quam elementum pulvinar.</p><p>Varius sit amet mattis vulputate enim nulla. Posuere sollicitudin aliquam ultrices sagittis. Feugiat nisl pretium fusce id velit ut. Interdum posuere lorem ipsum dolor sit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit.</p>"
}

export default collections;