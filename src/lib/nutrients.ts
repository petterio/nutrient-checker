import { foods, referenceGrams, type Food } from '../data/foods'
import { NUTRIENT_KEYS, NUTRIENT_META, type NutrientKey } from '../data/rda'

export type SelectedAmount = {
  food: Food
  grams: number
}

export type NutrientResult = {
  key: NutrientKey
  label: string
  unit: string
  amount: number
  target: number
  percent: number
  covered: boolean
}

export function emptyNutrients(): Record<NutrientKey, number> {
  return Object.fromEntries(NUTRIENT_KEYS.map((key) => [key, 0])) as Record<NutrientKey, number>
}

export function sumFoods(selected: SelectedAmount[]): Record<NutrientKey, number> {
  const totals = emptyNutrients()

  for (const { food, grams } of selected) {
    const base = referenceGrams(food)
    const scale = base === 0 ? 0 : grams / base

    for (const key of NUTRIENT_KEYS) {
      totals[key] += (food.nutrients[key] ?? 0) * scale
    }
  }

  return totals
}

export function formatAmount(value: number): number {
  if (value >= 100) return Math.round(value)
  if (value >= 10) return Math.round(value * 10) / 10
  return Math.round(value * 100) / 100
}

export function compareToRda(
  totals: Record<NutrientKey, number>,
  targets: Record<NutrientKey, number>,
): NutrientResult[] {
  return NUTRIENT_META.map((meta) => {
    const amount = totals[meta.key]
    const target = targets[meta.key]
    const percent = target === 0 ? 0 : (amount / target) * 100

    return {
      key: meta.key,
      label: meta.label,
      unit: meta.unit,
      amount: formatAmount(amount),
      target,
      percent: Math.round(percent),
      covered: amount >= target,
    }
  })
}

export function formatResult(result: NutrientResult, label = result.label): string {
  return `${label} — ${result.amount} ${result.unit} (${result.percent}%)`
}

export function nutrientsFromSelection(
  selected: SelectedAmount[],
  targets: Record<NutrientKey, number>,
) {
  return compareToRda(sumFoods(selected), targets)
}

export function foodsForNutrient(key: NutrientKey, limit = 6): Food[] {
  return foods
    .filter((food) => food.category !== 'Health food' && food.category !== 'Water')
    .filter((food) => (food.nutrients[key] ?? 0) > 0)
    .sort((a, b) => (b.nutrients[key] ?? 0) - (a.nutrients[key] ?? 0))
    .slice(0, limit)
}
