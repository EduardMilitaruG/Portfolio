import { test, expect } from '../../fixtures/base.fixture.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Footer Section', () => {
  test('footer is present on the page', async ({ readyPage: page }) => {
    const footer = page.locator(sel.FOOTER)
    await expect(footer).toBeAttached()
  })

  test('footer displays current year', async ({ readyPage: page }) => {
    const footer = page.locator(sel.FOOTER)
    const currentYear = new Date().getFullYear().toString()
    await expect(footer).toContainText(currentYear)
  })

  test('footer displays tagline', async ({ readyPage: page }) => {
    const footer = page.locator(sel.FOOTER)
    await expect(footer).toContainText('Diseñado y desarrollado con cuidado')
  })
})
