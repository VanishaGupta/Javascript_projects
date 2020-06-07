var ul=document.getElementById('list');
var li;
document.getElementById('add').addEventListener('click',addItem);

function addItem()
{
    console.log('Add buttn');
    var input=document.getElementById('input');
    var Item=input.value;
    ul=document.getElementById('list');
    var textNode=document.createTextNode(Item);

    if(item==='')
    {
        return false;
             
    }
    else{
        //create li 
        li=document.createElement('li');

        //create checkbox
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        //create label
        var label=document.createElement('label');
        label.setAttribute('for','item');

        //add these element on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);

        li.className='visual';

        input.value='';
    }
}

document.getElementById('remove').addEventListener('click',removeItem);

function removeItem()
{
    console.log('Remove buttn');
    li=ul.children;
    for(let index=0; index<li.length;index++){
        const element=li[index];
        console.log(element);
        
        while(li[index]&&li[index].children[0].checked)

        {
            ul.removeChild(li[index]);
        }
    }
}

