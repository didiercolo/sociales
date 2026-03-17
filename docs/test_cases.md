# Test Cases: Registration Flow & Footer Updates

This document outlines the manual test cases for the updated registration flow and the new WhatsApp footer contact.

## 1. Registration Flow (Nickname Selection)

### Test Case 1.1: Select Nickname from List
- **Prerequisites**: Access to `/registro`.
- **Steps**:
    1. Navigate to the registration page.
    2. Ensure "Elige tu Nombre" (Step 1) is visible.
    3. Verify that a grid of nicknames is loaded from Firestore.
    4. Click on a nickname chip (e.g., "TurboVoyager").
    5. Verify the "Siguiente" button becomes enabled.
    6. Click "Siguiente".
- **Expected Result**: User advances to the password selection step (Step 2).

### Test Case 1.2: Enter Custom Nickname
- **Prerequisites**: Access to `/registro`.
- **Steps**:
    1. Navigate to the registration page.
    2. Click the "Escribir mi propio nombre" link.
    3. Type a unique nickname in the input field.
    4. Verify the "Siguiente" button is enabled.
    5. Click "Siguiente".
- **Expected Result**: User advances to the password selection step (Step 2).

### Test Case 1.3: Form Validation (Passwords)
- **Prerequisites**: Advance to Step 2 of registration.
- **Steps**:
    1. Enter an email address.
    2. Enter a password (e.g., "Pass123!").
    3. Enter a different password in "Confirmar Contraseña" (e.g., "Pass456!").
    4. Verify an error message appears or the "Registrarse" button remains disabled/fails with a prompt.
- **Expected Result**: System prevents registration with mismatched passwords.

## 2. Global Footer

### Test Case 2.1: WhatsApp Link
- **Prerequisites**: Any page with a footer (e.g., `/`, `/registro`).
- **Steps**:
    1. Scroll to the bottom of the page.
    2. Locate the "Contacto" section.
    3. Verify the "soporte@socialesportal.com" email is GONE.
    4. Click the "💬 ¡Escríbenos por WhatsApp!" button.
- **Expected Result**: A new tab opens pointing to `https://wa.me/50660326413`.

## 3. SEO & Routing

### Test Case 3.1: Clean URLs
- **Prerequisites**: Production or local build.
- **Steps**:
    1. Navigate to `https://eduportalcr.com/registro` directly in the browser address bar.
    2. Refresh the page.
- **Expected Result**: The page loads correctly without internal hashes (`#`) and without a 404 page (due to the redirect workaround).
