const userName_el = document.getElementById("username")
const serachBtn_el = document.getElementById("searchBtn")
const avatar_el = document.getElementById("avatar")
const name_el = document.getElementById("name")
const userNameText_el = document.getElementById("usernameText")
const bio_el = document.getElementById("bio")
const followers_el = document.getElementById("followers")
const following_el = document.getElementById("following")
const repos_el = document.getElementById("repos")
const location_el = document.getElementById("location")
const company_el = document.getElementById("company")
const profileLink_el = document.getElementById("profileLink")




async function getData() {
    const username = userName_el.value
    const uri = `https://api.github.com/users/${username}`
    
    try{
        const response = await fetch(uri)
        if(!response){
            throw new Error('Http error', response.status)
        }

        const data = await response.json();
        console.log(data)
    } catch(e){
        console.error('Error fetching data',e)
    }
}

serachBtn_el.addEventListener("click" , getData)