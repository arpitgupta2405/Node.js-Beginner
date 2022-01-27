var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
const links=["http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
"https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
"https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
"https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
"https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
"https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
]

for(let i=0;i<links.length;i++){
    console.log(i);
    if(i<5)
    {download(links[i],`./folder1/${i}.jpg`,function(){
        console.log('done');
    });
    }
    else{
        download(links[i],`./folder2/${i}.jpg`,function(){
            console.log('done');
    });
    }
}
