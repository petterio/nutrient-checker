import { FOOD_ART, type ArtKind, type ArtSpec } from '../data/art'

function Art({ kind, a, b = a, c = b }: ArtSpec) {
  switch (kind as ArtKind) {
    case 'drumstick':
      return (
        <>
          <ellipse cx="38" cy="40" rx="22" ry="18" fill={a} />
          <rect x="52" y="34" width="22" height="10" rx="4" fill={b} />
          <circle cx="76" cy="36" r="4" fill={b} />
          <circle cx="76" cy="44" r="4" fill={b} />
        </>
      )
    case 'roastBird':
      return (
        <>
          <ellipse cx="48" cy="50" rx="26" ry="18" fill={a} />
          <ellipse cx="62" cy="30" rx="12" ry="10" fill={a} />
          <polygon points="74,28 84,30 74,34" fill={b} />
          <ellipse cx="28" cy="48" rx="8" ry="12" fill={b} />
          <circle cx="66" cy="28" r="2" fill="#222" />
        </>
      )
    case 'steak':
      return (
        <>
          <ellipse cx="50" cy="50" rx="30" ry="20" fill={a} />
          <ellipse cx="50" cy="50" rx="16" ry="10" fill={b} />
        </>
      )
    case 'mince':
      return (
        <>
          <circle cx="34" cy="40" r="12" fill={a} />
          <circle cx="52" cy="36" r="11" fill={b} />
          <circle cx="66" cy="48" r="12" fill={a} />
          <circle cx="42" cy="56" r="10" fill={b} />
          <circle cx="58" cy="60" r="9" fill={a} />
        </>
      )
    case 'chop':
      return (
        <>
          <ellipse cx="42" cy="50" rx="22" ry="16" fill={a} />
          <rect x="58" y="44" width="24" height="10" rx="4" fill={b} />
        </>
      )
    case 'bacon':
      return (
        <>
          <path d="M18 36c16-8 24 8 40 0s22 10 26 4" stroke={a} strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M18 50c16-8 24 8 40 0s22 10 26 4" stroke={b} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M18 62c16-8 24 8 40 0s22 10 26 4" stroke={a} strokeWidth="9" fill="none" strokeLinecap="round" />
        </>
      )
    case 'ham':
      return (
        <>
          <path d="M22 62c0-24 16-40 40-40 10 0 18 8 18 20 0 22-20 36-40 36-10 0-18-6-18-16z" fill={a} />
          <ellipse cx="48" cy="48" rx="12" ry="10" fill={b} />
        </>
      )
    case 'sausage':
      return (
        <>
          <rect x="16" y="40" width="68" height="18" rx="9" fill={a} />
          <circle cx="22" cy="49" r="3" fill={b} />
          <circle cx="50" cy="49" r="3" fill={b} />
          <circle cx="78" cy="49" r="3" fill={b} />
        </>
      )
    case 'liver':
      return <path d="M20 40c0-12 12-20 24-16 8-10 24-8 28 4 10 2 16 14 10 24-8 14-36 18-50 8-8-6-12-12-12-20z" fill={a} />
    case 'meatballs':
      return (
        <>
          <circle cx="34" cy="42" r="14" fill={a} />
          <circle cx="62" cy="40" r="13" fill={b} />
          <circle cx="48" cy="62" r="12" fill={a} />
        </>
      )
    case 'ribs':
      return (
        <>
          <path d="M22 30c20 8 36 8 56 0" stroke={b} strokeWidth="7" fill="none" />
          <path d="M22 46c20 8 36 8 56 0" stroke={a} strokeWidth="7" fill="none" />
          <path d="M22 62c20 8 36 8 56 0" stroke={b} strokeWidth="7" fill="none" />
        </>
      )
    case 'salami':
      return (
        <>
          <circle cx="50" cy="50" r="26" fill={a} />
          <circle cx="40" cy="42" r="3" fill={b} />
          <circle cx="58" cy="40" r="3" fill={b} />
          <circle cx="46" cy="58" r="3" fill={b} />
          <circle cx="62" cy="56" r="3" fill={b} />
        </>
      )
    case 'fish':
      return (
        <>
          <ellipse cx="44" cy="50" rx="26" ry="14" fill={a} />
          <polygon points="70,50 88,36 88,64" fill={b} />
          <circle cx="30" cy="46" r="2.5" fill="#222" />
          {c ? <path d="M38 42c8 4 16 4 24 0M38 58c8-4 16-4 24 0" stroke={c} strokeWidth="2" fill="none" /> : null}
        </>
      )
    case 'shrimp':
      return (
        <>
          <path d="M28 58c0-18 14-28 28-22 8 4 8 16-2 22" fill={a} />
          <circle cx="30" cy="40" r="7" fill={b} />
          <path d="M24 34c-6-8-4-14 2-16M32 32c0-10 4-14 10-14" stroke={b} strokeWidth="3" fill="none" />
        </>
      )
    case 'crab':
      return (
        <>
          <ellipse cx="50" cy="52" rx="18" ry="12" fill={a} />
          <path d="M32 48c-12-8-16-4-14 6M68 48c12-8 16-4 14 6" stroke={b} strokeWidth="5" fill="none" />
          <circle cx="44" cy="48" r="2" fill="#222" />
          <circle cx="56" cy="48" r="2" fill="#222" />
        </>
      )
    case 'lobster':
      return (
        <>
          <ellipse cx="50" cy="58" rx="10" ry="18" fill={a} />
          <path d="M40 44c-16-10-20-2-12 10M60 44c16-10 20-2 12 10" fill={b} />
          <circle cx="46" cy="40" r="5" fill={a} />
          <circle cx="54" cy="40" r="5" fill={a} />
        </>
      )
    case 'shell':
      return (
        <>
          <path d="M22 62c4-28 20-40 28-40s24 12 28 40H22z" fill={a} />
          <path d="M50 24v38M34 36l16 26M66 36L50 62" stroke={b} strokeWidth="2" />
        </>
      )
    case 'oyster':
      return (
        <>
          <ellipse cx="50" cy="56" rx="28" ry="14" fill={a} />
          <ellipse cx="50" cy="50" rx="16" ry="8" fill={b} />
        </>
      )
    case 'squid':
      return (
        <>
          <ellipse cx="50" cy="36" rx="14" ry="16" fill={a} />
          <path d="M40 48v28M46 50v30M54 50v30M60 48v28" stroke={b} strokeWidth="4" strokeLinecap="round" />
        </>
      )
    case 'roe':
      return (
        <>
          <circle cx="36" cy="40" r="8" fill={a} />
          <circle cx="52" cy="36" r="7" fill={b} />
          <circle cx="64" cy="48" r="8" fill={a} />
          <circle cx="42" cy="56" r="7" fill={b} />
          <circle cx="58" cy="62" r="6" fill={a} />
        </>
      )
    case 'eel':
      return <path d="M12 60c16-24 28-8 40-20 12-12 20 4 36 0" stroke={a} strokeWidth="10" fill="none" strokeLinecap="round" />
    case 'egg':
      return (
        <>
          <ellipse cx="50" cy="50" rx="18" ry="24" fill={a} />
          <ellipse cx="50" cy="54" rx="8" ry="10" fill={b} />
        </>
      )
    case 'friedEgg':
      return (
        <>
          <ellipse cx="50" cy="50" rx="28" ry="22" fill={a} />
          <circle cx="50" cy="50" r="10" fill={b} />
        </>
      )
    case 'scramble':
      return (
        <>
          <path d="M22 44c8-12 20-8 28 0 8-10 22-8 28 4 2 16-10 28-28 26S18 62 22 44z" fill={a} />
          <circle cx="40" cy="48" r="4" fill={b} />
          <circle cx="58" cy="52" r="4" fill={b} />
        </>
      )
    case 'omelette':
      return <ellipse cx="50" cy="54" rx="32" ry="16" fill={a} />
    case 'glass':
      return (
        <>
          <path d="M30 22h40l-6 56H36L30 22z" fill={b} opacity="0.35" />
          <path d="M34 40h32l-4 34H38L34 40z" fill={a} />
        </>
      )
    case 'yogurt':
      return (
        <>
          <path d="M28 38h44l-4 36H32L28 38z" fill={a} />
          <ellipse cx="50" cy="38" rx="22" ry="7" fill={b} />
        </>
      )
    case 'cheese':
      return (
        <>
          <polygon points="20,66 50,24 80,66" fill={a} />
          <circle cx="44" cy="52" r="4" fill={b} />
          <circle cx="58" cy="58" r="3" fill={b} />
        </>
      )
    case 'butter':
      return <rect x="22" y="38" width="56" height="24" rx="4" fill={a} />
    case 'iceCream':
      return (
        <>
          <circle cx="50" cy="38" r="18" fill={a} />
          <polygon points="36,48 64,48 50,82" fill={b} />
        </>
      )
    case 'broccoli':
      return (
        <>
          <rect x="44" y="48" width="12" height="28" fill={b} />
          <circle cx="38" cy="40" r="12" fill={a} />
          <circle cx="50" cy="30" r="13" fill={a} />
          <circle cx="64" cy="40" r="12" fill={a} />
        </>
      )
    case 'leaf':
      return <path d="M50 80c-28-8-34-40-8-62 28 10 36 40 8 62z" fill={a} />
    case 'cabbage':
      return (
        <>
          <circle cx="50" cy="50" r="24" fill={a} />
          <circle cx="50" cy="50" r="14" fill={b} />
        </>
      )
    case 'cauli':
      return (
        <>
          <rect x="44" y="58" width="12" height="16" fill={b} />
          <circle cx="38" cy="46" r="10" fill={a} />
          <circle cx="50" cy="36" r="11" fill={a} />
          <circle cx="62" cy="46" r="10" fill={a} />
          <circle cx="50" cy="50" r="10" fill={a} />
        </>
      )
    case 'carrot':
      return (
        <>
          <polygon points="50,22 64,82 36,82" fill={a} />
          <path d="M44 22c0-10 6-16 6-16s6 6 6 16" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'tomato':
      return (
        <>
          <circle cx="50" cy="54" r="22" fill={a} />
          <path d="M50 32c-6-10 6-10 0 0M42 34c-8-6 0-12 4-4M58 34c8-6 0-12-4-4" fill={b} />
        </>
      )
    case 'cucumber':
      return <rect x="18" y="40" width="64" height="20" rx="10" fill={a} />
    case 'pepper':
      return (
        <>
          <path d="M38 36c-10 8-12 36 12 40 24-4 22-32 12-40-4-8-16-8-24 0z" fill={a} />
          <rect x="46" y="20" width="8" height="16" fill={b} />
        </>
      )
    case 'onion':
      return (
        <>
          <ellipse cx="50" cy="56" rx="20" ry="22" fill={a} />
          <path d="M50 20v16" stroke={b} strokeWidth="4" />
        </>
      )
    case 'garlic':
      return (
        <>
          <ellipse cx="50" cy="56" rx="18" ry="20" fill={a} />
          <path d="M40 40c4-16 16-16 20 0" fill={b} />
        </>
      )
    case 'potato':
      return <ellipse cx="50" cy="50" rx="26" ry="18" fill={a} />
    case 'corn':
      return (
        <>
          <ellipse cx="50" cy="52" rx="14" ry="28" fill={a} />
          <path d="M36 30c-8-16 8-22 14-10M64 30c8-16-8-22-14-10" fill={b} />
          <g fill={b} opacity="0.35">
            <circle cx="44" cy="44" r="2" />
            <circle cx="54" cy="44" r="2" />
            <circle cx="44" cy="54" r="2" />
            <circle cx="54" cy="54" r="2" />
            <circle cx="44" cy="64" r="2" />
            <circle cx="54" cy="64" r="2" />
          </g>
        </>
      )
    case 'peas':
      return (
        <>
          <path d="M24 58c8-24 44-24 52 0-16 16-36 16-52 0z" fill={b} />
          <circle cx="38" cy="52" r="6" fill={a} />
          <circle cx="50" cy="50" r="6" fill={a} />
          <circle cx="62" cy="52" r="6" fill={a} />
        </>
      )
    case 'beans':
      return (
        <>
          <path d="M30 28c-4 20 4 40 8 48" stroke={a} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M50 24c-2 22 2 42 6 50" stroke={a} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M70 28c2 20-2 40-6 48" stroke={a} strokeWidth="8" fill="none" strokeLinecap="round" />
        </>
      )
    case 'asparagus':
      return (
        <>
          <rect x="46" y="28" width="8" height="52" rx="4" fill={a} />
          <path d="M50 20c-8 8 0 12 0 12s8-4 0-12z" fill={b} />
        </>
      )
    case 'eggplant':
      return (
        <>
          <ellipse cx="50" cy="56" rx="16" ry="24" fill={a} />
          <rect x="46" y="22" width="8" height="14" fill={b} />
        </>
      )
    case 'beet':
      return (
        <>
          <circle cx="50" cy="58" r="18" fill={a} />
          <path d="M44 40c-4-16 4-22 6-10M56 40c4-16-4-22-6-10" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'mushroom':
      return (
        <>
          <path d="M24 48c4-22 48-22 52 0H24z" fill={a} />
          <rect x="42" y="48" width="16" height="24" fill={b} />
        </>
      )
    case 'pumpkin':
      return (
        <>
          <ellipse cx="50" cy="56" rx="28" ry="20" fill={a} />
          <rect x="46" y="24" width="8" height="14" fill={b} />
        </>
      )
    case 'avocado':
      return (
        <>
          <ellipse cx="50" cy="50" rx="20" ry="26" fill={a} />
          <circle cx="50" cy="54" r="8" fill={b} />
        </>
      )
    case 'chili':
      return (
        <>
          <path d="M58 24c-20 8-32 40-16 52 20 8 36-20 28-40-8-4-12-8-12-12z" fill={a} />
          <path d="M58 20c4-8 12-6 10 2" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'olive':
      return (
        <>
          <ellipse cx="38" cy="50" rx="10" ry="14" fill={a} />
          <ellipse cx="62" cy="46" rx="10" ry="14" fill={b} />
        </>
      )
    case 'seaweed':
      return (
        <>
          <path d="M30 80c4-24-8-36 4-56" stroke={a} strokeWidth="7" fill="none" />
          <path d="M50 80c-6-28 10-32 2-58" stroke={b} strokeWidth="7" fill="none" />
          <path d="M70 80c2-22-10-34 2-54" stroke={a} strokeWidth="7" fill="none" />
        </>
      )
    case 'apple':
      return (
        <>
          <circle cx="50" cy="54" r="22" fill={a} />
          <path d="M50 28c0-10 8-12 8-12" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'banana':
      return <path d="M24 36c8 28 28 40 52 28 4-16-8-36-28-40-12 0-22 4-24 12z" fill={a} />
    case 'citrus':
      return (
        <>
          <circle cx="50" cy="50" r="24" fill={a} />
          <circle cx="50" cy="50" r="10" fill={b} />
        </>
      )
    case 'pear':
      return <path d="M50 22c-8 8-6 20 0 26-14 6-18 24-4 32h8c14-8 10-26-4-32 6-6 8-18 0-26z" fill={a} />
    case 'peach':
      return (
        <>
          <circle cx="44" cy="54" r="20" fill={a} />
          <circle cx="58" cy="50" r="18" fill={b} />
        </>
      )
    case 'berry':
      return (
        <>
          <circle cx="40" cy="52" r="12" fill={a} />
          <circle cx="58" cy="48" r="11" fill={a} />
          <circle cx="50" cy="64" r="10" fill={a} />
          <path d="M50 28c-6 8 6 8 0 0" fill={b} />
        </>
      )
    case 'grapes':
      return (
        <>
          <circle cx="44" cy="40" r="8" fill={a} />
          <circle cx="58" cy="40" r="8" fill={a} />
          <circle cx="38" cy="54" r="8" fill={a} />
          <circle cx="52" cy="54" r="8" fill={a} />
          <circle cx="66" cy="54" r="8" fill={a} />
          <circle cx="46" cy="68" r="8" fill={a} />
          <circle cx="60" cy="68" r="8" fill={a} />
          <path d="M50 20v14" stroke={b} strokeWidth="3" />
        </>
      )
    case 'kiwi':
      return (
        <>
          <circle cx="50" cy="50" r="24" fill={a} />
          <circle cx="50" cy="50" r="12" fill={b} />
        </>
      )
    case 'mango':
      return <ellipse cx="50" cy="52" rx="18" ry="26" fill={a} />
    case 'pineapple':
      return (
        <>
          <ellipse cx="50" cy="58" rx="16" ry="22" fill={a} />
          <path d="M40 36l10-18 10 18" fill={b} />
        </>
      )
    case 'melon':
      return (
        <>
          <path d="M22 70c0-32 16-50 28-50s28 18 28 50H22z" fill={b} />
          <path d="M28 70c4-24 12-36 22-36s18 12 22 36H28z" fill={a} />
        </>
      )
    case 'coconut':
      return (
        <>
          <circle cx="50" cy="50" r="24" fill={a} />
          <circle cx="50" cy="50" r="14" fill={b} />
        </>
      )
    case 'bread':
      return <path d="M20 62c0-20 12-32 30-32s30 12 30 32H20z" fill={a} />
    case 'baguette':
      return <rect x="14" y="42" width="72" height="16" rx="8" fill={a} transform="rotate(-18 50 50)" />
    case 'crisp':
      return <ellipse cx="50" cy="50" rx="28" ry="10" fill={a} />
    case 'grain':
      return (
        <>
          <ellipse cx="36" cy="50" rx="6" ry="16" fill={a} />
          <ellipse cx="50" cy="46" rx="6" ry="18" fill={b} />
          <ellipse cx="64" cy="50" rx="6" ry="16" fill={a} />
        </>
      )
    case 'rice':
      return (
        <>
          <ellipse cx="50" cy="62" rx="28" ry="10" fill={b} />
          <ellipse cx="50" cy="50" rx="22" ry="14" fill={a} />
        </>
      )
    case 'pasta':
      return (
        <>
          <path d="M20 40c16 8 16-8 32 0s16-8 32 0" stroke={a} strokeWidth="6" fill="none" />
          <path d="M20 54c16 8 16-8 32 0s16-8 32 0" stroke={b} strokeWidth="6" fill="none" />
          <path d="M20 68c16 8 16-8 32 0s16-8 32 0" stroke={a} strokeWidth="6" fill="none" />
        </>
      )
    case 'bowl':
      return (
        <>
          <ellipse cx="50" cy="40" rx="24" ry="10" fill={a} />
          <path d="M26 40c4 24 44 24 48 0" fill={b} />
        </>
      )
    case 'bagel':
      return (
        <>
          <circle cx="50" cy="50" r="24" fill={a} />
          <circle cx="50" cy="50" r="8" fill="#241f1a" />
        </>
      )
    case 'croissant':
      return <path d="M20 62c8-28 28-36 52-28-8 20-24 28-40 24-8 0-12 2-12 4z" fill={a} />
    case 'pretzel':
      return <path d="M30 62c-8-20 8-36 24-24 16-12 32 4 24 24-8 12-20 4-24-8-4 12-16 20-24 8z" stroke={a} strokeWidth="8" fill="none" />
    case 'lentils':
      return (
        <>
          <ellipse cx="36" cy="44" rx="10" ry="7" fill={a} />
          <ellipse cx="54" cy="40" rx="10" ry="7" fill={b} />
          <ellipse cx="66" cy="52" rx="10" ry="7" fill={a} />
          <ellipse cx="44" cy="58" rx="10" ry="7" fill={b} />
        </>
      )
    case 'tofu':
      return <rect x="26" y="30" width="48" height="40" rx="4" fill={a} />
    case 'hummus':
      return (
        <>
          <ellipse cx="50" cy="58" rx="28" ry="16" fill={b} />
          <ellipse cx="50" cy="50" rx="18" ry="10" fill={a} />
        </>
      )
    case 'peanut':
      return (
        <>
          <ellipse cx="40" cy="50" rx="10" ry="16" fill={a} />
          <ellipse cx="58" cy="50" rx="10" ry="16" fill={a} />
        </>
      )
    case 'nut':
      return <ellipse cx="50" cy="50" rx="16" ry="22" fill={a} />
    case 'seeds':
      return (
        <>
          <ellipse cx="34" cy="42" rx="5" ry="9" fill={a} />
          <ellipse cx="48" cy="36" rx="5" ry="9" fill={b} />
          <ellipse cx="62" cy="42" rx="5" ry="9" fill={a} />
          <ellipse cx="40" cy="58" rx="5" ry="9" fill={b} />
          <ellipse cx="56" cy="60" rx="5" ry="9" fill={a} />
          <ellipse cx="70" cy="56" rx="5" ry="9" fill={b} />
        </>
      )
    case 'oil':
      return (
        <>
          <path d="M40 28h20l6 48H34L40 28z" fill={a} />
          <rect x="44" y="18" width="12" height="12" fill={b} />
        </>
      )
    case 'honey':
      return (
        <>
          <path d="M32 40h36l-4 36H36L32 40z" fill={a} />
          <ellipse cx="50" cy="40" rx="18" ry="6" fill={b} />
        </>
      )
    case 'chocolate':
      return (
        <>
          <rect x="24" y="32" width="52" height="36" rx="3" fill={a} />
          <path d="M24 50h52M50 32v36" stroke={b} strokeWidth="3" />
        </>
      )
    case 'jar':
      return (
        <>
          <rect x="32" y="34" width="36" height="42" rx="4" fill={a} />
          <rect x="38" y="24" width="24" height="12" rx="2" fill={b} />
        </>
      )
    case 'coffee':
      return (
        <>
          <path d="M28 38h40l-4 34H32L28 38z" fill={a} />
          <path d="M68 44c10 0 12 14 0 16" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'tea':
      return (
        <>
          <path d="M28 40h38l-4 30H32L28 40z" fill={a} />
          <path d="M66 46c10 2 10 16 0 16" stroke={b} strokeWidth="4" fill="none" />
        </>
      )
    case 'water':
      return (
        <>
          <path d="M32 22h36l-6 56H38L32 22z" fill={b} opacity="0.45" />
          <path d="M36 44h28l-4 30H40L36 44z" fill={a} />
        </>
      )
    case 'bottle':
      return (
        <>
          <rect x="40" y="16" width="20" height="14" rx="3" fill={b} />
          <path d="M34 30h32l4 52H30L34 30z" fill={a} />
        </>
      )
    case 'capsule':
      return (
        <>
          <rect x="22" y="40" width="28" height="20" rx="10" fill={a} />
          <rect x="50" y="40" width="28" height="20" rx="10" fill={b} />
        </>
      )
    case 'tablet':
      return <rect x="30" y="34" width="40" height="32" rx="16" fill={a} />
    case 'dropper':
      return (
        <>
          <rect x="44" y="16" width="12" height="28" rx="3" fill={b} />
          <path d="M38 44h24l-6 36H44L38 44z" fill={a} />
        </>
      )
    case 'powder':
      return (
        <>
          <path d="M30 34h40l6 42H24L30 34z" fill={b} />
          <ellipse cx="50" cy="34" rx="20" ry="7" fill={a} />
        </>
      )
    default:
      return <circle cx="50" cy="50" r="20" fill={a} />
  }
}

export function FoodArt({ id }: { id: string }) {
  const spec = FOOD_ART[id] ?? { kind: 'bowl' as const, a: '#8a8278' }

  return (
    <svg viewBox="0 0 100 100" className="food-art" aria-hidden="true">
      <rect width="100" height="100" fill="#241f1a" />
      <Art {...spec} />
    </svg>
  )
}
