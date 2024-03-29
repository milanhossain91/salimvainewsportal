this.addEventListener('install', function(event) {
    //console.log('installing....');
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll(['/']);
        })
    );
});

this.addEventListener('fetch', function(event) {

    event.respondWith(

        caches.open('v1').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});


this.addEventListener('activate', function activator(event) {
    //console.log('activate!');

    event.waitUntil(

        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf('v1') !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});