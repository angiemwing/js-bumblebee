// write data
var data = {
  bees: [
    {
      beeTitle: "Bombias",
      beeInfo: "A bumblebee is a member of the genus Bombus, part of Apidae, one of the bee families. This genus is the only extant group in the tribe Bombini, though a few extinct related genera are known from fossils.",
      beeImage: "http://houseofevvie.com/wp-content/uploads/2017/08/bombus1.png"
    }, {
      beeTitle: "Kallobom",
      beeInfo: "Over 250 species of bumblebee are known.[1] They are found primarily in higher altitudes or latitudes in the Northern Hemisphere, although they are also found in South America where a few lowland tropical species have been identified.",
      beeImage: "http://houseofevvie.com/wp-content/uploads/2017/08/bombus2.png"
    }, {
      beeTitle: "Alpinobombus",
      beeInfo: "European bumblebees have also been introduced to New Zealand and Tasmania. The brood parasitic or cuckoo bumblebees have sometimes been classified as a subgenus or genus, Psithyrus, but are now usually treated as members of Bombus.",
      beeImage: "http://houseofevvie.com/wp-content/uploads/2017/08/bombus3.png"
    }
  ]
};




$("#menu li.bombias").on('click', function(){
  $( "#content p" ).replaceWith( "<p>" + data.bees[0].beeInfo + "</p>" );
  $('#bee').css('background-image', 'url("' + data.bees[0].beeImage + '")');
});
  

$("#menu li.kallobom").on('click', function(){
  $( "#content p" ).replaceWith( "<p>" + data.bees[1].beeInfo + "</p>" );
  $('#bee').css('background-image', 'url("' + data.bees[1].beeImage + '")');
});

$("#menu li.alpimobombus").on('click', function(){
  $( "#content p" ).replaceWith( "<p>" + data.bees[2].beeInfo + "</p>" );
  $('#bee').css('background-image', 'url("' + data.bees[2].beeImage + '")');
});