const container = document.getElementById('container')
const closeBtn = document.getElementById('close-btn')
// const submitBtn = document.getElementById('submit-btn')
const cookieForm = document.getElementById('cookie-form')
const modelText = document.getElementById('model-text')
const email = document.getElementById('email')



setTimeout( function(){
    container.style.display ='inline'
},1500)

closeBtn.addEventListener('click',() => {
    container.style.display = 'none'
})

cookieForm.addEventListener('submit',function(e){
    e.preventDefault()

    const cookieFormData = new FormData(cookieForm)
    const name = cookieFormData.get('userName')
    const email = cookieFormData.get('email')

    document.cookie =`userName=${name}; expires= ` + new Date(2050,1,1).toUTCString()
    document.cookie =`email=${email}; expires= ` + new Date(2050,1,1).toUTCString()

    localStorage.setItem("userName", name)
    localStorage.setItem('email',email)

    
    // console.log(cookieFormData)
    

    modelText.innerHTML =`
    <div class="inner-loading" id="inner-loading">
        <img src="icon/830.svg">
        <p class="loading-text" id="loading-text">oops! it's loading</p>
    </div>
    `
    document.getElementById('users').textContent =`${name}`

    
    setTimeout( function(){
        document.getElementById('loading-text').innerText =`
        Just a second`
    },1500)

    setTimeout( function(){
        document.getElementById('inner-contain').innerHTML = `
        <h1>Thank you! <span class='username'>${name}</span></h1>
        <p> By clicking"Accept all cookies,your agree this site store cookies
        on your device and disclose information in accordence with our <a class="policy-link" href="https://policies.google.com/technologies/cookies?hl=en-US">cookie policy</a>.</p>
        `
        closeBtn.disabled = false
    },3000)
})
// const userId = document.getElementById('userId')
// userId.addEventListener('dblclick', function(){
//     // console.log('hello user')
//     userId.innerHTML=`
//     <input class="edit-user" id="edit-user" type="text" placeholder="Edit" >`
// })
//bharathi


