import { cn } from '@/lib/utils'

interface GameBoardProps {
  gridSize: number
  playerPos: { x: number; y: number }
  targetPos: { x: number; y: number }
  blockedTiles: Array<{ x: number; y: number }>
}

export function GameBoard({
  gridSize,
  playerPos,
  targetPos,
  blockedTiles
}: GameBoardProps) {
  const isBlocked = (x: number, y: number) => {
    return blockedTiles.some((tile) => tile.x === x && tile.y === y)
  }

  return (
    <div className='bg-[#8B1538] p-6 pb-3'>
      <div className='grid grid-cols-6 gap-0'>
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize
          const y = Math.floor(index / gridSize)

          const isPlayer = playerPos.x === x && playerPos.y === y
          const isTarget = targetPos.x === x && targetPos.y === y
          const blocked = isBlocked(x, y)

          return (
            <div
              key={index}
              className={cn(
                'aspect-square transition-all duration-100',
                blocked && 'bg-[#8B1538]',
                !blocked && 'border-[2px] border-black',
                !blocked &&
                  isPlayer &&
                  'bg-gradient-to-br from-blue-400 to-blue-600',
                !blocked &&
                  isTarget &&
                  'bg-gradient-to-br from-yellow-300 to-yellow-500',
                !blocked && !isPlayer && !isTarget && 'bg-white'
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
