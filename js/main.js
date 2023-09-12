// async function
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value
    try {
         const response = await fetch(`https://galatic-trek.cyclic.app/api/${alienName}`)
         const data = await response.json()
         console.log(data)
    } catch(err) {
         console.log(err)
    }
}