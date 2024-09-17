<script>
    let isLightMode = false;
  
    function toggleTheme() {
      isLightMode = !isLightMode;
      document.body.classList.toggle('light-mode', isLightMode);
    }
  </script>
  
<nav>
    <a href="/">hai</a>
    <a href="/devour">devour</a>
    <a href="/linky">linky</a>
    <a href="#" on:click|preventDefault={toggleTheme}>
        {isLightMode ? '電気消して！' : '電気つけて！'}
    </a>
</nav>

<!-- 
    first one is turn the lights off, switch to dark mode 
    second one is turn the lights on, switch to light mode 
-->
    
<style>
  
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
    a {
        color: #ea9ae5; 
        text-decoration: none;
        word-wrap: break-word;
        text-align: center;
        font-size: 13px;
        margin: 0 10px;
    }
    </style>