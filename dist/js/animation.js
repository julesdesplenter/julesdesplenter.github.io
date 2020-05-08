document.addEventListener('DOMContentLoaded',() => {
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
        path: '/dist/assets/crown.json'
      })

      var animation = bodymovin.loadAnimation({
        container: document.getElementById('an-ok'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dist/assets/okay.json'
      })

      var animation_burger = bodymovin.loadAnimation({
        container: document.getElementById('an-burger'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/dist/assets/burger.json'
      })

      var animation_scooter = bodymovin.loadAnimation({
        container: document.getElementById('an-scooter'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dist/assets/scooter.json'
      })

      var animation_location = bodymovin.loadAnimation({
        container: document.getElementById('an-location'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dist/assets/location.json'
      })
      checkAnimations(animation_burger,animation_scooter,animation_location);
})


checkLocation = (obj,burger) => {
  console.log(obj.getBoundingClientRect().y)

  if(50 < obj.getBoundingClientRect().y && obj.getBoundingClientRect().y < 400)
  
  {
    console.log("play");
    burger.play();
  }else{
    console.log("stop");
    burger.stop();
  }
}

checkAnimations = (burger,scooter,location) =>
{
  var burger_location = document.getElementById('an-burger')
  var scooter_location = document.getElementById('an-scooter')
  var location_location = document.getElementById('an-location')

  let bruger_interval = setInterval(() => checkLocation(burger_location,burger),500);
  let scooter_interval = setInterval(() => checkLocation(scooter_location,scooter),500);
  let location_interval = setInterval(() => checkLocation(location_location,location),500);
}
