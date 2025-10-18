interface GameOverModalProps {
  score: number
  onRestart: () => void
}

export function GameOverModal({ score, onRestart }: GameOverModalProps) {
  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg p-6 max-w-xs w-full text-center'>
        <h2 className='text-xl font-bold text-gray-900 mb-5'>
          Your points: {score}
        </h2>

        <button
          onClick={onRestart}
          className='bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded font-bold text-base transition-colors cursor-pointer'
        >
          Retry
        </button>
      </div>
    </div>
  )
}
