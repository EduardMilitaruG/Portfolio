import * as sel from './selectors.js'

/**
 * Prepare the page for deterministic visual comparison screenshots.
 * Disables animations and hides the non-deterministic canvas background.
 */
export async function prepareForScreenshot(page) {
  // Disable all CSS transitions and animations
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `
  })

  // Hide the canvas background (non-deterministic noise-based animation)
  const canvas = page.locator(sel.CANVAS_BACKGROUND)
  if (await canvas.count() > 0) {
    await canvas.evaluate(el => {
      el.style.display = 'none'
    })
  }

  // Wait for repaints
  await page.waitForTimeout(200)
}
