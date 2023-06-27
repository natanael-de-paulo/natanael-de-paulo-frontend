import { Text } from '../Text'
import { AiOutlineComment, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
// import img from '../../assets/1655240397925.jpg'
import { PostProps } from '../../models/Post'
import { formatDate } from '../../utils/formatData'

import { likePost, unlikePost } from '../../services/api'

interface IPostProps {
  post: PostProps
  refreshListPost: () => Promise<void>
}

export function Post({ post, refreshListPost }: IPostProps) {
  const profileId = localStorage.getItem('profile_id') as string

  const idExistToPost = post.likes.includes(profileId)
  console.log(idExistToPost)

  const handleLike = async (post_id: string) => {
    idExistToPost
      ? await unlikePost(post_id)
      : await likePost(post_id).then(e => console.log(e))
    refreshListPost()
  }

  return (
    <>
      <div className="flex flex-col bg-white rounded-md border-slate-400 p-4 sm:w-full sm:mx-auto">
        <div className="flex items-center gap-3">
          <div className="rounded-[50%] p-2 bg-teal-200  overflow-hidden">
            <AiOutlineUser size={24} className="text-slate-50" />
          </div>
          <Text className="font-extrabold"> {post.profile.name}</Text>
          <div className="text-xs">{formatDate(post.createdAt)}</div>
        </div>
        <div className="mt-4">
          <Text asChild={true}>
            <h2 className="px-4 py-2 font-extrabold">{post.title}</h2>
          </Text>
          {post.image ? (
            <div className="flex h-auto my-4">
              <img
                src={post.description}
                alt="imagem"
                className="flex rounded aspect-square w-full object-contain"
                width={216}
                height={275}
              />
            </div>
          ) : (
            <Text asChild={true} size="sm" className="text-slate-300">
              <p className="px-4 py-2 break-words whitespace-pre-wrap">
                {post.description}
              </p>
            </Text>
          )}
        </div>

        <div className="flex gap-4 mt-3 ml-3 items-center">
          <div className="flex gap-2 items-center">
            <AiOutlineComment
              size={24}
              className="hover:bg-sky-400 rounded-full p-1"
            />
            <Text size="sm"> {post.comments.length} </Text>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineHeart
              size={24}
              className="hover:bg-sky-400 rounded-full p-1"
              onClick={() => handleLike(post._id)}
            />
            <Text size="sm"> {post.likes.length} </Text>
          </div>
        </div>
      </div>
    </>
  )
}
