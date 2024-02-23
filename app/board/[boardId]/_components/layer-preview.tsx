"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import { Rectangle } from "./rectangle";

interface LayerPreviewProps {
  id: string;
  selectionColor?: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
}

export const LayerPreview = memo(
  ({
    id,
    selectionColor,
    onLayerPointerDown: onLayerPointDown,
  }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) return;

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
