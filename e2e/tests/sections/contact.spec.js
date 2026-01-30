import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { SOCIAL_LINKS, EMAIL_HREF } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Contact Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'contact')
  })

  test('section has id="contact"', async ({ readyPage: page }) => {
    const section = page.locator(sel.CONTACT_SECTION)
    await expect(section).toBeAttached()
  })

  test('displays "Contacto" heading', async ({ readyPage: page }) => {
    const heading = page.locator(sel.CONTACT_HEADING)
    await expect(heading).toContainText('Contacto')
  })

  test('displays contact description', async ({ readyPage: page }) => {
    const section = page.locator(sel.CONTACT_SECTION)
    await expect(section).toContainText('proyecto en mente')
  })

  test('email button has mailto link', async ({ readyPage: page }) => {
    const emailButton = page.locator(sel.CONTACT_EMAIL_BUTTON).first()
    await expect(emailButton).toHaveAttribute('href', EMAIL_HREF)
  })

  test('email button displays "Enviar email" text', async ({ readyPage: page }) => {
    const emailButton = page.locator(sel.CONTACT_EMAIL_BUTTON).first()
    await expect(emailButton).toContainText('Enviar email')
  })

  test('displays 3 social links', async ({ readyPage: page }) => {
    const socialLinks = page.locator(sel.SOCIAL_LINKS)
    await expect(socialLinks).toHaveCount(3)
  })

  test('social links have correct hrefs', async ({ readyPage: page }) => {
    for (const link of SOCIAL_LINKS) {
      const socialLink = page.locator(`${sel.CONTACT_SECTION} a[aria-label="${link.label}"]`)
      await expect(socialLink).toHaveAttribute('href', link.href)
    }
  })

  test('social links have aria-labels', async ({ readyPage: page }) => {
    for (const link of SOCIAL_LINKS) {
      const socialLink = page.locator(`${sel.CONTACT_SECTION} a[aria-label="${link.label}"]`)
      await expect(socialLink).toBeAttached()
    }
  })
})
