export type ArtKind =
  | 'drumstick'
  | 'roastBird'
  | 'steak'
  | 'mince'
  | 'chop'
  | 'bacon'
  | 'ham'
  | 'sausage'
  | 'liver'
  | 'meatballs'
  | 'ribs'
  | 'salami'
  | 'fish'
  | 'shrimp'
  | 'crab'
  | 'lobster'
  | 'shell'
  | 'oyster'
  | 'squid'
  | 'roe'
  | 'eel'
  | 'egg'
  | 'friedEgg'
  | 'scramble'
  | 'omelette'
  | 'glass'
  | 'yogurt'
  | 'cheese'
  | 'butter'
  | 'iceCream'
  | 'broccoli'
  | 'leaf'
  | 'cabbage'
  | 'cauli'
  | 'carrot'
  | 'tomato'
  | 'cucumber'
  | 'pepper'
  | 'onion'
  | 'garlic'
  | 'potato'
  | 'corn'
  | 'peas'
  | 'beans'
  | 'asparagus'
  | 'eggplant'
  | 'beet'
  | 'mushroom'
  | 'pumpkin'
  | 'avocado'
  | 'chili'
  | 'olive'
  | 'seaweed'
  | 'apple'
  | 'banana'
  | 'citrus'
  | 'pear'
  | 'peach'
  | 'berry'
  | 'grapes'
  | 'kiwi'
  | 'mango'
  | 'pineapple'
  | 'melon'
  | 'coconut'
  | 'bread'
  | 'baguette'
  | 'crisp'
  | 'grain'
  | 'rice'
  | 'pasta'
  | 'bowl'
  | 'bagel'
  | 'croissant'
  | 'pretzel'
  | 'lentils'
  | 'tofu'
  | 'hummus'
  | 'peanut'
  | 'nut'
  | 'seeds'
  | 'oil'
  | 'honey'
  | 'chocolate'
  | 'jar'
  | 'coffee'
  | 'tea'
  | 'water'
  | 'bottle'
  | 'capsule'
  | 'tablet'
  | 'dropper'
  | 'powder'

export type ArtSpec = {
  kind: ArtKind
  a: string
  b?: string
  c?: string
}

