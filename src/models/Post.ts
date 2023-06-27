export interface PostProps{
  _id: string;
  title: string;
  description: string;
  profile: ProfileProps;
  image: boolean;
  imagePath: string;
  comments: [string];
  likes: [string];
  createdAt: string;
  updatedAt: string;
}


export type ProfileProps = {
  _id: string;
  name: string;
  user: string;
  following: [string];
  followers: [string];
  image: boolean;
  imageUrl: string;
}