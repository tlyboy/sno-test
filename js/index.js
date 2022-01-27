let submit = document.querySelector('#submit')

submit.addEventListener('click', e => {
  let username = document.querySelector('#username').value
  let pattern = /^\d{15}[\u4e00-\u9fa5]{2,3}$/

  let result = document.querySelector('.result')
  if (pattern.test(username)) {
    result.className = 'result success'
    result.innerHTML = '学号输入格式正确！'
  } else {
    result.className = 'result fail'
    result.innerHTML = '学号输入格式错误！'
  }
  e.preventDefault()
})
