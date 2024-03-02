const click_submit =()=>{
  // console.log(document.getElementById("alert-btn"));
  const element = document.getElementById('alert-content');
  const text= element.value;
  alert(text);
}
const enter_press=(event)=>{
  const keyPress=event.keyCode;
  if (keyPress===13) {
      const element = document.getElementById('alert-content');
      const text= element.value;
      alert(text);
  }
}
const click_alert=()=>{
  alert('Alert!');
}
const changeCheckbox=()=>{
  const box=document.getElementById('check-box');
  const text=document.getElementById('checkbox-text');
  const checked=box.checked;
  let html='';
  if (!checked){
    html+='Bạn cần chọn vào ô';
    text.style.color='red';
  } else{
    html+='Bạn đã chọn';
    text.style.color='green';
  }
  text.innerHTML=html;
}
