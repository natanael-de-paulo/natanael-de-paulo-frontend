export interface PostProps{
  id: string;
  title: string;
  description: string;
  image: boolean;
  imageUrl: string;
  comments: [string];
  user_id: string;
  likes: [string];
  createdAt: string;
  updatedAt: string;
}


export type ProfileProps = {
  name: string;
  following: [string];
  followers: [string];
  image: boolean;
  imageUrl: string;
}