document.addEventListener('DOMContentLoaded',() => {
    console.log("fun");
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-shop'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dist/assets/shop.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-crown'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/takeaway/dist/assets/crown.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-ok'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/takeaway/dist/assets/okay.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-burger'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/takeaway/dist/assets/burger.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-scooter'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/takeaway/dist/assets/scooter.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-location'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/takeaway/dist/assets/location.json'
      })
})
