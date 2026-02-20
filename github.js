let button = document.querySelector('.button');
let input = document.querySelector('.input');
let card = document.querySelector('.card');



function getuser(username){
   return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if(!raw.ok) throw new Error("INVALID USERNAME");
           
        return raw.json();
        
    });
}

function getrepos(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((raw)=>{
    if(!raw.ok) throw new Error("Failed to fetch repos...");
    
    return raw.json();
   } )
}

function decorate(details){
    console.log(details);
    let data = 

    ` <div class="card w-full max-w-xl bg-gray-900 opacity-100 rounded-xl shadow-inner flex flex-row space-x-6">

    <div class="bg-gray-800 opacity-90 rounded-xl shadow-inner flex flex-row space-x-6 p-6">
     <div class="w-24 h-24 bg-gray-600 rounded-full ">
        <img src="${details.avatar_url}" 
        alt="User Avatar" 
        class="w-24 h-24  rounded-full object-cover border-2 border-green-500">
        
         
        </div>

        
        <div class="flex-1 flex flex-col justify-center space-y-2 text-white">
        <div class="w-fit h-6 bg-gray-900 rounded ">${details.name}</div> 
        <div class="w-fit bg-gray-900 h-7 rounded ">@${details.login}</div>
        <div class="w-80 bg-gray-900 h-auto rounded ">${details.bio || 'No bio available'}</div>
        
       
        <div class="grid grid-cols-3 gap-3 mt-3 text-center w-full">
        <div class="bg-gray-900 rounded-xl p-3 w-18 h-16 "><pre>Public-Repos: </pre>${details.public_repos}</div> 
        <div class="bg-gray-900 rounded-xl w-18 h-16 p-3 "><pre>Followers: </pre> ${details.followers}</div>
        <div class="bg-gray-900 rounded-xl w-18 h-16 p-3"><pre>Followings: </pre>${details.following}</div> 
        </div>
        
      
        <div class="mt-3 space-y-1 text-sm w-full">
        <div class="h-5 bg-gray-900 rounded w-2/3 "><pre><strong>📍Location: </strong>${details.location || 'N/A'}</pre></div> 
        <div class="w-fit h-5 bg-gray-900 rounded w-1/2 "><pre><strong>💻Company: </strong>${details.company || 'N/A'}</pre></div> 
        <div class="w-fit h-5 bg-gray-900 rounded w-3/4 "><pre><strong>🌐Website: </strong>${details.blog || 'N/A'}</pre></div>
        </div>
        </div>
        </div>
        `
        card.innerHTML = data;
       
}



button.addEventListener('click', function(){
    let username = input.value.trim();
    if(username.length>0){
        
        getuser(`${username}`).then(function(data){
            decorate(data);
        })
        
    }

    else
    alert("INVALID USERNAME");
});