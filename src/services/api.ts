import axios from "axios";

import { AuthHeader } from "./AuthHeader";

export const api = axios.create({
  baseURL: "http://localhost:4000/v1"
})

const authHeader = AuthHeader()

export async function likePost(postId: string){
  try {
    await api.post(`/posts/${postId}/like`, null, authHeader)
  } catch (error) {
    alert("Erro ao curtir post");
  }
} 
  
export async function unlikePost(postId: string){
  try{
    await api.post(`/posts/${postId}/unlike`, null, authHeader)
  } catch(error) {
    alert("Erro ao descurtir post");
  }
}

