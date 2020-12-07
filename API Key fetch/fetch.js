const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve)

function retrieve(e){

  if (input.value == ''){
    alert('Input field is empty!')
    return
  }

  newsList.innerHTML = ''

  e.preventDefault()

  const apiKey = '9641fb8399d64c5e838c7ca7b28a5706'
  let topic = input.value;

  let url = `http://newsapi.org/v2/everything?q=${topic}=&apiKey=${apiKey}`

  fetch(url).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data)
    data.articles.forEach(article =>{
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', article.url );
      a.setAttribute('target', '_blank');
      a.textContent = article.title;
      li.appendChild(a);
      newsList.appendChild(li);
    })
  }).catch((error)=>{
    console.log(error) 
  })

  console.log(topic)
}