export const FOOD_ART: Record<string, ArtSpec> = {
  chicken: { kind: 'drumstick', a: '#e8b07a', b: '#c47a3a' },
  'roast-chicken': { kind: 'roastBird', a: '#d4924a', b: '#8b4a1f' },
  'chicken-thigh': { kind: 'chop', a: '#d08a5a', b: '#8d3d24' },
  turkey: { kind: 'roastBird', a: '#c4a06a', b: '#6b3e1f' },
  'beef-steak': { kind: 'steak', a: '#8b2e2e', b: '#f2c6b0' },
  'ground-beef': { kind: 'mince', a: '#7a2f2f', b: '#c45a4a' },
  'roast-beef': { kind: 'steak', a: '#6b2424', b: '#e8b8a0' },
  'pork-chop': { kind: 'chop', a: '#e8b4b0', b: '#c47a72' },
  bacon: { kind: 'bacon', a: '#e07a5a', b: '#f3d5b8' },
  ham: { kind: 'ham', a: '#e0898a', b: '#f4c4c0' },
  lamb: { kind: 'chop', a: '#c97a6a', b: '#8a3d32' },
  sausage: { kind: 'sausage', a: '#b85c3a', b: '#7a3218' },
  duck: { kind: 'roastBird', a: '#6b3a22', b: '#d4a06a' },
  liver: { kind: 'liver', a: '#7a2a28', b: '#4a1414' },
  meatballs: { kind: 'meatballs', a: '#8a3d2a', b: '#5a2418' },
  'pulled-pork': { kind: 'mince', a: '#c46a48', b: '#8a3a22' },
  veal: { kind: 'steak', a: '#d4a090', b: '#f0d0c4' },
  salami: { kind: 'salami', a: '#c45a5a', b: '#f2d2b0' },
  prosciutto: { kind: 'ham', a: '#e8a0a0', b: '#f8d8d4' },
  ribs: { kind: 'ribs', a: '#8a3a28', b: '#e8c8a8' },
  salmon: { kind: 'fish', a: '#ee7a5a', b: '#f4b49a' },
  trout: { kind: 'fish', a: '#d48a6a', b: '#8a4a32', c: '#f0c8b0' },
  cod: { kind: 'fish', a: '#e8e0d0', b: '#c8c0b0' },
  haddock: { kind: 'fish', a: '#ddd6c8', b: '#9aa4b0' },
  tuna: { kind: 'fish', a: '#c45a4a', b: '#6a2a22' },
  mackerel: { kind: 'fish', a: '#6a8aaa', b: '#2a3a4a', c: '#d0d8e0' },
  herring: { kind: 'fish', a: '#b0c0c8', b: '#5a6a72' },
  sardines: { kind: 'fish', a: '#8aa0a8', b: '#3a4a50' },
  halibut: { kind: 'fish', a: '#d8c8a8', b: '#8a7a5a' },
  shrimp: { kind: 'shrimp', a: '#f08a6a', b: '#d45a3a' },
  prawns: { kind: 'shrimp', a: '#e06a4a', b: '#b83a28' },
  crab: { kind: 'crab', a: '#d43a2a', b: '#f08060' },
  lobster: { kind: 'lobster', a: '#d02420', b: '#f06040' },
  mussels: { kind: 'shell', a: '#2a3a48', b: '#c4a070' },
  oysters: { kind: 'oyster', a: '#8a9a8a', b: '#e8e0c8' },
  scallops: { kind: 'shell', a: '#e8d0a0', b: '#f4e8c8' },
  squid: { kind: 'squid', a: '#d8c8c0', b: '#a09088' },
  anchovies: { kind: 'fish', a: '#4a4a50', b: '#8a8a90' },
  'fish-roe': { kind: 'roe', a: '#e05030', b: '#f09060' },
  pollock: { kind: 'fish', a: '#c8d0d4', b: '#6a7880' },
  plaice: { kind: 'fish', a: '#e0c878', b: '#c4a040' },
  clams: { kind: 'shell', a: '#c8b090', b: '#f0e0c8' },
  eel: { kind: 'eel', a: '#3a4a38', b: '#6a7a58' },
  'boiled-egg': { kind: 'egg', a: '#f4e8c8', b: '#f0c040' },
  'fried-egg': { kind: 'friedEgg', a: '#f8f0d8', b: '#f0b020' },
  'scrambled-eggs': { kind: 'scramble', a: '#f4d060', b: '#e8b030' },
  omelette: { kind: 'omelette', a: '#f0c040', b: '#d49020' },
  milk: { kind: 'glass', a: '#f4f0e8', b: '#d8d0c4' },
  'skim-milk': { kind: 'glass', a: '#f8f6f2', b: '#c8c4bc' },
  yogurt: { kind: 'yogurt', a: '#f4f0e4', b: '#e8c8a0' },
  'greek-yogurt': { kind: 'yogurt', a: '#f8f4ec', b: '#d4c4a8' },
  cheese: { kind: 'cheese', a: '#f0c040', b: '#e0a020' },
  cheddar: { kind: 'cheese', a: '#e89020', b: '#c47010' },
  'cottage-cheese': { kind: 'yogurt', a: '#f6f2ea', b: '#e8e0d0' },
  butter: { kind: 'butter', a: '#f4d24a', b: '#e8b820' },
  cream: { kind: 'yogurt', a: '#fff8ee', b: '#f0e0c8' },
  'sour-cream': { kind: 'yogurt', a: '#f4efe6', b: '#d8c8b0' },
  'ice-cream': { kind: 'iceCream', a: '#f4d0c0', b: '#c47850' },
  mozzarella: { kind: 'cheese', a: '#f4f0e4', b: '#e0d8c8' },
  feta: { kind: 'cheese', a: '#f2eee4', b: '#c8c0b0' },
  parmesan: { kind: 'cheese', a: '#e8d080', b: '#c8a040' },
  'blue-cheese': { kind: 'cheese', a: '#e8e0c8', b: '#6a8aaa' },
  kefir: { kind: 'glass', a: '#f0e8d8', b: '#c8b090' },
  brunost: { kind: 'cheese', a: '#b86a20', b: '#8a4010' },
  skyr: { kind: 'yogurt', a: '#f8f4ec', b: '#d0c4b0' },
  broccoli: { kind: 'broccoli', a: '#3a8a3a', b: '#2a5a22' },
  spinach: { kind: 'leaf', a: '#2f7a32', b: '#1e4a1e' },
  kale: { kind: 'leaf', a: '#245a28', b: '#163818' },
  cabbage: { kind: 'cabbage', a: '#7ab05a', b: '#4a7a38' },
  cauliflower: { kind: 'cauli', a: '#f0ead8', b: '#7aaa58' },
  carrot: { kind: 'carrot', a: '#e86a20', b: '#3a8a28' },
  tomato: { kind: 'tomato', a: '#d02820', b: '#3a8a28' },
  cucumber: { kind: 'cucumber', a: '#5aaa40', b: '#3a7a28' },
  'bell-pepper': { kind: 'pepper', a: '#3aaa3a', b: '#2a7a22' },
  'red-pepper': { kind: 'pepper', a: '#d02828', b: '#8a1818' },
  onion: { kind: 'onion', a: '#d4a060', b: '#c48840' },
  garlic: { kind: 'garlic', a: '#f0e8d4', b: '#d0c4a8' },
  potato: { kind: 'potato', a: '#d4b06a', b: '#a88840' },
  'sweet-potato': { kind: 'potato', a: '#e09040', b: '#c06020' },
  corn: { kind: 'corn', a: '#f0c020', b: '#4a8a28' },
  peas: { kind: 'peas', a: '#6aaa38', b: '#3a7a20' },
  'green-beans': { kind: 'beans', a: '#4a9a30', b: '#2a6a1c' },
  asparagus: { kind: 'asparagus', a: '#5a9a3a', b: '#3a6a22' },
  zucchini: { kind: 'cucumber', a: '#6aaa48', b: '#3a6a28' },
  eggplant: { kind: 'eggplant', a: '#5a2a6a', b: '#3a1848' },
  beetroot: { kind: 'beet', a: '#8a2048', b: '#3a7a28' },
  celery: { kind: 'asparagus', a: '#8aba50', b: '#5a8a30' },
  lettuce: { kind: 'leaf', a: '#7aba48', b: '#4a8a28' },
  arugula: { kind: 'leaf', a: '#3a7a28', b: '#245018' },
  'brussels-sprouts': { kind: 'cabbage', a: '#5a9a38', b: '#3a6a22' },
  mushroom: { kind: 'mushroom', a: '#d4b090', b: '#8a6a48' },
  pumpkin: { kind: 'pumpkin', a: '#e86a18', b: '#3a7a22' },
  leek: { kind: 'asparagus', a: '#b8d080', b: '#6aaa48' },
  radish: { kind: 'beet', a: '#e04050', b: '#3a8a28' },
  parsnip: { kind: 'carrot', a: '#f0e0b8', b: '#3a8a28' },
  fennel: { kind: 'leaf', a: '#c8d890', b: '#7aaa50' },
  avocado: { kind: 'avocado', a: '#5a8a28', b: '#c8d040' },
  chili: { kind: 'chili', a: '#d02018', b: '#3a8a22' },
  'bok-choy': { kind: 'leaf', a: '#7aba50', b: '#f0ead0' },
  artichoke: { kind: 'cabbage', a: '#6a9a48', b: '#4a7a30' },
  olives: { kind: 'olive', a: '#4a5a28', b: '#8a9a40' },
  seaweed: { kind: 'seaweed', a: '#1a4a38', b: '#3a7a58' },
  turnip: { kind: 'beet', a: '#e8d8e8', b: '#3a8a28' },
  'swiss-chard': { kind: 'leaf', a: '#2a7a30', b: '#c03040' },
  apple: { kind: 'apple', a: '#d02828', b: '#3a8a22' },
  banana: { kind: 'banana', a: '#f0d020', b: '#c8a010' },
  orange: { kind: 'citrus', a: '#f07818', b: '#f8c040' },
  lemon: { kind: 'citrus', a: '#f0d020', b: '#f8e870' },
  lime: { kind: 'citrus', a: '#8aba28', b: '#c8d850' },
  grapefruit: { kind: 'citrus', a: '#f08070', b: '#f8c0b0' },
  pear: { kind: 'pear', a: '#c8d050', b: '#8aaa28' },
  peach: { kind: 'peach', a: '#f0a060', b: '#e07040' },
  plum: { kind: 'apple', a: '#6a2a6a', b: '#3a8a22' },
  cherry: { kind: 'berry', a: '#c01820', b: '#3a6a20' },
  grapes: { kind: 'grapes', a: '#6a3a8a', b: '#3a8a22' },
  strawberry: { kind: 'berry', a: '#e02830', b: '#3a8a22' },
  blueberry: { kind: 'berry', a: '#3a4a9a', b: '#3a8a22' },
  raspberry: { kind: 'berry', a: '#d04060', b: '#3a8a22' },
  blackberry: { kind: 'berry', a: '#2a2038', b: '#3a8a22' },
  cloudberry: { kind: 'berry', a: '#f09020', b: '#3a8a22' },
  lingonberry: { kind: 'berry', a: '#c02028', b: '#3a8a22' },
  cranberry: { kind: 'berry', a: '#a01828', b: '#3a8a22' },
  kiwi: { kind: 'kiwi', a: '#7aaa30', b: '#3a5a18' },
  mango: { kind: 'mango', a: '#f0a020', b: '#e05020' },
  pineapple: { kind: 'pineapple', a: '#f0c020', b: '#3a8a22' },
  watermelon: { kind: 'melon', a: '#d02840', b: '#3a8a28' },
  melon: { kind: 'melon', a: '#f0d060', b: '#3a8a28' },
  papaya: { kind: 'mango', a: '#f07030', b: '#f0b050' },
  pomegranate: { kind: 'apple', a: '#a01828', b: '#3a8a22' },
  fig: { kind: 'peach', a: '#6a3a58', b: '#c07090' },
  date: { kind: 'nut', a: '#6a3a18', b: '#4a2410' },
  raisins: { kind: 'seeds', a: '#4a2a18', b: '#6a3a22' },
  coconut: { kind: 'coconut', a: '#6a4a28', b: '#f4efe6' },
  apricot: { kind: 'peach', a: '#f09040', b: '#e07020' },
  nectarine: { kind: 'peach', a: '#e86030', b: '#f0a060' },
  blackcurrant: { kind: 'berry', a: '#2a1840', b: '#3a8a22' },
  gooseberry: { kind: 'berry', a: '#8aaa38', b: '#3a8a22' },
  cantaloupe: { kind: 'melon', a: '#f0a040', b: '#3a8a28' },
  'white-bread': { kind: 'bread', a: '#e8c888', b: '#c8a058' },
  'wheat-bread': { kind: 'bread', a: '#c8a060', b: '#8a6a30' },
  'rye-bread': { kind: 'bread', a: '#8a5a28', b: '#5a3818' },
  crispbread: { kind: 'crisp', a: '#c8a060', b: '#8a6a30' },
  oats: { kind: 'grain', a: '#d4b06a', b: '#a88840' },
  rice: { kind: 'rice', a: '#f4f0e4', b: '#d8d0c0' },
  'brown-rice': { kind: 'rice', a: '#c8a878', b: '#8a6a40' },
  pasta: { kind: 'pasta', a: '#e8c050', b: '#c8a030' },
  'wheat-pasta': { kind: 'pasta', a: '#c8a040', b: '#8a7020' },
  quinoa: { kind: 'bowl', a: '#d8c090', b: '#a89058' },
  barley: { kind: 'grain', a: '#c8a858', b: '#8a7030' },
  couscous: { kind: 'bowl', a: '#e8d8a0', b: '#c8b060' },
  cornflakes: { kind: 'bowl', a: '#f0c040', b: '#d4a020' },
  muesli: { kind: 'bowl', a: '#c8a060', b: '#8a5a28' },
  tortilla: { kind: 'crisp', a: '#e8c888', b: '#c8a058' },
  bagel: { kind: 'bagel', a: '#d4a060', b: '#8a6a30' },
  croissant: { kind: 'croissant', a: '#e0a040', b: '#c88020' },
  pretzel: { kind: 'pretzel', a: '#c88840', b: '#8a5820' },
  buckwheat: { kind: 'grain', a: '#6a4a28', b: '#4a3018' },
  'oatmeal-bowl': { kind: 'bowl', a: '#d4b070', b: '#a88840' },
  lentils: { kind: 'lentils', a: '#b85a28', b: '#8a3a14' },
  chickpeas: { kind: 'lentils', a: '#e0b060', b: '#c89030' },
  'black-beans': { kind: 'lentils', a: '#2a2030', b: '#4a3848' },
  'kidney-beans': { kind: 'lentils', a: '#8a2020', b: '#5a1010' },
  'white-beans': { kind: 'lentils', a: '#f0e8d4', b: '#d0c4a8' },
  soybeans: { kind: 'peas', a: '#c8c060', b: '#8a8828' },
  tofu: { kind: 'tofu', a: '#f0eadc', b: '#d4ccb8' },
  tempeh: { kind: 'tofu', a: '#b89458', b: '#8a6a30' },
  edamame: { kind: 'peas', a: '#7aaa38', b: '#4a7a20' },
  hummus: { kind: 'hummus', a: '#e0b060', b: '#c89038' },
  peanuts: { kind: 'peanut', a: '#d4a060', b: '#8a6a30' },
  'split-peas': { kind: 'peas', a: '#c8c040', b: '#8a8a20' },
  almonds: { kind: 'nut', a: '#d4b080', b: '#8a6a38' },
  walnuts: { kind: 'nut', a: '#8a5a30', b: '#5a3818' },
  hazelnuts: { kind: 'nut', a: '#b87838', b: '#8a5018' },
  cashews: { kind: 'nut', a: '#e8c888', b: '#c8a058' },
  pistachios: { kind: 'nut', a: '#8aaa40', b: '#c8d070' },
  'brazil-nuts': { kind: 'nut', a: '#8a6030', b: '#5a3818' },
  pecans: { kind: 'nut', a: '#8a4a20', b: '#5a2a10' },
  'sunflower-seeds': { kind: 'seeds', a: '#c89020', b: '#8a6010' },
  'pumpkin-seeds': { kind: 'seeds', a: '#6a8a28', b: '#3a5a14' },
  'chia-seeds': { kind: 'seeds', a: '#3a3038', b: '#5a4858' },
  'flax-seeds': { kind: 'seeds', a: '#6a3a20', b: '#4a2410' },
  'sesame-seeds': { kind: 'seeds', a: '#e8d8a8', b: '#c8b070' },
  'pine-nuts': { kind: 'seeds', a: '#e8d090', b: '#c8a850' },
  macadamia: { kind: 'nut', a: '#f0e4c8', b: '#d4c090' },
  'hemp-seeds': { kind: 'seeds', a: '#6a7a38', b: '#3a4a1c' },
  'poppy-seeds': { kind: 'seeds', a: '#1a1a20', b: '#3a3a48' },
  'mustard-seeds': { kind: 'seeds', a: '#d4a020', b: '#a87810' },
  'caraway-seeds': { kind: 'seeds', a: '#8a6a38', b: '#5a4018' },
  'fennel-seeds': { kind: 'seeds', a: '#c8b060', b: '#8a7a30' },
  'cumin-seeds': { kind: 'seeds', a: '#8a5a20', b: '#5a3810' },
  'psyllium-husk': { kind: 'seeds', a: '#e8d8b0', b: '#c8b080' },
  'nigella-seeds': { kind: 'seeds', a: '#201820', b: '#403848' },
  'watermelon-seeds': { kind: 'seeds', a: '#2a2018', b: '#4a3830' },
  'fenugreek-seeds': { kind: 'seeds', a: '#c89030', b: '#8a6018' },
  'coriander-seeds': { kind: 'seeds', a: '#b8a060', b: '#7a6830' },
  'anise-seeds': { kind: 'seeds', a: '#c8b070', b: '#8a7838' },
  'olive-oil': { kind: 'oil', a: '#c8c040', b: '#8a8820' },
  'rapeseed-oil': { kind: 'oil', a: '#f0d020', b: '#c8a010' },
  honey: { kind: 'honey', a: '#e09018', b: '#c07010' },
  'dark-chocolate': { kind: 'chocolate', a: '#4a2a18', b: '#2a1810' },
  'milk-chocolate': { kind: 'chocolate', a: '#8a4a22', b: '#5a2e14' },
  'peanut-butter': { kind: 'jar', a: '#c88830', b: '#8a5818' },
  jam: { kind: 'jar', a: '#c02838', b: '#8a1020' },
  mayonnaise: { kind: 'jar', a: '#f4e8c0', b: '#d8c888' },
  ketchup: { kind: 'jar', a: '#c01818', b: '#8a1010' },
  mustard: { kind: 'jar', a: '#e0b010', b: '#b88808' },
  'fortified-plant-milk': { kind: 'glass', a: '#e8d8b0', b: '#c8b080' },
  'orange-juice': { kind: 'glass', a: '#f07818', b: '#d05808' },
  coffee: { kind: 'coffee', a: '#4a2a18', b: '#2a1810' },
  tea: { kind: 'tea', a: '#6a8a3a', b: '#c8d090' },
  'norwegian-tap-water': { kind: 'water', a: '#7ab8d8', b: '#d8eef8' },
  farris: { kind: 'bottle', a: '#1a5a9a', b: '#d0e4f4' },
  'cod-liver-oil': { kind: 'dropper', a: '#e0a020', b: '#f4d080' },
  'omega-3': { kind: 'capsule', a: '#e07020', b: '#f4c070' },
  'vitamin-d': { kind: 'capsule', a: '#f0c020', b: '#f8e080' },
  multivitamin: { kind: 'tablet', a: '#e04060', b: '#f08090' },
  'magnesium-tabs': { kind: 'tablet', a: '#c8c8c8', b: '#e8e8e8' },
  'iron-tabs': { kind: 'tablet', a: '#b03030', b: '#d06060' },
  'zinc-tabs': { kind: 'tablet', a: '#8a9aaa', b: '#c0c8d0' },
  'vitamin-c-tabs': { kind: 'tablet', a: '#f07020', b: '#f0b060' },
  'b12-tabs': { kind: 'tablet', a: '#7a40a0', b: '#b080d0' },
  'calcium-tabs': { kind: 'tablet', a: '#f0e8d0', b: '#d8d0b8' },
  probiotics: { kind: 'capsule', a: '#40a070', b: '#80d0a0' },
  'protein-powder': { kind: 'powder', a: '#e8d0a0', b: '#c8a868' },
  spirulina: { kind: 'powder', a: '#1a6a48', b: '#3a9a68' },
  chlorella: { kind: 'powder', a: '#1a5a30', b: '#3a8a50' },
  wheatgrass: { kind: 'powder', a: '#4a8a28', b: '#7aba48' },
  'brewers-yeast': { kind: 'powder', a: '#c89030', b: '#8a6018' },
  collagen: { kind: 'powder', a: '#f0e0d0', b: '#d4c0b0' },
  'kelp-tabs': { kind: 'tablet', a: '#2a5a48', b: '#4a8a70' },
  'green-powder': { kind: 'powder', a: '#3a7a30', b: '#6aaa50' },
}
