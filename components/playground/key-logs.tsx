import * as React from "react"
import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"

export function KeyLogs() {
  const { view } = useOutputEditor(EDITOR_NAME)
  const [keys, setKeys] = React.useState<{ id: number; key: string }[]>([])
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    const log = (ev) => {
      setKeys((prev) => {
        const id = prev.length

        return [...prev, { id, key: ev.key }]
      })
    }

    view?.dom.addEventListener("keydown", log)

    return () => {
      view?.dom.removeEventListener("keydown", log)
    }
  }, [view])

  React.useEffect(() => {
    if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth
  }, [keys])

  return (
    <div>
      <p className="text-xs">Key Down</p>
      <div
        ref={ref}
        className="flex h-10 w-[500px] items-center space-x-1 overflow-x-auto"
      >
        {keys.map((key) => (
          <kbd
            key={key.id}
            className="rounded bg-secondary px-2 text-sm font-medium text-secondary-foreground"
          >
            {key.key}
          </kbd>
        ))}
      </div>
    </div>
  )
}
