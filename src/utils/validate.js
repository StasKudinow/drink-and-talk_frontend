export function validateLogin(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/^[а-яА-Яa-zA-Z\-\s]{2,30}$/umi) {
    return 'Имя должно содержать только латиницу, кириллицу, пробел или дефис!';
  }
}

export function validateEmail(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некорректный Email!'
  }
}

export function validatePassword(value) {
  if (!value) {
    return 'Заполните это поле!'
  }
}

export function validateConfirmPassword(value) {
  if (!value) {
    return 'Заполните это поле!'
  }
}