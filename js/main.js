const username = document.querySelector('#username')
const submit = document.querySelector('#submit')
const result = document.querySelector('#result')

username.focus()

const pattern = /^\d{15}[\u4e00-\u9fa5]{2,3}$/

function verify() {
  if (pattern.test(username.value)) {
    result.className = 'success'
    result.innerHTML = '学号输入格式正确！'
  } else {
    result.className = 'error'
    result.innerHTML = '学号输入格式错误！'
  }
}

username.addEventListener('enter', verify)

submit.addEventListener('click', e => {
  e.preventDefault()
  verify()
})
