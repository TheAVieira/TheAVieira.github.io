$(document).ready(function(){
    $('.imageflipperFade').each(function() {
        var $this = $(this);
        var $imgs = $this.find('img');
        var $imgCount = $imgs.length;
        var $currentImgIndex = 0;
        var interval;

        // Function to start the animation
        function startAnimation() {
            $imgs.hide().eq($currentImgIndex).show(); // Ensure current image is shown when animation restarts
            interval = setInterval(function() {
                $imgs.eq($currentImgIndex).fadeOut(200, function() {
                    $currentImgIndex = ($currentImgIndex + 1) % $imgCount;
                    $imgs.hide().eq($currentImgIndex).fadeIn(200);
                });
            }, 6000); // Adjust time as needed
        }

        // Function to stop the animation
        function stopAnimation() {
            clearInterval(interval);
        }

        // Initially start the animation
        startAnimation();

        // Use hover to stop/start the animation on mouse enter/leave
        $this.hover(
            function() { // Mouse enters the element
                stopAnimation();
            }, 
            function() { // Mouse leaves the element
                startAnimation();
            }
        );
    });
});

$(document).ready(function(){
    $('.imageflipper').each(function() {
        var $this = $(this);
        var $imgs = $this.find('img');
        var $imgCount = $imgs.length;
        var $currentImgIndex = 0;

        $imgs.hide().first().show(); // Hide all images, then show the first

        setInterval(function() {
            $imgs.eq($currentImgIndex).hide();
            $currentImgIndex = ($currentImgIndex + 1) % $imgCount;
            $imgs.eq($currentImgIndex).show();
        }, 4000); // Change image every 6 seconds for each span separately
    });
});