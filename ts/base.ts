var $btn = document.getElementById('js-submit');
var $input = document.getElementById('js-name');
var $content = document.getElementById('js-content');

class Member { 
  domElement: any;  
  constructor(name: string) {    
    this.domElement = document.createElement('li');   
    this.domElement.className = 'list-group-item';    
    this.addDomElm(name);   
    this.addButton();  
  } 

  addDomElm(name: string) {    
    let $span = document.createElement('span');   
    $span.innerHTML = name;    
    this.domElement.appendChild($span); 
  }

  addButton() {    
    let $delBtn = document.createElement('button');   
    $delBtn.className = 'btn btn-danger btn-xs pull-right';   
    $delBtn.innerHTML = 'Delete';   
    this.domElement.appendChild($delBtn);   
    $delBtn.addEventListener('click', (e) => {      
      let $parentElement = (<Element>e.target).parentNode;     
      $content.removeChild($parentElement);   
    });
  }
} 
  $btn.addEventListener('click', function() {  
    let name = (<HTMLInputElement>$input).value; 
    let member = new Member(name);  
    $content.appendChild(member.domElement);
  });
