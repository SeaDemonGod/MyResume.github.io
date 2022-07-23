var naviMenuAnchorTags = document.querySelectorAll('.navi a');

for(var i=0;naviMenuAnchorTags.length;i++){
    naviMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

       
        var interval = setInterval(function(){

            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);

        },30);



    })
}


