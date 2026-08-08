self.addEventListener('push', (event) => {
  let payload;
  try{
    payload = event.data.json();
  }catch(e){
    payload = {title:"通知",body:event.data?.text()||""};
  }
  const title = payload.title || "消息通知";
  const options = {
    body: payload.body || ""
  };
  event.waitUntil(self.registration.showNotification(title,options));
});
