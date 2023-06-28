import { PostProps } from "../../models/Post";
import { ConfigRequest } from "../AuthHeader";
import { api } from "../api";

export async function feed() : Promise<PostProps[]>{
  try {
    const { data } = await api.get("/feed", ConfigRequest())
    return data
  } catch (error: any) {
    throw Error(`Erro ao carregar feed, causa: ${error.message}}`);
  }
} 