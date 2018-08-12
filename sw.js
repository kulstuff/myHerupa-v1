var CACHE_STATIC_NAME= 'static-v2';
var CACHE_DYNAMIC_NAME= 'dynamic-v2';
  self.addEventListener('install',function(event){
  console.log('[Service Worker] Installing Service Worker ...',event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
     .then(function(cache){
       console.log('[Service Worker] Precaching App Shell');
       cache.addAll([
         '/',
         '/index.html',
         'https://fonts.googleapis.com/css?family=Raleway',
         '/offline.html',
         '/pages/coming-up.html',
         '/pages/first-year.html',
         '/pages/gpa.html',
         '/pages/second-year.html',
         '/pages/societies.html',
         '/pages/time-table.html',
         '/pages/wifi.html',
         '/pages/streams/biotech.html',
         '/pages/streams/chemical.html',
         '/pages/streams/civil.html',
         '/pages/streams/computer.html',
         '/pages/streams/ece.html',
         '/pages/streams/electrical.html',
         '/pages/streams/electronics.html',
         '/pages/streams/enc.html',
         '/pages/streams/mech.html',
         '/pages/streams/mechatronics.html',
         '/pages/streams/production.html',
         '/pages/subjects/first-year/chem.html',
         '/pages/subjects/first-year/com.html',
         '/pages/subjects/first-year/cs1.html',
         '/pages/subjects/first-year/cs2.html',
         '/pages/subjects/first-year/draw1.html',
         '/pages/subjects/first-year/draw2.html',
         '/pages/subjects/first-year/electrical.html',
         '/pages/subjects/first-year/electronics.html',
         '/pages/subjects/first-year/env.html',
         '/pages/subjects/first-year/maths1.html',
         '/pages/subjects/first-year/maths2.html',
         '/pages/subjects/first-year/mech.html',
         '/pages/subjects/first-year/phy.html',
         '/css/main.css',
         '/css/timet.css',
         '/img/icons/arrow.png',
         '/img/icons/navHovD.png',

         '/js/script.js',
         '/js/Scrollify-master/jquery.scrollify.js',
         '/js/subjectsMenu.js'
       ]);
     })
   )
});

self.addEventListener('activate',function(event){
  console.log('[Service Worker] Activating Service Worker ...',event);
  event.waitUntil(
    caches.keys()
    .then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key!==CACHE_STATIC_NAME && key!==CACHE_DYNAMIC_NAME){
          console.log('[Service Worker] Removing old cache.',key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response){
        return response;
      }else{
        return fetch(event.request)
          .then(function(res) {
            return caches.open(CACHE_DYNAMIC_NAME)
            .then(function(cache){
              cache.put(event.request.url, res.clone());
              return res;
            })
          })
          .catch(function(err){
              return caches.open(CACHE_STATIC_NAME)
               .then(function(cache){
                if(event.request.headers.get('accept').includes('text/html')){
                   return cache.match('/offline.html');
               }
              });
          });
      }
    })
  );

});
