# Acessibility Related Notes

## How to read out when an area of the web page has changed:
the aria-live property. Applying this to an element causes screen readers to read out the content that is updated. How urgently the content is read out depends on the attribute value:

off
    The default. Updates should not be announced.

polite
    Updates should be announced only if the user is idle.

assertive
    Updates should be announced to the user as soon as possible.

For example `<blockquote aria-live="assertive">…</blockquote>`

The `aria-atomic` property, when set to true, tells screen readers to read out the entire element contents as one atomic unit, not just the bits that were updated. This is useful when only a section's contents are being updated, but you also want the heading to be read out each time something changes, to remind the user of its content.

The `aria-relevant` property is useful for controlling what gets read out when a live region is updated. You can for example only get content additions or removals read out.

## Making Non-focusable code Focusable:

In terms of making non-focusable code focusable, WAI-ARIA extends the `tabindex` attribute with some new values:

* `tabindex="0"` — as indicated above, this value allows elements that are not normally tabbable to become tabbable. This is the most useful value of tabindex.

* `tabindex="-1"` — this allows not normally tabbable elements to receive focus programmatically, e.g., via JavaScript, or as the target of links.