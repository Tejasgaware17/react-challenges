import { useState, useEffect } from 'react'
import type { User } from '.'

export default function useSearch(query: string) {
  const [results, setResults] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsLoading(false)
      return
    }

    const controller = new AbortController()

    const timer = setTimeout((): void => {
      const fetchData = async (): Promise<void> => {
        setIsLoading(true)
        setError(null)

        try {
          const response = await fetch(`https://dummyjson.com/users/search?q=${query}`, {
            signal: controller.signal,
          })

          if (!response.ok) throw new Error('Network response was not ok')

          const data = await response.json()
          setResults(data.users || [])
        } catch (err: unknown) {
          if (err instanceof Error && err.name !== 'AbortError') {
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, 400)

    return (): void => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return { results, isLoading, error }
}
