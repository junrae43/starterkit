"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">문제가 발생했습니다</h2>
          <p className="text-muted-foreground">
            예기치 못한 오류가 발생했습니다. 다시 시도해 주세요.
          </p>
        </div>
        <Button onClick={reset}>다시 시도</Button>
      </div>
    </Container>
  )
}
