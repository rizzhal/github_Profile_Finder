const userName_el = document.getElementById("username")
const searchBtn_el = document.getElementById("searchBtn")
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
const repoContainer_el = document.getElementById("repoContainer")



async function getData() {
    const username = userName_el.value.trim()
    if(username === ""){
        alert("Please enter a username")
        return;
    }
    const uri = `https://api.github.com/users/${username}`
    
    try{
        searchBtn_el.textContent = "Searching"
        searchBtn_el.disabled = true
        const response = await fetch(uri)
        if(!response.ok){
            throw new Error('Http error', response.status)
        }

        const data = await response.json();
        console.log(data)
        searchBtn_el.textContent = "search"
        searchBtn_el.disabled = false

        const avatar = data?.avatar_url??null
        const name = data?.name??null
        const usernameText = data?.login??null
        const bio = data?.bio??null
        const followers = data?.followers??null
        const following = data?.following??null
        const repos = data?.public_repos??null
        const location = data?.location??null
        const company = data?.company??null 
        const profileLink = data?.html_url??null
    

        return{avatar,name,usernameText, bio, followers, following, repos, location, company, profileLink}
    } catch(e){
        console.error('Error fetching data',e)
    }
}

searchBtn_el.addEventListener("click" , async() => {
    const result = await getData()
    if(!result) return;
    
    avatar_el.src= result.avatar
    name_el.textContent = result.name
    userNameText_el.textContent = result.usernameText
    bio_el.textContent = result.bio || "Not available"
    followers_el.textContent = result.followers
    following_el.textContent = result.following
    repos_el.textContent = result.repos
    location_el.textContent = result.location
    company_el.textContent = result.company || "Not available"
    profileLink_el.href = result.profileLink
})