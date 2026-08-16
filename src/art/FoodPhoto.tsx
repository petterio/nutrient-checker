import { useEffect, useState } from 'react'
import { imagesFor } from '../data/images'
import type { Locale } from '../data/i18n'
import { FoodArt } from './FoodArt'

export function FoodPhoto({ id, locale }: { id: string; locale: Locale }) {
  const sources = imagesFor(id, locale)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [id, locale])

  const current = sources[index]

  if (!current) {
    return <FoodArt id={id} />
  }

  return (
    <img
      className="food-photo"
      src={current.src}
      alt=""
      loading="lazy"
      onError={() => setIndex((value) => value + 1)}
    />
  )
}
