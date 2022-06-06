const submit = document.querySelector('#submit')

if (submit) {
  submit.addEventListener('click', e => {
    e.preventDefault()

    const username = document.querySelector('#username').value
    const pattern = /^\d{15}[\u4e00-\u9fa5]{2,3}$/
    const result = document.querySelector('#result')

    if (username && result) {
      if (pattern.test(username)) {
        result.className = 'success'
        result.innerHTML = '学号输入格式正确！'
      } else {
        result.className = 'error'
        result.innerHTML = '学号输入格式错误！'
      }
    }
  })
}
