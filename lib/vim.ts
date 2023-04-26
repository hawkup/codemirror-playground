import {
  Compartment,
  EditorSelection,
  Extension,
  Facet,
  combineConfig,
} from "@codemirror/state"
import { EditorView, RectangleMarker, layer } from "@codemirror/view"

type VimConfig = {
  enabled?: boolean
  mode?: "Normal" | "Insert" | "Visual" | "Visual Block" | "Visual Line"
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
