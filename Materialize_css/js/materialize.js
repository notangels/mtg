document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });