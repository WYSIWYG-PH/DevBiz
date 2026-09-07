/**
 * Shared open/closed state for the contact modal.
 *
 * `useState` (rather than a module-level `ref`) keeps the state per-request on
 * the server, so it can't leak between users during SSR.
 *
 * Any component can open the modal:
 *   const contactOpen = useContactModal()
 *   contactOpen.value = true
 */
export const useContactModal = () => useState('contact-modal-open', () => false)
