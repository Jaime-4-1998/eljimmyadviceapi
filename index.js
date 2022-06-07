const getadvice = async () =>{
    const api = await fetch("https://api.adviceslip.com/advice")
    const data = await api.json()
    document.querySelector('h1').innerHTML=`Advice #${data.slip.id}`
    document.querySelector('p').innerHTML=`${data.slip.advice}`
}
getadvice()