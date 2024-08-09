import { Button, extendVariants } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    size: {
      xs: "min-w-8 min-h-4",
    },
  },
});
