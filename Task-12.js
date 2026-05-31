 const clock = document.getElementById("clock");


    setInterval(()=>{

        const time = new Date();


        let hour = time.getHours();

        let minute = time.getMinutes();

        let second = time.getSeconds();


        clock.textContent = 
        hour + ":" + minute + ":" + second;

    },1000);