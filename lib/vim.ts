import {
  Compartment,
  EditorSelection,
  Extension,
  Facet,
  combineConfig,
} from "@codemirror/state"
import { EditorView, RectangleMarker, layer } from "@codemirror/view"

export type VimMode =
  | "Normal"
  | "Insert"
  | "Visual"
  | "Visual Block"
  | "Visual Line"

export type VimConfig = {
  enabled?: boolean
  mode?: VimMode
}

export const vimCompartment = new Compartment()

export const vimConfig = Facet.define<VimConfig, Required<VimConfig>>({
  combine(configs) {
    return combineConfig(
      configs,
      {
        enabled: true,
        mode: "Normal",
      },
      {
        enabled: (a, b) => a || b,
        mode: (value) => (value ? value : "Normal"),
      }
    )
  },
})

export function vim(config: VimConfig = {}): Extension {
  return [vimCompartment.of(vimConfig.of(config))]
}
