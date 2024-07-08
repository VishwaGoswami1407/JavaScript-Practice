const form = document.querySelector('form')

//this usecase will give empty values in form elements
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid height ${weight}`
  }
//   results.innerHTML = `${height}`

  
})