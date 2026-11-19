
const ActionBtnArray = ['Github', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Snapchat'] 



const ActionHtml =  ActionBtnArray.map((item)=> {
     return  `
             <div class="h-12.5 w-full bg-[#333333]  rounded-xl flex justify-center items-center text-[15px]  font-bold ">
                ${item}
             </div>
          ` 
});


const btn = document.getElementById('ActionBtn');

btn.innerHTML = ActionHtml.join('')


