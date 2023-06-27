import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../Text'

interface MenuItemProps {
  menuTitle: string
  path: string
}

export function MenuItem({
  menuTitle,
  children,
  path
}: PropsWithChildren<MenuItemProps>) {
  return (
    <Link to={path} className="w-full">
      <li className="flex flex-col items-center rounded hover:bg-sky-400 sm:flex-row sm:gap-3">
        <figure className="text-gray-600">{children}</figure>
        <Text size="md" className="font-extrabold text-gray-400">
          {menuTitle}
        </Text>
      </li>
    </Link>
  )
}
