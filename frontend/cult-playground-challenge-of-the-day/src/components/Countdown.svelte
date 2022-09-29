<script>
    import { onMount } from "svelte";

    export let deadline

    let cD = new Date();
    let utcFullYear = cD.getUTCFullYear();
    let utcMonth = cD.getUTCMonth();
    let utcDate = cD.getUTCDate();
    let month = utcMonth + 1;

    let hours;
    let minutes;
    let seconds;
    // Date.UTC(year, month, day, hours, minutes, seconds, millisec)

    let countDownString = "";

    onMount(async () => {


        // var countDownDate = new Date("sep 28, 2022 23:59:59").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = deadline - now;

            // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            //   document.getElementById("demo").innerHTML =

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
    });
</script>

Ends In: {hours}h {minutes}m {seconds}s
