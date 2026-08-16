import { useEffect, useMemo, useState } from 'react'
import { NorwayFlag, UsFlag } from './art/Flags'
import { FoodPhoto } from './art/FoodPhoto'
import { foods, foodsByCategory, referenceGrams, type Food } from './data/foods'
import { categoryName, foodName, NUTRIENT_LABELS, UI, type Locale } from './data/i18n'
import { STANDARDS, type NutrientKey, type StandardId } from './data/rda'
import { foodsForNutrient, formatResult, nutrientsFromSelection } from './lib/nutrients'

const foodById = new Map(foods.map((food) => [food.id, food]))

function FoodCard({
  food,
  name,
  locale,
  grams,
  editing,
  onToggle,
  onGrams,
}: {
  food: Food
  name: string
  locale: Locale
  grams: number | undefined
  editing: boolean
  onToggle: () => void
  onGrams: (grams: number) => void
}) {
  const selected = grams !== undefined

  return (
    <div className={selected ? 'food selected' : 'food'}>
      <button type="button" className="food-hit" onClick={onToggle} aria-pressed={selected}>
        <FoodPhoto id={food.id} locale={locale} />
        <span>{name}</span>
      </button>
      {editing && selected && (
        <label className="grams">
          <input
            type="number"
            min={1}
            step={1}
            value={grams}
            onChange={(event) => {
              const next = Number(event.target.value)
              if (Number.isFinite(next) && next > 0) onGrams(next)
            }}
          />
          g
        </label>
      )}
    </div>
  )
}

function NutrientRow({
  item,
  label,
  open,
  sources,
  onToggle,
}: {
  item: ReturnType<typeof nutrientsFromSelection>[number]
  label: string
  open: boolean
  sources: { id: string; name: string }[]
  onToggle: () => void
}) {
  return (
    <li className={open ? 'nutrient open' : 'nutrient'}>
      <button type="button" onClick={onToggle} aria-expanded={open}>
        {formatResult(item, label)}
      </button>
      {open && (
        <ul className="sources">
          {sources.map((source) => (
            <li key={source.id}>{source.name}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

function Results({
  covered,
  missing,
  locale,
  openKey,
  onToggle,
}: {
  covered: ReturnType<typeof nutrientsFromSelection>
  missing: ReturnType<typeof nutrientsFromSelection>
  locale: Locale
  openKey: NutrientKey | null
  onToggle: (key: NutrientKey) => void
}) {
  const labels = NUTRIENT_LABELS[locale]

  function row(item: ReturnType<typeof nutrientsFromSelection>[number]) {
    const sources =
      openKey === item.key
        ? foodsForNutrient(item.key).map((food) => ({
            id: food.id,
            name: foodName(food.id, food.name, locale),
          }))
        : []

    return (
      <NutrientRow
        key={item.key}
        item={item}
        label={labels[item.key]}
        open={openKey === item.key}
        sources={sources}
        onToggle={() => onToggle(item.key)}
      />
    )
  }

  return (
    <aside className="results">
      <ul className="got">{covered.map(row)}</ul>
      <ul className="missing">{missing.map(row)}</ul>
    </aside>
  )
}

function App() {
  const [amounts, setAmounts] = useState<Record<string, number>>({})
  const [editingId, setEditingId] = useState<string | null>(null)
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [openKey, setOpenKey] = useState<NutrientKey | null>(null)
  const [standardId, setStandardId] = useState<StandardId>('nordic')
  const standard = STANDARDS.find((item) => item.id === standardId) ?? STANDARDS[0]
  const locale: Locale = standardId === 'nordic' ? 'nb' : 'en'
  const copy = UI[locale]

  const selected = useMemo(
    () =>
      Object.entries(amounts).flatMap(([id, grams]) => {
        const food = foodById.get(id)
        return food ? [{ food, grams }] : []
      }),
    [amounts],
  )

  const results = useMemo(
    () => (selected.length === 0 ? [] : nutrientsFromSelection(selected, standard.targets)),
    [selected, standard],
  )

  const covered = results.filter((item) => item.covered)
  const missing = results.filter((item) => !item.covered)

  useEffect(() => {
    function hideGrams(event: PointerEvent) {
      const target = event.target
      if (target instanceof Element && target.closest('.food')) return
      setEditingId(null)
    }

    document.addEventListener('pointerdown', hideGrams)
    return () => document.removeEventListener('pointerdown', hideGrams)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy.title
  }, [locale, copy.title])

  function toggle(food: Food) {
    const alreadySelected = amounts[food.id] !== undefined
    const isEditing = editingId === food.id

    if (alreadySelected && isEditing) {
      setAmounts((current) => {
        const rest = { ...current }
        delete rest[food.id]
        return rest
      })
      setEditingId(null)
      return
    }

    if (!alreadySelected) {
      setAmounts((current) => ({ ...current, [food.id]: referenceGrams(food) }))
    }
    setEditingId(food.id)
  }

  function setGrams(id: string, grams: number) {
    setAmounts((current) => ({ ...current, [id]: grams }))
  }

  function toggleCategory(category: string) {
    setCollapsed((current) => ({ ...current, [category]: !current[category] }))
  }

  return (
    <div className="page">
      <div className="content">
        <header>
          <h1>{copy.title}</h1>
          <div className="standards" role="group" aria-label={copy.recommendations}>
            {STANDARDS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === standardId ? 'standard active' : 'standard'}
                onClick={() => setStandardId(item.id)}
                data-tip={item.id === 'nordic' ? copy.nordic : copy.us}
                aria-label={item.id === 'nordic' ? copy.nordic : copy.us}
              >
                {item.id === 'nordic' ? <NorwayFlag /> : <UsFlag />}
              </button>
            ))}
          </div>
        </header>

        <main>
          {foodsByCategory.map(({ category, items }) => {
            const hidden = collapsed[category]
            const label = categoryName(category, locale)

            return (
              <section key={category}>
                <button
                  type="button"
                  className={hidden ? 'category collapsed' : 'category'}
                  onClick={() => toggleCategory(category)}
                  aria-expanded={!hidden}
                  aria-label={`${hidden ? copy.expand : copy.collapse} ${label}`}
                >
                  <h2>{label}</h2>
                  <span className="chevron" aria-hidden="true" />
                </button>
                {!hidden && (
                  <div className="grid">
                    {items.map((food) => (
                      <FoodCard
                        key={food.id}
                        food={food}
                        name={foodName(food.id, food.name, locale)}
                        locale={locale}
                        grams={amounts[food.id]}
                        editing={editingId === food.id}
                        onToggle={() => toggle(food)}
                        onGrams={(grams) => setGrams(food.id, grams)}
                      />
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </main>
      </div>

      <Results
        covered={covered}
        missing={missing}
        locale={locale}
        openKey={openKey}
        onToggle={(key) => setOpenKey((current) => (current === key ? null : key))}
      />
    </div>
  )
}

export default App
