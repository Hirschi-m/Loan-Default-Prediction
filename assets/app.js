const list = document.getElementById('notebook-list');
const safePath = value => typeof value === 'string' && !/^(?:[a-z]+:|\/\/|\/)/i.test(value) && !value.split('/').includes('..');
(window.PROJECT_NOTEBOOKS || []).forEach((item,index) => {
 const row = document.createElement('article'); row.className='notebook';
 const number=document.createElement('span');number.textContent=String(index+1).padStart(2,'0');
 const copy=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;
 const description=document.createElement('p');description.textContent=item.description;copy.append(title,description);row.append(number,copy);
 if(safePath(item.path)){
  const links=document.createElement('div');const download=document.createElement('a');download.href=item.path;download.textContent='Download .ipynb ↗';download.setAttribute('download','');links.append(download);
  if(safePath(item.html)){const view=document.createElement('a');view.href=item.html;view.textContent='Read notebook ↗';view.style.display='block';links.append(view)}row.append(links);
 }else{const status=document.createElement('span');status.className='badge';status.textContent='AWAITING NOTEBOOK';row.append(status)}list.append(row);
});
