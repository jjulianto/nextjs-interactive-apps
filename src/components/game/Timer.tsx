interface TimerProps {
  timeLeft: number
}

export function Timer({ timeLeft }: TimerProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className='text-white text-base font-bold'>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  )
}
