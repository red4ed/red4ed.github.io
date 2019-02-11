let comments = [];
loadComments();

document.getElementById('com-add').onclick = function(){
  event.preventDefault();
  let commentName = document.getElementById('com_name');
  let commentMail = document.getElementById('com_mail');
  let commentSite = document.getElementById('com_site');
  let commentMes = document.getElementById('com_mes');

  let comment = {
    name : commentName.value,
    mail : commentMail.value,
    site : commentSite.value,
    mes : commentMes.value,
    time : Math.floor(Date.now() / 1000)
  }

  commentName.value = '';
  commentMail.value = '';
  commentSite.value = '';
  commentMes.value = '';

  comments.push(comment);
  saveComments();
  showComments();
}

function saveComments(){
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
  if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
  let commentField = document.getElementById('comment-field');
  let out = '';
  comments.forEach(function(item){
      out += `<div class="box_comment main_flex__nowrap"><div class="img_comment"><img src="img/icon/commentman.svg" alt="man"></div><div class="about_comment"><p>Name:  / E-mail: / Web-site:<span> / ${timeConverter(item.time)}</span></p><h5>${item.name} / ${item.mail} / ${item.site}</h5><p>${item.mes}</p></div></div>`;
  });
  commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}