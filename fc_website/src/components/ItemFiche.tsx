import { Item } from '@/lib/dataReader'
import { formatDateVerbose, shorten } from '@/lib/utils'
import Link from 'next/link'
import { TagsList } from './TagsList'

export function ItemFiche({ item }: { item: Item }) {
  const url = `/revuedepresse/${item.id}`
  return (
    <li className="flex flex-col stretch justify-between bg-white px-4 pt-8 pb-8 text-black">
      <div>
        {item.date ? (
          <p className="mb-2">{formatDateVerbose(item.date)}</p>
        ) : null}
        <h2 className="font-bold text-2xl mb-2">
          <Link href={url}>{item.titre}</Link>
        </h2>
        <p className="mb-4">
          {shorten(item.contenu, 200)}{' '}
          <Link href={url} className="ml-2 underline">
            Lire la suite&nbsp;→
          </Link>
        </p>
      </div>
      <TagsList {...{ item }} />
    </li>
  )
}
