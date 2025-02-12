const burger = document.getElementById('burger')
        const nav = document.getElementById('nav')

        burger.addEventListener('click', () => {
            burger.classList.toggle('close')
            nav.classList.toggle('open')
        })