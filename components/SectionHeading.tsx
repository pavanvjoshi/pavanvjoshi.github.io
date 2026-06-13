import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Consistent centered section title. Headline only — section position on the
 * page does the categorising, so no mono "// label" eyebrow is needed.
 */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mb-16 text-center">
      <h2 className="font-heading text-4xl font-bold lg:text-5xl">{children}</h2>
    </Reveal>
  );
}
