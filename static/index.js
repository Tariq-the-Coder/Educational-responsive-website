// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

   
  //  INCREAMENT COUNTER 


  const counters = document.querySelectorAll('.counter')

  counters.forEach((counter) =>{
    counter.innerHTML = 0;

    const updateCounter = () => {
      const targetCount = +counter.getAttribute('data-target')
      // console.log(targetCount)

      const startingCount = Number(counter.innerHTML);

      const incr = targetCount/100;

      if (startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter, 500)
        
      } else {
        counter.innerHTML = targetCount;
      }
    }

    updateCounter();
  })
  

