export const NUTRIENT_KEYS = [
  'vitaminA',
  'vitaminD',
  'vitaminE',
  'vitaminK',
  'vitaminC',
  'thiamin',
  'riboflavin',
  'niacin',
  'vitaminB6',
  'folate',
  'vitaminB12',
  'calcium',
  'phosphorus',
  'magnesium',
  'iron',
  'zinc',
  'iodine',
  'selenium',
  'potassium',
] as const

export type NutrientKey = (typeof NUTRIENT_KEYS)[number]

export type Nutrients = Partial<Record<NutrientKey, number>>

export type NutrientMeta = {
  key: NutrientKey
  label: string
  unit: string
}

export const NUTRIENT_META: NutrientMeta[] = [
  { key: 'vitaminA', label: 'Vitamin A', unit: 'µg' },
  { key: 'vitaminD', label: 'Vitamin D', unit: 'µg' },
  { key: 'vitaminE', label: 'Vitamin E', unit: 'mg' },
  { key: 'vitaminK', label: 'Vitamin K', unit: 'µg' },
  { key: 'vitaminC', label: 'Vitamin C', unit: 'mg' },
  { key: 'thiamin', label: 'Thiamin (B1)', unit: 'mg' },
  { key: 'riboflavin', label: 'Riboflavin (B2)', unit: 'mg' },
  { key: 'niacin', label: 'Niacin (B3)', unit: 'mg' },
  { key: 'vitaminB6', label: 'Vitamin B6', unit: 'mg' },
  { key: 'folate', label: 'Folate', unit: 'µg' },
  { key: 'vitaminB12', label: 'Vitamin B12', unit: 'µg' },
  { key: 'calcium', label: 'Calcium', unit: 'mg' },
  { key: 'phosphorus', label: 'Phosphorus', unit: 'mg' },
  { key: 'magnesium', label: 'Magnesium', unit: 'mg' },
  { key: 'iron', label: 'Iron', unit: 'mg' },
  { key: 'zinc', label: 'Zinc', unit: 'mg' },
  { key: 'iodine', label: 'Iodine', unit: 'µg' },
  { key: 'selenium', label: 'Selenium', unit: 'µg' },
  { key: 'potassium', label: 'Potassium', unit: 'mg' },
]

export type StandardId = 'nordic' | 'us'

export type Standard = {
  id: StandardId
  label: string
  targets: Record<NutrientKey, number>
}

/** NNR 2023 recommended intake for an adult. Where men/women differ, the higher value is used. */
export const NORDIC_RDA: Record<NutrientKey, number> = {
  vitaminA: 800,
  vitaminD: 10,
  vitaminE: 10,
  vitaminK: 70,
  vitaminC: 110,
  thiamin: 1.3,
  riboflavin: 1.6,
  niacin: 17,
  vitaminB6: 1.6,
  folate: 300,
  vitaminB12: 4,
  calcium: 950,
  phosphorus: 600,
  magnesium: 350,
  iron: 15,
  zinc: 11,
  iodine: 150,
  selenium: 90,
  potassium: 3500,
}

/** FDA Daily Values used on US Nutrition Facts labels. */
export const US_RDA: Record<NutrientKey, number> = {
  vitaminA: 900,
  vitaminD: 20,
  vitaminE: 15,
  vitaminK: 120,
  vitaminC: 90,
  thiamin: 1.2,
  riboflavin: 1.3,
  niacin: 16,
  vitaminB6: 1.7,
  folate: 400,
  vitaminB12: 2.4,
  calcium: 1300,
  phosphorus: 1250,
  magnesium: 420,
  iron: 18,
  zinc: 11,
  iodine: 150,
  selenium: 55,
  potassium: 4700,
}

export const STANDARDS: Standard[] = [
  { id: 'nordic', label: 'Nordic', targets: NORDIC_RDA },
  { id: 'us', label: 'US', targets: US_RDA },
]
