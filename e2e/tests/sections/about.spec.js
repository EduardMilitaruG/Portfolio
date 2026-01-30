import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { SKILLS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('About Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'about')
  })

  test('section has id="about"', async ({ readyPage: page }) => {
    const section = page.locator(sel.ABOUT_SECTION)
    await expect(section).toBeAttached()
  })

  test('displays "Sobre mi" heading', async ({ readyPage: page }) => {
    const heading = page.locator(sel.ABOUT_HEADING)
    await expect(heading).toContainText('Sobre mi')
  })

  test('bio mentions Full Stack developer experience', async ({ readyPage: page }) => {
    const about = page.locator(sel.ABOUT_SECTION)
    await expect(about).toContainText('Full Stack')
  })

  test('bio mentions clean code', async ({ readyPage: page }) => {
    const about = page.locator(sel.ABOUT_SECTION)
    await expect(about).toContainText('código limpio')
  })

  test('bio mentions IoT knowledge', async ({ readyPage: page }) => {
    const about = page.locator(sel.ABOUT_SECTION)
    await expect(about).toContainText('IoT')
  })

  test('displays 6 skill items', async ({ readyPage: page }) => {
    const skills = page.locator(sel.ABOUT_SKILLS)
    await expect(skills).toHaveCount(6)
  })

  test('skill items have correct text', async ({ readyPage: page }) => {
    for (const skill of SKILLS) {
      const skillItem = page.locator(sel.ABOUT_SKILLS).filter({ hasText: skill })
      await expect(skillItem).toBeAttached()
    }
  })
})
