export default function decorate(block) {
    const link = block.querySelector('a').href;
    let indexUrl = JSON.parse(httpGet(link));
    let articles = ""
    if(indexUrl.data){
        const wrapper = document.createElement('div');
        wrapper.className = 'article-container';
        
        indexUrl.data.forEach(generateCard);

        wrapper.innerHTML = articles;
        block.append(wrapper);
    }
    function generateCard(item,index){
            if(item.path !="/magazine/" && item.path.includes("/magazine/")){
                const card = `<div class="card" id="card-${index}">
                <a href=${item.path}>
                    <picture>
                        <source type="image/webp" srcset="${item.image}?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
                        <source type="image/webp" srcset="${item.image}?width=750&amp;format=webply&amp;optimize=medium">
                        <source type="image/png" srcset="${item.image}?width=2000&amp;format=png&amp;optimize=medium" media="(min-width: 600px)">
                        <img loading="lazy" alt="" type="image/png" src="${item.image}?width=750&amp;format=png&amp;optimize=medium" width="1280" height="853">
                    </picture>
                    <h6>${item.title}</h6>
                   <!-- <p>${item.author}</p> -->
                    <p class="description">${item.description}</p>
                </a>
              </div>`;

              articles += card;
            }
       
    }


}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

