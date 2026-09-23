  const tabs = document.querySelectorAll('.tab'),
        preview = document.querySelector('.previewSrc'),
        cReset = document.querySelector('.commndReset'),
        htmlFile = document.querySelector('.htmlCoder'),
        cssFile = document.querySelector('.cssCoder'),
        jsFile = document.querySelector('.jsCoder');
  

/* ========================================
    ✅ Apply ==III== TAB CLICKING TO CHANGE FILE
======================================== */
  // Click event add koro
  tabs.forEach(n => {
      n.addEventListener('click', function() {
        const BodyData = this.getAttribute("data");
         
        //const  deviceH = window.innerHeight; alert(deviceH);

        tabs.forEach(b => {
          b.style = "background-image: url('light blure.png');";
          b.querySelector('.links').classList.remove('textAnim');
        });
        
          this.querySelector('.links').classList.add('textAnim');
          this.style = "background-image: url('bg.png');";
        
        if(BodyData==='HTML'){
          htmlFile.style.display = 'block';
          cssFile.style.display = 'none';
          jsFile.style.display = 'none';
        }else if(BodyData==='CSS'){
          cssFile.style.display = 'block';
          jsFile.style.display = 'none';
          htmlFile.style.display = 'none';
        }else if(BodyData==='JS'){
          jsFile.style.display = 'block';
          htmlFile.style.display = 'none';
          cssFile.style.display = 'none';
        }
      });
  });
  
  
  
/* ========================================
    ✅ Apply ==III== CREATE LIVE DOCUMENT
======================================== */
//.createPreview();
function createPreview() {

    // Get user's HTML
    const html = htmlFile.value;

    // Get user's CSS
    const css = cssFile.value;

    // Get user's JavaScript
    const js = jsFile.value;

    /*
        Combine HTML + CSS + JS
        into one complete document.
    */
    const documentCode = `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
          
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
        <script>
          ${js}
        <\/script>
      </body>
    </html>
  `;
  
    /*
        Put the generated document
        inside the iframe.
    */
    preview.srcdoc = documentCode;
}


/* ========================================
   LIVE UPDATE
======================================== */

/*
    Whenever the user types something,
    createPreview() will run.
*/

htmlFile.addEventListener("input", createPreview);

cssFile.addEventListener("input", createPreview);

jsFile.addEventListener("input", createPreview);


/* ========================================
   ✅ Apply ==III== RESET ALL FILE WITH PREVIEW
======================================== */
cReset.onclick = () =>{
  //HTML Preview
   htmlFile.value = `<div class="app">
<i>Ex,</i>
<h1>Hellow World</h1>
<p>Welcome to Live Code Editor.</p>
</div>`; 

  //CSS Preview
   cssFile.value = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
}

i{
  color: #707070;
  font-weight: 1000;
}

h1{
  color: #333;
}

p{
  color: blue;
  font-size: 20px;
  font-weight: 800;
}`; 

//JS Preview
   jsFile.value = "";
   
   createPreview();
}


/* ========================================
   ✅ Apply ==III== RESET ALL FILE WITH PREVIEW
======================================== */
function reStartPreview() {
  //HTML Preview
   htmlFile.value = `<div class="app">
<i>Ex,</i>
<h1>Hellow World</h1>
<p>Welcome to Live Code Editor.</p>
</div>`; 

  //CSS Preview
   cssFile.value = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
}

i{
  color: #707070;
  font-weight: 1000;
}

h1{
  color: #333;
}

p{
  color: blue;
  font-size: 20px;
  font-weight: 800;
}`; 

//JS Preview
   jsFile.value = "";
   
   createPreview();
}





  function openBrowser(url) {
      // নতুন ট্যাব/ব্রাউজারে ওপেন করবে
      window.open(url, "_blank");
  }


  function openApp(url) {
    window.location.href = url;
  }



/* ========================================
   AUTO SAVE প্রতি 0.01 second
======================================== */
function autoSave() {
  localStorage.setItem("htmlCode", htmlFile.value);
  localStorage.setItem("cssCode", cssFile.value);
  localStorage.setItem("jsCode", jsFile.value);
  //console.log("✅ Auto-saved code");
}
setInterval(autoSave, 10);


/* ========================================
   APP START হলে CHECK করো
======================================== */
function initApp() {
  const savedHTML = localStorage.getItem("htmlCode");
  const savedCSS  = localStorage.getItem("cssCode");
  const savedJS   = localStorage.getItem("jsCode");

  // যদি কোনো একটা code থাকে → file by file load করো
  let loaded = false;

  if (savedHTML !== null) {
    htmlFile.value = savedHTML;
    loaded = true;
    console.log("✅ HTML loaded");
  }
  if (savedCSS !== null) {
    cssFile.value = savedCSS;
    loaded = true;
    console.log("✅ CSS loaded");
  }
  if (savedJS !== null) {
    jsFile.value = savedJS;
    loaded = true;
    console.log("✅ JS loaded");
  }

  if (loaded) {
    createPreview();
    console.log("✅ Preview refreshed with saved code");
  } else {
    reStartPreview();
    console.log("⚠️ No saved code found, restarted preview");
  }
}

/* ========================================
   APP LOAD হলে initApp() call করো
======================================== */
window.onload = initApp;
