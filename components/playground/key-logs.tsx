import * as React from "react"
import { EDITOR_NAME, useEditor } from "@/context/editor-context"

export function KeyLogs() {
  const { view } = useEditor(EDITOR_NAME)
  const [keys, setKeys] = React.useState<{ id: number; key: string }[]>([])
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    const log = (ev) => {
      setKeys((prev) => {
        const id = prev.length

        return [...prev, { id, key: ev.code }]
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
        {keys.length ? (
          keys.map((key) => (
            <kbd
              key={key.id}
              className="rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {key.key}
            </kbd>
          ))
        ) : (
          <span className="text-muted-foreground text-xs">no key down</span>
        )}
      </div>
    </div>
  )
}
