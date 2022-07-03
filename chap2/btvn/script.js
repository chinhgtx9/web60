const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.onclick = () => {

    const promiseMethod = new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(data => {
            
            const dataUser = [];
            dataUser.push(data.name,data.avatar_url,data.login)
            if(dataUser[0] === undefined) {
                reject()
            }else{
                resolve(dataUser);
            }
           
        })
    })

    promiseMethod
    .then((dataUser) => {
        if(dataUser.length > 0){
            list_tag = `
        <ul>
        <li> Tên : ${dataUser[0]}</li>
        <li> avatar url :${dataUser[1]}</li>
        <li> login name: ${dataUser[2]}</li>
        </ul>

        `
        list.innerHTML = list_tag;
        }
    })
    .catch(
      function(){
       alert('ban nhap sai ten')
      }
    )
    
}