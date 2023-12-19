let fadi = 'FADIMATA ABDOULAYE'

localStorage.setItem('clefadi', fadi)

const getFadi = localStorage.getItem('clefadi')

document.body.innerHTML = getFadi