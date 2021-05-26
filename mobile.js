function getMobileOperatingSystem() {
 const userAgent = navigator.userAgent || navigator.vendor;
  if (['ipad', 'iphone', 'ipod'].some(e => userAgent.toLowerCase().includes(e))) {
       document.body.style.backgroundImage="url('COVID-19-CDC.resized.rotated.png')";
      document.getElementById("text1").style.color='black'
      document.getElementById("text2").style.color='black'
      document.getElementById("text3").style.color='black'
      document.getElementById("header").style.color='#054683'
      document.getElementById("header").style.fontFamily='Delicious'
      document.getElementById("text1").style.float='none'
      document.getElementById("totalconfirmed").style.marginLeft=0
      document.getElementById("text2").style.float='none'
      document.getElementById("totaldeaths").style.marginLeft=0
      document.getElementById("text3").style.float='none'
      document.getElementById("totalrecovered").style.marginLeft=0
      document.getElementById('text1').style.textAlign='left'
      document.getElementById('text2').style.textAlign='left'
      document.getElementById('text3').style.textAlign='left'
      document.getElementById('header').style.textAlign='centre'
      document.getElementById('header').style.marginLeft=110
      document.body.style.zoom = "50%";
} else if (userAgent.toLowerCase().includes('android')) {

      document.body.style.backgroundImage="url('COVID-19-CDC.resized.rotated.png')";
      document.getElementById("text1").style.color='black'
      document.getElementById("text2").style.color='black'
      document.getElementById("text3").style.color='black'
      document.getElementById("header").style.color='#054683'
      document.getElementById("header").style.fontFamily='Delicious'
      document.getElementById("text1").style.float='none'
      document.getElementById("totalconfirmed").style.marginLeft=0
      document.getElementById("text2").style.float='none'
      document.getElementById("totaldeaths").style.marginLeft=0
      document.getElementById("text3").style.float='none'
      document.getElementById("totalrecovered").style.marginLeft=0
      document.getElementById('text1').style.textAlign='left'
      document.getElementById('text2').style.textAlign='left'
      document.getElementById('text3').style.textAlign='left'
      document.getElementById('header').style.textAlign='centre'
      document.getElementById('header').style.marginLeft=110
      document.body.style.zoom = "50%";
} else {
  console.log('Other');
}
}
getMobileOperatingSystem()
