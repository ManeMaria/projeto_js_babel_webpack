import '../../../styles/estilo.css';


export const func = ()=> {
   const div =  document.createElement('div');
   const body = document.querySelector('body');
   div.setAttribute('class', 'estilo');
   div.textContent = 'teste 2';
   body.appendChild(div);
}