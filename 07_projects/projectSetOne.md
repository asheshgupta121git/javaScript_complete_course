# project section

## background changer

```javaScript

        let btns = document.querySelectorAll('.button');
        let body = document.querySelector('body');
        btns.forEach((btn)=>{
          btn.addEventListener('click',(e)=>{

            if(e.target.id === 'gray'){
                body.style.backgroundColor = e.target.id;
            }
                if(e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id;
            }
                if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'green'){
                body.style.backgroundColor = e.target.id;
            }
          })  
        })

```