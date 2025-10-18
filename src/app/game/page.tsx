'use client'

import { useState, useEffect, useCallback } from 'react'
import { GameBoard } from '@/components/game/GameBoard'
import { Timer } from '@/components/game/Timer'
import { ScoreDisplay } from '@/components/game/ScoreDisplay'
import { GameOverModal } from '@/components/game/GameOverModal'

const GRID_SIZE = 6
const GAME_DURATION = 60

const BLOCKED_TILES = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 1, y: 2 },
  { x: 4, y: 3 },
  { x: 1, y: 4 },
  { x: 4, y: 4 }
]

const isBlocked = (x: number, y: number) => {
  return BLOCKED_TILES.some((tile) => tile.x === x && tile.y === y)
}

const isValidPosition = (x: number, y: number) => {
  return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && !isBlocked(x, y)
}

export default function GamePage() {
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 5 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 3 })
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)

  const generateRandomPos = useCallback(() => {
    let newX, newY
    let attempts = 0
    do {
      newX = Math.floor(Math.random() * GRID_SIZE)
      newY = Math.floor(Math.random() * GRID_SIZE)
      attempts++
    } while (
      (newX === playerPos.x && newY === playerPos.y) ||
      isBlocked(newX, newY) ||
      attempts > 100
    )

    return { x: newX, y: newY }
  }, [playerPos.x, playerPos.y])

  useEffect(() => {
    if (
      playerPos.x === targetPos.x &&
      playerPos.y === targetPos.y &&
      isGameStarted
    ) {
      setScore((prev) => prev + 100)
      setTargetPos(generateRandomPos())
    }
  }, [playerPos, targetPos, generateRandomPos, isGameStarted])

  useEffect(() => {
    if (!isGameStarted || isGameOver) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isGameStarted, isGameOver])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGameStarted || isGameOver) return

      if (
        !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)
      ) {
        return
      }

      e.preventDefault()

      setPlayerPos((prev) => {
        let newX = prev.x
        let newY = prev.y

        switch (e.key) {
          case 'ArrowUp':
            newY = prev.y - 1
            break
          case 'ArrowDown':
            newY = prev.y + 1
            break
          case 'ArrowLeft':
            newX = prev.x - 1
            break
          case 'ArrowRight':
            newX = prev.x + 1
            break
          default:
            return prev
        }

        if (isValidPosition(newX, newY)) {
          return { x: newX, y: newY }
        }

        return prev
      })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isGameStarted, isGameOver])

  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (!isGameStarted || isGameOver) return

    setPlayerPos((prev) => {
      let newX = prev.x
      let newY = prev.y

      switch (direction) {
        case 'up':
          newY = prev.y - 1
          break
        case 'down':
          newY = prev.y + 1
          break
        case 'left':
          newX = prev.x - 1
          break
        case 'right':
          newX = prev.x + 1
          break
      }

      if (isValidPosition(newX, newY)) {
        return { x: newX, y: newY }
      }

      return prev
    })
  }

  const startGame = () => {
    setIsGameStarted(true)
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setIsGameOver(false)
    setPlayerPos({ x: 0, y: 5 })
    setTargetPos(generateRandomPos())
  }

  const resetGame = () => {
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setIsGameOver(false)
    setPlayerPos({ x: 0, y: 5 })
    setTargetPos(generateRandomPos())
    setIsGameStarted(true)
  }

  useEffect(() => {
    startGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='min-h-screen bg-[#8B1538] flex flex-col'>
      <div className='w-full max-w-[430px] mx-auto flex flex-col flex-1'>
        <div className='flex-shrink-0'>
          <GameBoard
            gridSize={GRID_SIZE}
            playerPos={playerPos}
            targetPos={targetPos}
            blockedTiles={BLOCKED_TILES}
          />
          <div className='flex items-center justify-between px-6 pb-3 text-white text-xl font-bold'>
            <Timer timeLeft={timeLeft} />
            <ScoreDisplay score={score} />
          </div>
        </div>
        <div className='flex-1' />
        <div className='flex-shrink-0 pb-12 pt-4 flex flex-col items-center gap-4'>
          <button
            onClick={() => move('up')}
            className='bg-[#808080] hover:bg-red-600 focus:bg-red-600 active:bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all border-b-[4px] border-black/20 shadow-[0_6px_8px_rgba(0,0,0,0.25)] active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0 cursor-pointer'
            disabled={!isGameStarted || isGameOver}
            aria-label='Move up'
            tabIndex={0}
          >
            <svg
              className='w-4 h-4 pointer-events-none'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M5 15l7-7 7 7'
              />
            </svg>
          </button>
          <div className='flex gap-24 items-center'>
            <button
              onClick={() => move('left')}
              className='bg-[#808080] hover:bg-red-600 focus:bg-red-600 active:bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all border-b-[4px] border-black/20 shadow-[0_6px_8px_rgba(0,0,0,0.25)] active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0 cursor-pointer'
              disabled={!isGameStarted || isGameOver}
              aria-label='Move left'
              tabIndex={0}
            >
              <svg
                className='w-4 h-4 pointer-events-none'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2.5}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={() => move('right')}
              className='bg-[#808080] hover:bg-red-600 focus:bg-red-600 active:bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all border-b-[4px] border-black/20 shadow-[0_6px_8px_rgba(0,0,0,0.25)] active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0 cursor-pointer'
              disabled={!isGameStarted || isGameOver}
              aria-label='Move right'
              tabIndex={0}
            >
              <svg
                className='w-4 h-4 pointer-events-none'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2.5}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => move('down')}
              className='bg-[#808080] hover:bg-red-600 focus:bg-red-600 active:bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all border-b-[4px] border-black/20 shadow-[0_6px_8px_rgba(0,0,0,0.25)] active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0 cursor-pointer'
              disabled={!isGameStarted || isGameOver}
              aria-label='Move down'
              tabIndex={0}
            >
              <svg
                className='w-4 h-4 pointer-events-none'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2.5}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isGameOver && <GameOverModal score={score} onRestart={resetGame} />}
    </div>
  )
}
