import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['openUserMenu'];

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu);

    this.signUpLinkTarget.addEventListener('click', this.toggleDropdownMenu);
    this.loginLinkTarget.addEventListener('click', this.toggleDropdownMenu);

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', this.toggleDropdownMenu);
    });
  }

  toggleDropdownMenu() {
    toggle(document.getElementById('modal-wrapper'));
  }
}
