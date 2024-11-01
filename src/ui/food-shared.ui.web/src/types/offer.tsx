export type Offer = {
  id: string;
  user: {
    name: string;
    profile: string;
  }
  timer: string;
  title: string;
  description: string;
  image: string;
  price: string;
  requests?: string[];
}