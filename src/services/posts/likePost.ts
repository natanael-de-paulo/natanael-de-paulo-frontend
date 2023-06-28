import { ConfigRequest } from "../AuthHeader";
import { api } from "../api";

export async function likePost(postId: string, userId: string){
  try {
    await api.post(`/posts/${postId}/like`, null, ConfigRequest(
      {
        params: {
          userId: userId
        }
      }
    ))
  } catch (error) {
    alert("Erro ao curtir post");
  }
} 