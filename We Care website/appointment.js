const modelViews=document.querySelectorAll('.box'),
      modelBtns=document.querySelectorAll('.button'),
      modelCloses=document.querySelectorAll('.close'),
      modelFreeze=document.querySelectorAll('.box_content');

let model=function(modelClick){
    
    modelViews[modelClick].classList.add('active_box')
    
}
modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click',()=>{
        model(i)
        
    })
})

modelCloses.forEach((modelCloses)=>{
    modelCloses.addEventListener('click',()=>{
        modelViews.forEach((modelViews)=>{
            modelViews.classList.remove('active_box')
        })
    })
})