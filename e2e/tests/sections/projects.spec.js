import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { PROJECTS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Projects Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'projects')
  })

  test('section has id="projects"', async ({ readyPage: page }) => {
    const section = page.locator(sel.PROJECTS_SECTION)
    await expect(section).toBeAttached()
  })

  test('displays "Proyectos" heading', async ({ readyPage: page }) => {
    const heading = page.locator(sel.PROJECTS_HEADING)
    await expect(heading).toContainText('Proyectos')
  })

  test('displays subtitle text', async ({ readyPage: page }) => {
    const section = page.locator(sel.PROJECTS_SECTION)
    await expect(section).toContainText('selección de proyectos')
  })

  test('displays exactly 3 project cards', async ({ readyPage: page }) => {
    const cards = page.locator(sel.PROJECT_CARDS)
    await expect(cards).toHaveCount(3)
  })

  test('each project card shows its title', async ({ readyPage: page }) => {
    for (const project of PROJECTS) {
      const title = page.locator(`${sel.PROJECTS_SECTION} h3`).filter({ hasText: project.title })
      await expect(title).toBeAttached()
    }
  })

  test('each project card shows a description', async ({ readyPage: page }) => {
    const cards = page.locator(sel.PROJECT_CARDS)
    const count = await cards.count()
    for (let i = 0; i < count; i++) {
      const description = cards.nth(i).locator('p')
      const text = await description.textContent()
      expect(text.length).toBeGreaterThan(10)
    }
  })

  test('each project card has GitHub and Demo buttons', async ({ readyPage: page }) => {
    const cards = page.locator(sel.PROJECT_CARDS)
    const count = await cards.count()
    for (let i = 0; i < count; i++) {
      const githubBtn = cards.nth(i).locator('a').filter({ hasText: 'GitHub' })
      const demoBtn = cards.nth(i).locator('a').filter({ hasText: 'Demo' })
      await expect(githubBtn).toBeAttached()
      await expect(demoBtn).toBeAttached()
    }
  })

  test('external project links have target="_blank"', async ({ readyPage: page }) => {
    const externalLinks = page.locator(sel.PROJECT_LINKS)
    const count = await externalLinks.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      await expect(externalLinks.nth(i)).toHaveAttribute('target', '_blank')
    }
  })

  test('external project links have rel="noopener"', async ({ readyPage: page }) => {
    const externalLinks = page.locator(sel.PROJECT_LINKS)
    const count = await externalLinks.count()
    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel')
      expect(rel).toContain('noopener')
    }
  })

  test('project GitHub links point to correct repositories', async ({ readyPage: page }) => {
    for (const project of PROJECTS) {
      const githubLink = page.locator(`${sel.PROJECTS_SECTION} a[href="${project.github}"]`)
      await expect(githubLink).toBeAttached()
    }
  })
})
