// write data
var data = {
  bees: [
    {
      beeTitle: "Bombias",
      beeInfo: "A bumblebee is a member of the genus Bombus, part of Apidae, one of the bee families. This genus is the only extant group in the tribe Bombini, though a few extinct related genera are known from fossils",
      beeImage: "http://thehoneybeeconservancy.org/wp-content/uploads/2016/01/%C2%A9CC-Bumble-Bee-Courtesy-of-Marilyn-Peddle-1024x768.jpg"
    }, {
      beeTitle: "Kallobom",
      beeInfo: "Over 250 species of bumblebee are known.[1] They are found primarily in higher altitudes or latitudes in the Northern Hemisphere, although they are also found in South America where a few lowland tropical species have been identified.",
      beeImage: "http://iraneconomist.com/images/fanavari/zanbour.jpg"
    }, {
      beeTitle: "Alpinobombus",
      beeInfo: "European bumblebees have also been introduced to New Zealand and Tasmania. The brood parasitic or cuckoo bumblebees have sometimes been classified as a subgenus or genus, Psithyrus, but are now usually treated as members of Bombus.",
      beeImage: "https://s-media-cache-ak0.pinimg.com/736x/94/3e/da/943edae26c3e416802b72f210a283ec1.jpg"
    }
  ]
};




$("#menu li.bombias").on('click', function(){
  $( "#content p" ).replaceWith( "<p>" + data.bees[0].beeInfo + "</p>" );
  //$( "" ).css( "background-image", "url(" '+ ' " );
  $('#bee').css('background-image', 'url("' + data.bees[0].beeImage + '")');

});