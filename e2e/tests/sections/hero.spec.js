import { test, expect } from '../../fixtures/base.fixture.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Hero Section', () => {
  test('displays name in h1', async ({ readyPage: page }) => {
    const h1 = page.locator(sel.HERO_H1)
    await expect(h1).toContainText('Gheorghe Eduard Militaru')
  })

  test('displays "Full Stack Developer" subtitle', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    await expect(section).toContainText('Full Stack Developer')
  })

  test('displays description paragraph about web applications', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    await expect(section).toContainText('aplicaciones web')
  })

  test('"Ver proyectos" CTA links to #projects', async ({ readyPage: page }) => {
    const cta = page.locator(sel.HERO_CTA_PRIMARY)
    await expect(cta).toContainText('Ver proyectos')
    await expect(cta).toHaveAttribute('href', '#projects')
  })

  test('"Contactar" CTA links to #contact', async ({ readyPage: page }) => {
    const cta = page.locator(sel.HERO_CTA_SECONDARY)
    await expect(cta).toContainText('Contactar')
    await expect(cta).toHaveAttribute('href', '#contact')
  })

  test('hero section takes at least full viewport height', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    const sectionHeight = await section.evaluate(el => el.getBoundingClientRect().height)
    const viewportHeight = await page.evaluate(() => window.innerHeight)
    expect(sectionHeight).toBeGreaterThanOrEqual(viewportHeight * 0.9)
  })

  test('CTA buttons are visible', async ({ readyPage: page }) => {
    await expect(page.locator(sel.HERO_CTA_PRIMARY)).toBeVisible()
    await expect(page.locator(sel.HERO_CTA_SECONDARY)).toBeVisible()
  })

  test('h1 is the first heading on the page', async ({ readyPage: page }) => {
    const firstHeading = page.locator('h1, h2, h3, h4, h5, h6').first()
    const tagName = await firstHeading.evaluate(el => el.tagName)
    expect(tagName).toBe('H1')
  })
})
