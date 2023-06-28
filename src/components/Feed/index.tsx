import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { PostProps } from '../../models/Post'
import { Post } from '../Post'
import { CreatePostDialog } from '../CreatePostDialog'
import { CreatePostBtn } from '../CreatePostBtn'
import { feed } from '../../services/feed/feed'

export function Feed() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const user = 'Handle'

  useEffect(() => {
    refreshListPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refreshListPost = async () => {
    const listPost: PostProps[] = await feed()
    setPosts(listPost)
  }

  const [open, setOpen] = useState(false)
  const closeDialog = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div className="flex w-full px-4 sm:px-0 mt-6">
        <div className="flex w-full items-center bg-white rounded-md border border-slate-200 gap-4 p-2 pl-4 sm:justify-center">
          <div className="flex items-center my-2">
            <MdOutlinePersonOutline size={24} className="text-black" />
          </div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <CreatePostBtn user={user} />
            <CreatePostDialog
              closeDialog={closeDialog}
              user={user}
              setOpen={setOpen}
              open={open}
              refreshListPost={refreshListPost}
            />
          </Dialog.Root>
        </div>
      </div>

      {posts &&
        posts.map(post => (
          <Post post={post} key={post.id} refreshListPost={refreshListPost} />
        ))}
    </div>
  )
}
