if (‘serviceWorker’ in navigator) {
  navigator.serviceWorker.register(‘/sw.js’, { scope: ‘/personen/’ } );
}

if ('pushManager' in window){
  Notification.requestPermission().then(function(result) {
  if (result === 'denied') {
    console.log('Geen toestemming gekregen, later nog eens proberen?');
    return;
  }
  if (result === 'default') {
    console.log('De toestemming is afgewezen.');
    return;
  }
  console.log("Permission Granted!");
});
}
