interface ScoreDisplayProps {
  score: number
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return <div className='text-white text-base font-bold'>Total: {score}</div>
}
