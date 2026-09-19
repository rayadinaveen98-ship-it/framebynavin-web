import { standingPart1 } from "./navin-standing-1";
import { standingPart2 } from "./navin-standing-2";
import { standingPart3 } from "./navin-standing-3";
import { standingPart4 } from "./navin-standing-4";

function repairStandingPart1(part: string) {
  const hasKnownSingleCharacterGap = part.length === 3999 && part.slice(578, 585) === "XlV9umn";
  return hasKnownSingleCharacterGap ? `${part.slice(0, 582)}l${part.slice(582)}` : part;
}

const repairedPart1 = repairStandingPart1(standingPart1);

export const standingNavinDataUri = `data:image/webp;base64,${repairedPart1}${standingPart2}${standingPart3}${standingPart4}`;
