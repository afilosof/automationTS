class RegistrarionForm {
  minPasswordLength = 10;
  validationEmail(email: string) {}
  passwordLengthVerification(password: string) {
    if (password.length >= this.minPasswordLength) {
      return true;
    }
  }

  passwordAlphabeticVerification(password: string) {
    const regExp = /^[a-zA-Z0-9!@#$%^&*]+$/;
    return regExp.test(password);
  }

  passwordCharactersVerification(password: string) {
    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*]).*$/;
    return regExp.test(password);
  }

  confirmPasswordVerification(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      return true;
    }
  }

  formValidation(email: string, password: string, confirmPassword: string) {
    if (this.passwordLengthVerification(password)) {
      if (this.passwordAlphabeticVerification(password)) {
        if (this.passwordCharactersVerification(password)) {
          if (this.confirmPasswordVerification(password, confirmPassword)) {
            return 'Registration is successful';
          }
          return 'Passwords do not match';
        }
        return 'Password must contain at least one number and a special symbol';
      }
      return 'Password might contain only numbers, Latin alphabet characters, and special symbols';
    }
    return 'Password should be longer than 10 characters';
  }
}

export const registrationForm = new RegistrarionForm();
