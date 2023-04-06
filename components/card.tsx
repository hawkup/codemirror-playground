"use client"

import * as React from "react"

interface CardProps {
  children?: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col space-y-4 rounded-md border border-slate-900 p-2 dark:border-slate-700">
      {children}
    </div>
  )
}

interface CardTitleProps {
  children?: React.ReactNode
}

Card.Title = function CardTitle({ children }: CardTitleProps) {
  return (
    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
      {children}
    </div>
  )
}

interface CardContentProps {
  children?: React.ReactNode
}

Card.Content = function CardContent({ children }: CardContentProps) {
  return <>{children}</>
}
