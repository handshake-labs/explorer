import React from "react";

declare global {
  namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      block?: string;
      elem?: string;
      mods?: any;
      mix?: any;
    }
  }
}
