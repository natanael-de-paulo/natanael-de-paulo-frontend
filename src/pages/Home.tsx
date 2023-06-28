import { Feed } from '../components/Feed'
import { HeaderTitle } from '../components/HeaderTitle'
import { Theme } from '../components/Theme'

export function Home() {
  // const [posts, setPosts] = useState<PostProps[]>([])
  // const token = localStorage.getItem('token')
  // const user = 'Handle'
  // const authHeader = AuthHeader()

  // useEffect(() => {
  //   refreshListPost()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const refreshListPost = async () => {
  //   const listPost: PostProps[] = await api
  //     .get('/feed', {
  //       params: {
  //         page: 0
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(response => response.data)

  //   setPosts(listPost)
  // }

  // const [open, setOpen] = useState(false)
  // const closeDialog = () => {
  //   setOpen(!open)
  // }

  return (
    <>
      <Theme>
        <header className="w-full h-auto p-3.5 rounded-b-md bg-white">
          <HeaderTitle>Pagina inicial</HeaderTitle>
        </header>

        <Feed />
      </Theme>
    </>
  )
}
