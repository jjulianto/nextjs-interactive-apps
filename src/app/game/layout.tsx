import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tile Game',
  description: 'Play the tile matching game - catch the yellow tiles!'
}

export default function GameLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
