import {
  MdOutlineHome,
  MdOutlinePeople,
  MdOutlinePersonOutline,
  MdOutlineSearch
} from 'react-icons/md'
import { MenuItem } from './MenuItem'

export function Navigation() {
  return (
    <>
      <nav className="bg-white sm:rounded-md sm:p-4 sm:sticky sm:top-24">
        <ul className="flex items-center justify-around sm:flex-col sm:gap-4">
          <MenuItem menuTitle="Inicio" path="/home">
            <MdOutlineHome size={32} />
          </MenuItem>
          <MenuItem menuTitle="Pesquisar" path="/search">
            <MdOutlineSearch size={32} />
          </MenuItem>
          <MenuItem menuTitle="Amigos" path="/friends">
            <MdOutlinePeople size={32} />
          </MenuItem>
          <MenuItem menuTitle="Perfil" path="/profile">
            <MdOutlinePersonOutline size={32} />
          </MenuItem>
        </ul>
      </nav>
    </>
  )
}
