function initAccountMenus() {
  const accountMenus = document.querySelectorAll(".account-menu");
  let resetPasswordModal;
  const accountMenuIcons = {
    resetPassword: `
      <circle cx="7.5" cy="16.5" r="3"></circle>
      <path d="m10 14 7.5-7.5"></path>
      <path d="m15.5 8.5 2 2"></path>
      <path d="m18 6 2 2"></path>
    `,
    logOut: `
      <path d="M4 4.5 14 3v18L4 19.5z"></path>
      <path d="M14 6h5v4"></path>
      <path d="M19 14v4h-5"></path>
      <path d="M11 12h9"></path>
      <path d="m17.5 9.5 2.5 2.5-2.5 2.5"></path>
      <circle cx="11" cy="12" r=".65" fill="currentColor" stroke="none"></circle>
    `,
  };

  function loadResetPasswordStyles() {
    if (document.querySelector('link[data-reset-password-styles]')) return;

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "reset-password.css";
    stylesheet.dataset.resetPasswordStyles = "";
    document.head.appendChild(stylesheet);
  }

  function createResetPasswordModal() {
    if (resetPasswordModal) return resetPasswordModal;

    loadResetPasswordStyles();

    const wrapper = document.createElement("div");
    wrapper.className = "reset-password-overlay";
    wrapper.hidden = true;
    wrapper.innerHTML = `
      <section class="reset-password-dialog" role="dialog" aria-modal="true" aria-labelledby="resetPasswordTitle" aria-describedby="resetPasswordDescription">
        <div class="reset-password-heading">
          <div>
            <p class="reset-password-eyebrow">Account security</p>
            <h2 id="resetPasswordTitle">Reset password</h2>
            <p id="resetPasswordDescription">Create a new password for your Cascade account.</p>
          </div>
          <button class="reset-password-close" type="button" data-reset-password-close aria-label="Close reset password dialog">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18"></path>
            </svg>
          </button>
        </div>

        <form class="reset-password-form" novalidate>
          <label class="reset-password-field">
            <span>Current password <b aria-hidden="true">*</b></span>
            <span class="reset-password-input-wrap">
              <svg class="reset-password-lock" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="10" width="14" height="11" rx="2"></rect>
                <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
              </svg>
              <input name="currentPassword" type="password" autocomplete="current-password" required aria-describedby="currentPasswordError" />
              <button class="reset-password-visibility" type="button" data-password-toggle aria-label="Show current password">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                  <circle cx="12" cy="12" r="2.5"></circle>
                </svg>
              </button>
            </span>
            <small class="reset-password-error" id="currentPasswordError" aria-live="polite"></small>
          </label>

          <label class="reset-password-field">
            <span>New password <b aria-hidden="true">*</b></span>
            <span class="reset-password-input-wrap">
              <svg class="reset-password-lock" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="10" width="14" height="11" rx="2"></rect>
                <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
              </svg>
              <input name="newPassword" type="password" autocomplete="new-password" required aria-describedby="newPasswordError passwordRequirements" />
              <button class="reset-password-visibility" type="button" data-password-toggle aria-label="Show new password">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                  <circle cx="12" cy="12" r="2.5"></circle>
                </svg>
              </button>
            </span>
            <small class="reset-password-error" id="newPasswordError" aria-live="polite"></small>
          </label>

          <div class="password-strength" aria-live="polite">
            <div class="password-strength-bars" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
            <strong class="password-strength-label">Enter a password</strong>
          </div>

          <div class="password-requirements" id="passwordRequirements">
            <strong>Password must contain:</strong>
            <ul>
              <li data-requirement="length"><span aria-hidden="true">✓</span>At least 8 characters</li>
              <li data-requirement="uppercase"><span aria-hidden="true">✓</span>One uppercase letter</li>
              <li data-requirement="lowercase"><span aria-hidden="true">✓</span>One lowercase letter</li>
              <li data-requirement="numberSpecial"><span aria-hidden="true">✓</span>One number or special character</li>
            </ul>
          </div>

          <label class="reset-password-field">
            <span>Confirm new password <b aria-hidden="true">*</b></span>
            <span class="reset-password-input-wrap">
              <svg class="reset-password-lock" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="10" width="14" height="11" rx="2"></rect>
                <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
              </svg>
              <input name="confirmPassword" type="password" autocomplete="new-password" required aria-describedby="confirmPasswordError" />
              <button class="reset-password-visibility" type="button" data-password-toggle aria-label="Show confirmed password">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                  <circle cx="12" cy="12" r="2.5"></circle>
                </svg>
              </button>
            </span>
            <small class="reset-password-error" id="confirmPasswordError" aria-live="polite"></small>
          </label>

          <p class="reset-password-status" role="status" aria-live="polite"></p>

          <div class="reset-password-actions">
            <button class="reset-password-cancel" type="button" data-reset-password-close>Cancel</button>
            <button class="reset-password-submit" type="submit">Update password</button>
          </div>
        </form>
      </section>
    `;

    document.body.appendChild(wrapper);

    const dialog = wrapper.querySelector(".reset-password-dialog");
    const form = wrapper.querySelector(".reset-password-form");
    const currentPassword = form.elements.currentPassword;
    const newPassword = form.elements.newPassword;
    const confirmPassword = form.elements.confirmPassword;
    const strengthBars = [...wrapper.querySelectorAll(".password-strength-bars span")];
    const strengthLabel = wrapper.querySelector(".password-strength-label");
    const status = wrapper.querySelector(".reset-password-status");
    const submitButton = wrapper.querySelector(".reset-password-submit");
    let returnFocus;

    const tests = {
      length: (value) => value.length >= 8,
      uppercase: (value) => /[A-Z]/.test(value),
      lowercase: (value) => /[a-z]/.test(value),
      numberSpecial: (value) => /[\d\W_]/.test(value),
    };

    function requirementsFor(value) {
      return Object.fromEntries(
        Object.entries(tests).map(([name, test]) => [name, test(value)])
      );
    }

    function clearFieldError(input) {
      const error = wrapper.querySelector(`#${input.getAttribute("aria-describedby").split(" ")[0]}`);
      input.removeAttribute("aria-invalid");
      if (error) error.textContent = "";
    }

    function setFieldError(input, message) {
      const error = wrapper.querySelector(`#${input.getAttribute("aria-describedby").split(" ")[0]}`);
      input.setAttribute("aria-invalid", "true");
      if (error) error.textContent = message;
    }

    function updateStrength() {
      const value = newPassword.value;
      const results = requirementsFor(value);
      const passed = Object.values(results).filter(Boolean).length;
      const strength = value ? passed : 0;
      const labels = ["Enter a password", "Weak", "Fair", "Good", "Strong"];

      strengthBars.forEach((bar, index) => {
        bar.classList.toggle("is-active", index < strength);
        bar.dataset.strength = String(strength);
      });
      strengthLabel.textContent = labels[strength];
      strengthLabel.dataset.strength = String(strength);

      Object.entries(results).forEach(([name, isValid]) => {
        const item = wrapper.querySelector(`[data-requirement="${name}"]`);
        item.classList.toggle("is-valid", isValid);
      });

      if (newPassword.hasAttribute("aria-invalid")) validateNewPassword();
      if (confirmPassword.value && confirmPassword.hasAttribute("aria-invalid")) {
        validateConfirmation();
      }
    }

    function validateNewPassword() {
      clearFieldError(newPassword);
      const results = requirementsFor(newPassword.value);

      if (!newPassword.value) {
        setFieldError(newPassword, "Enter a new password.");
        return false;
      }
      if (!Object.values(results).every(Boolean)) {
        setFieldError(newPassword, "Your password does not meet all requirements.");
        return false;
      }
      if (newPassword.value === currentPassword.value) {
        setFieldError(newPassword, "Your new password must be different from your current password.");
        return false;
      }
      return true;
    }

    function validateConfirmation() {
      clearFieldError(confirmPassword);
      if (!confirmPassword.value) {
        setFieldError(confirmPassword, "Confirm your new password.");
        return false;
      }
      if (confirmPassword.value !== newPassword.value) {
        setFieldError(confirmPassword, "The passwords do not match.");
        return false;
      }
      return true;
    }

    function resetForm() {
      form.reset();
      form.querySelectorAll("[aria-invalid]").forEach((input) => input.removeAttribute("aria-invalid"));
      form.querySelectorAll(".reset-password-error").forEach((error) => {
        error.textContent = "";
      });
      form.querySelectorAll('input[type="text"]').forEach((input) => {
        input.type = "password";
      });
      form.querySelectorAll("[data-password-toggle]").forEach((button) => {
        button.setAttribute("aria-label", button.getAttribute("aria-label").replace("Hide", "Show"));
        button.classList.remove("is-visible");
      });
      status.textContent = "";
      status.className = "reset-password-status";
      submitButton.disabled = false;
      submitButton.textContent = "Update password";
      updateStrength();
    }

    function openModal(trigger) {
      returnFocus = trigger;
      resetForm();
      wrapper.hidden = false;
      document.body.classList.add("has-reset-password-dialog");
      window.requestAnimationFrame(() => {
        wrapper.classList.add("is-open");
        currentPassword.focus();
      });
    }

    function closeModal() {
      wrapper.classList.remove("is-open");
      document.body.classList.remove("has-reset-password-dialog");
      window.setTimeout(() => {
        wrapper.hidden = true;
        resetForm();
        if (returnFocus) returnFocus.focus();
      }, 180);
    }

    wrapper.querySelectorAll("[data-reset-password-close]").forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    wrapper.addEventListener("click", (event) => {
      if (event.target === wrapper) closeModal();
    });

    wrapper.querySelectorAll("[data-password-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const input = button.parentElement.querySelector("input");
        const isVisible = input.type === "text";
        input.type = isVisible ? "password" : "text";
        button.classList.toggle("is-visible", !isVisible);
        button.setAttribute(
          "aria-label",
          `${isVisible ? "Show" : "Hide"} ${input.name === "currentPassword" ? "current password" : "new password"}`
        );
      });
    });

    currentPassword.addEventListener("input", () => clearFieldError(currentPassword));
    currentPassword.addEventListener("blur", () => {
      if (!currentPassword.value) setFieldError(currentPassword, "Enter your current password.");
    });
    newPassword.addEventListener("input", updateStrength);
    newPassword.addEventListener("blur", validateNewPassword);
    confirmPassword.addEventListener("input", () => {
      if (confirmPassword.hasAttribute("aria-invalid")) validateConfirmation();
    });
    confirmPassword.addEventListener("blur", validateConfirmation);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearFieldError(currentPassword);

      const currentValid = Boolean(currentPassword.value);
      if (!currentValid) setFieldError(currentPassword, "Enter your current password.");
      const newValid = validateNewPassword();
      const confirmationValid = validateConfirmation();

      if (!currentValid || !newValid || !confirmationValid) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Updating…";
      status.textContent = "";

      window.setTimeout(() => {
        const resetEvent = new CustomEvent("cascade:password-reset", {
          cancelable: true,
          detail: {
            currentPassword: currentPassword.value,
            newPassword: newPassword.value,
          },
        });
        const shouldUsePrototypeSuccess = window.dispatchEvent(resetEvent);

        if (shouldUsePrototypeSuccess) {
          status.textContent = "Password updated successfully.";
          status.classList.add("is-success");
          submitButton.textContent = "Password updated";
          window.setTimeout(closeModal, 900);
        } else {
          submitButton.disabled = false;
          submitButton.textContent = "Update password";
        }
      }, 450);
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = [...dialog.querySelectorAll("button:not(:disabled), input:not(:disabled)")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    resetPasswordModal = { open: openModal, close: closeModal, element: wrapper };
    return resetPasswordModal;
  }

  function assignMenuIcon(item) {
    const icon = item.querySelector("svg");
    if (!icon) return;

    const label = item.textContent.trim().toLowerCase();
    if (label.includes("reset password")) {
      icon.innerHTML = accountMenuIcons.resetPassword;
    } else if (label.includes("log out") || label.includes("logout")) {
      icon.innerHTML = accountMenuIcons.logOut;
    }
  }

  function closeMenu(menu) {
    const button = menu.querySelector(".profile-button");
    menu.classList.remove("is-open");
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function closeAllMenus(exceptMenu) {
    accountMenus.forEach((menu) => {
      if (menu !== exceptMenu) closeMenu(menu);
    });
  }

  accountMenus.forEach((menu) => {
    const button = menu.querySelector(".profile-button");
    if (!button) return;

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      closeAllMenus(menu);
    });

    menu.querySelectorAll(".account-menu-item").forEach((item) => {
      assignMenuIcon(item);
      item.addEventListener("click", () => {
        const label = item.textContent.trim().toLowerCase();
        closeMenu(menu);
        if (label.includes("reset password")) {
          createResetPasswordModal().open(item);
        } else if (label.includes("log out") || label.includes("logout")) {
          window.location.href = "login-page-standalone.html";
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    accountMenus.forEach((menu) => {
      if (!menu.contains(event.target)) closeMenu(menu);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (resetPasswordModal && !resetPasswordModal.element.hidden) {
      resetPasswordModal.close();
    } else {
      closeAllMenus();
    }
  });
}

initAccountMenus();
