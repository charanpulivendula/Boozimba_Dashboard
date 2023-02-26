$(document).ready(function () {
    
    
    
    $('#photos img:gt(0)').hide();
    setInterval(function runIt() {
        
        var current=$('#photos img:visible');
        var next=current.next().length ? current.next():$('#photos img:eq(0)');
        current.fadeOut(1000);
        
        next.fadeIn(1000);
        next.hover(function () {
            // current=$('#photos img:eq(0)');
            // next=$('#photos img:eq(0)');
            current.css('transform','scale(1.1)');
            next.css('transform','scale(1.1)');

            current.css('-webkit-filter','drop-shadow(5px 5px  #990000');
            current.css('filter','drop-shadow(5px 5px  #990000)')
            
            next.css('-webkit-filter','drop-shadow(5px 5px  #00394d');
            next.css('filter','drop-shadow(5px 5px  #00394d)')
            

            // -webkit-filter: drop-shadow(5px 5px 5px #222222);
            // filter: drop-shadow(5px 5px 5px #222222);
            
        },function () {
        //     var current=$('#photos img:visible');
        // var next=current.next().length ? current.next():$('#photos img:eq(0)');
            next.css('transform','');
            current.css('transform','');
            current.css('-webkit-filter','');
            current.css('filter','')
            next.css('-webkit-filter','');
            next.css('filter','')
            

            
        })
        
  
        
    },3000)
   

    
    
    
  
})