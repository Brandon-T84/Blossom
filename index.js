
var countr = 0;
function reload() {
countr++;

if (countr > 1) {
    location.reload()
}
}


function TestsFunction() {
    var T = document.getElementById("border")
    var T2 = document.getElementById("border2")
    var T3 = document.getElementById("border3")
      var T4 = document.getElementById("border4")
      var T5 = document.getElementById("border5")
         var T6 = document.getElementById("border6")
          var T7 = document.getElementById("border7")
           var T8 = document.getElementById("border8")
                var T9 = document.getElementById("border9")
                var T10 = document.getElementById("border10")
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;

    if (T2.style.display == "")
        displayValue = "none";

    T2.style.display = displayValue;

    if (T3.style.display == "")
        displayValue = "none";

    T3.style.display = displayValue;

    if (T4.style.display == "")
        displayValue = "none";

    T4.style.display = displayValue;

     if (T5.style.display == "")
        displayValue = "none";

    T5.style.display = displayValue;

    if (T6.style.display == "")
        displayValue = "none";

    T6.style.display = displayValue;

    if (T7.style.display == "")
        displayValue = "none";

    T7.style.display = displayValue;

    if (T8.style.display == "")
        displayValue = "none";

    T8.style.display = displayValue;

     if (T9.style.display == "")
        displayValue = "none";

    T9.style.display = displayValue;

    if (T10.style.display == "")
        displayValue = "none";

    T10.style.display = displayValue;
}



$(document).ready(function() {
    $('#file-input').on('change', function(event) {
      testPicture(event.target.files[0]);
    });
});

     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        
var currentRequest;
function testPicture(image) {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = function() {
    const b64 = reader.result.toString().replace('data:image/jpeg;base64,', ''); 

    currentRequest = {
      'requests': [ {
        'image': { 'content': b64 },
        'features': [
          {
            // returns label + where on picture (x,y data)
            //'type': 'OBJECT_LOCALIZATION'
            // returns labels
            'type': 'LABEL_DETECTION',
            // maxResults: 1,
            // more features: https://cloud.google.com/vision/docs/other-features
          }
        ]
      }]
    };
   
  }
}

  function sendRequest() {
  
;
    $.ajax({
      method: 'POST',
      url:  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBttL3_rUfMaP8vZQazT8bCd5XhHkmR4lA",
      contentType: 'application/json',
      data: JSON.stringify(currentRequest),
      processData: false,
      success: function(data){
      
       
        var results = (JSON.stringify(data));

       

         var final = results.substring(results.indexOf('"description"')+14);

         var final2 = final.substring(0,final.indexOf('",'));

         document.getElementById('res1').innerHTML = (final2.substring(1, final2.length))

        var formattedString = results.split(",").join("\n")
var secondline = formattedString.split('\n');
// remove second line, starting at the first position
secondline.splice(0,5);
// join the array back into a single string
var finalsecondline = secondline.join('\n');



         var get2ndline = finalsecondline.substring(finalsecondline.indexOf('"description"')+14);

         var get2ndline2 = get2ndline.substring(0,get2ndline.indexOf('score'));

         finalget2ndline = get2ndline2.replace(/^"|"$/g, '');
                document.getElementById('res2').innerHTML = (finalget2ndline.substring(0, finalget2ndline.length-2))

         var thirdline = finalsecondline.split('\n');
// remove second line, starting at the first position
thirdline.splice(0,4);
// join the array back into a single string
var finalthirdline = thirdline.join('\n');



         var get3rdline = finalthirdline.substring(finalthirdline.indexOf('"description"')+14);

         var get3rdline2 = get3rdline.substring(0,get3rdline.indexOf('score'));


       

       finalget3rdline = get3rdline2.replace(/^"|"$/g, '');
       document.getElementById('res3').innerHTML = (finalget3rdline.substring(0, finalget3rdline.length-2))



         var fourthline = finalthirdline.split('\n');
// remove second line, starting at the first position
fourthline.splice(0,4);
// join the array back into a single string
var finalfourthline = fourthline.join('\n');



         var get4thline = finalfourthline.substring(finalfourthline.indexOf('"description"')+14);

         var get4thline2 = get4thline.substring(0,get4thline.indexOf('score'));


       

       finalget4thline = get4thline2.replace(/^"|"$/g, '');
       document.getElementById('res4').innerHTML = (finalget4thline.substring(0, finalget4thline.length-2))


         var fifthline = finalfourthline.split('\n');
// remove second line, starting at the first position
fifthline.splice(0,4);
// join the array back into a single string
var finalfifthline = fifthline.join('\n');



         var get5thline = finalfifthline.substring(finalfifthline.indexOf('"description"')+14);

         var get5thline2 = get5thline.substring(0,get5thline.indexOf('score'));


       

       finalget5thline = get5thline2.replace(/^"|"$/g, '');
       document.getElementById('res5').innerHTML = (finalget5thline.substring(0, finalget5thline.length-2))


        var sixthline = finalfifthline.split('\n');
// remove second line, starting at the first position
sixthline.splice(0,4);
// join the array back into a single string
var finalsixthline = sixthline.join('\n');



         var get6thline = finalsixthline.substring(finalsixthline.indexOf('"description"')+14);

         var get6thline2 = get6thline.substring(0,get6thline.indexOf('score'));


       

       finalget6thline = get6thline2.replace(/^"|"$/g, '');
       document.getElementById('res6').innerHTML = (finalget6thline.substring(0, finalget6thline.length-2))


       var eighthline = finalsixthline.split('\n');
// remove second line, starting at the first position
eighthline.splice(0,4);
// join the array back into a single string
var finaleighthline = eighthline.join('\n');



         var get7thline = finaleighthline.substring(finaleighthline.indexOf('"description"')+14);

         var get7thline2 = get7thline.substring(0,get7thline.indexOf('score'));


       

       finalget7thline = get7thline2.replace(/^"|"$/g, '');
       document.getElementById('res7').innerHTML = (finalget7thline.substring(0, finalget7thline.length-2))


              var eighthline = finaleighthline.split('\n');
// remove second line, starting at the first position
eighthline.splice(0,4);
// join the array back into a single string
var finaleighthline = eighthline.join('\n');



         var get8thline = finaleighthline.substring(finaleighthline.indexOf('"description"')+14);

         var get8thline2 = get8thline.substring(0,get8thline.indexOf('score'));


       

       finalget8thline = get8thline2.replace(/^"|"$/g, '');
       document.getElementById('res8').innerHTML = (finalget8thline.substring(0, finalget8thline.length-2))


          var ninthline = finaleighthline.split('\n');
// remove second line, starting at the first position
ninthline.splice(0,4);
// join the array back into a single string
var finalninthline = ninthline.join('\n');



         var get9thline = finalninthline.substring(finalninthline.indexOf('"description"')+14);

         var get9thline2 = get9thline.substring(0,get9thline.indexOf('score'));


       

       finalget9thline = get9thline2.replace(/^"|"$/g, '');
       document.getElementById('res9').innerHTML = (finalget9thline.substring(0, finalget9thline.length-2))



          var tenthline = finalninthline.split('\n');
// remove second line, starting at the first position
tenthline.splice(0,4);
// join the array back into a single string
var finaltenthline = tenthline.join('\n');



         var get10thline = finaltenthline.substring(finaltenthline.indexOf('"description"')+14);

         var get10thline2 = get10thline.substring(0,get10thline.indexOf('score'));


       

       finalget10thline = get10thline2.replace(/^"|"$/g, '');
       document.getElementById('res10').innerHTML = (finalget10thline.substring(0, finalget10thline.length-2))

       var firstsplitlines = formattedString.split('\n');
       firstsplitlines.splice(0,2);
       var finalfirstsplitlines = firstsplitlines.join('\n')


       var getS1stline = finalfirstsplitlines.substring(finalfirstsplitlines.indexOf('"score":')+8);

         var getS1stline2 = getS1stline.substring(0,getS1stline.indexOf('topicality'));


       

       finalgetS1stline = getS1stline2.replace(/^"|"$/g, '');

   
       document.getElementById('name').innerHTML =  parseFloat(finalgetS1stline.substring(0, finalgetS1stline.length-6)).toFixed(2)*100+"%";
       var filler = document.getElementById('filler')

       filler.style.width =  parseFloat(finalgetS1stline.substring(0, finalgetS1stline.length-6))*100+"%";



         var secondsplitlines = finalfirstsplitlines.split('\n');
       secondsplitlines.splice(0,4);
       var finalsecondsplitlines = secondsplitlines.join('\n')

  

       var getS2ndline = finalsecondsplitlines.substring(finalsecondsplitlines.indexOf('"score":')+8);

         var getS2ndline2 = getS2ndline.substring(0,getS2ndline.indexOf('topicality'));


       

       finalgetS2ndline = getS2ndline2.replace(/^"|"$/g, '');
       var final2ndlineline = parseFloat(finalgetS2ndline.substring(0, finalgetS2ndline.length-6)).toFixed(2);

 document.getElementById('name2').innerHTML =  final2ndlineline*100+"%";
       var filler2 = document.getElementById('filler2')

       filler2.style.width =  parseFloat(finalgetS2ndline.substring(0, finalgetS2ndline.length-6))*100+"%";
       
         var thirdsplitlines = finalsecondsplitlines.split('\n');
       thirdsplitlines.splice(0,4);
       var finalthirdsplitlines = thirdsplitlines.join('\n')


       var getS3rdline = finalthirdsplitlines.substring(finalthirdsplitlines.indexOf('"score":')+8);

         var getS3rdline2 = getS3rdline.substring(0,getS3rdline.indexOf('topicality'));


       

       finalgetS3rdline = getS3rdline2.replace(/^"|"$/g, '');
       var final3rdlineline = parseFloat(finalgetS3rdline.substring(0, finalgetS3rdline.length-6)).toFixed(2);
document.getElementById('name3').innerHTML =  final3rdlineline*100+"%";
       var filler3 = document.getElementById('filler3')

       filler3.style.width =  final3rdlineline*100+"%";

          var fourthsplitlines = finalthirdsplitlines.split('\n');
       fourthsplitlines.splice(0,4);
       var finalfourthsplitlines = fourthsplitlines.join('\n')

      

       var getS4thline = finalfourthsplitlines.substring(finalfourthsplitlines.indexOf('"score":')+8);

         var getS4thline2 = getS4thline.substring(0,getS4thline.indexOf('topicality'));


       

       finalgetS4thline = getS4thline2.replace(/^"|"$/g, '');
       var final4thlineline = parseFloat(finalgetS4thline.substring(0, finalgetS4thline.length-6)).toFixed(2);
document.getElementById('name4').innerHTML =  final4thlineline*100+"%";
       var filler4 = document.getElementById('filler4')

       filler4.style.width =  final4thlineline*100+"%";

            var fifthsplitlines = finalfourthsplitlines.split('\n');
       fifthsplitlines.splice(0,4);
       var finalfifthsplitlines = fifthsplitlines.join('\n')

   

       var getS5thline = finalfifthsplitlines.substring(finalfifthsplitlines.indexOf('"score":')+8);

         var getS5thline2 = getS5thline.substring(0,getS5thline.indexOf('topicality'));


       

       finalgetS5thline = getS5thline2.replace(/^"|"$/g, '');
       var final5thlineline = parseFloat(finalgetS5thline.substring(0, finalgetS5thline.length-6)).toFixed(2);

       document.getElementById('name5').innerHTML =  final5thlineline*100+"%";
       var filler5 = document.getElementById('filler5')

       filler5.style.width =  final5thlineline*100+"%";


       var sixthsplitlines = finalfifthsplitlines.split('\n');
       sixthsplitlines.splice(0,4);
       var finalsixthsplitlines = sixthsplitlines.join('\n')

   

       var getS6thline = finalsixthsplitlines.substring(finalsixthsplitlines.indexOf('"score":')+8);

         var getS6thline2 = getS6thline.substring(0,getS6thline.indexOf('topicality'));


       

       finalgetS6thline = getS6thline2.replace(/^"|"$/g, '');
       var final6thlineline = parseFloat(finalgetS6thline.substring(0, finalgetS6thline.length-6)).toFixed(2);

 document.getElementById('name6').innerHTML =  final6thlineline*100+"%";
       var filler6 = document.getElementById('filler6')

       filler6.style.width =  final6thlineline*100+"%";
       var seventhsplitlines = finalsixthsplitlines.split('\n');
       seventhsplitlines.splice(0,4);
       var finalseventhsplitlines = seventhsplitlines.join('\n')

   

       var getS7thline = finalseventhsplitlines.substring(finalseventhsplitlines.indexOf('"score":')+8);

         var getS7thline2 = getS7thline.substring(0,getS7thline.indexOf('topicality'));


       

       finalgetS7thline = getS7thline2.replace(/^"|"$/g, '');
      var final7thlineline = parseFloat(finalgetS7thline.substring(0, finalgetS7thline.length-6)).toFixed(2);
document.getElementById('name7').innerHTML =  final7thlineline*100+"%";
       var filler7 = document.getElementById('filler7')

       filler7.style.width =  final7thlineline*100+"%";
       var eighthsplitlines = finalseventhsplitlines.split('\n');
       eighthsplitlines.splice(0,4);
       var finaleighthsplitlines = eighthsplitlines.join('\n')

   

       var getS8thline = finaleighthsplitlines.substring(finaleighthsplitlines.indexOf('"score":')+8);

         var getS8thline2 = getS8thline.substring(0,getS8thline.indexOf('topicality'));


       

       finalgetS8thline = getS8thline2.replace(/^"|"$/g, '');
       var final8thlineline = parseFloat(finalgetS8thline.substring(0, finalgetS8thline.length-6)).toFixed(2);
document.getElementById('name8').innerHTML =  final8thlineline*100+"%";
       var filler8 = document.getElementById('filler8')

       filler8.style.width =  final8thlineline*100+"%";
 var ninthsplitlines = finaleighthsplitlines.split('\n');
       ninthsplitlines.splice(0,4);
       var finalninthsplitlines = ninthsplitlines.join('\n')

   

       var getS9thline = finalninthsplitlines.substring(finalninthsplitlines.indexOf('"score":')+8);

         var getS9thline2 = getS9thline.substring(0,getS9thline.indexOf('topicality'));


       

            finalgetS9thline = getS9thline2.replace(/^"|"$/g, '');
       var final9thlineline = parseFloat(finalgetS9thline.substring(0, finalgetS9thline.length-6)).toFixed(2);
document.getElementById('name9').innerHTML =  final9thlineline*100+"%";
       var filler9 = document.getElementById('filler9')

       filler9.style.width =  final9thlineline*100+"%";


       var tenthsplitlines = finalninthsplitlines.split('\n');
       tenthsplitlines.splice(0,4);
       var finaltenthsplitlines = tenthsplitlines.join('\n')

   

       var getS10thline = finaltenthsplitlines.substring(finaltenthsplitlines.indexOf('"score":')+8);

         var getS10thline2 = getS10thline.substring(0,getS10thline.indexOf('topicality'));


       

       finalgetS10thline = getS10thline2.replace(/^"|"$/g, '');
       var final10thlineline = parseFloat(finalgetS10thline.substring(0, finalgetS10thline.length-6)).toFixed(2);

document.getElementById('name10').innerHTML =  final10thlineline*100+"%";
       var filler10 = document.getElementById('filler10')

       filler10.style.width =  final10thlineline*100+"%";

      },
      error: function (data, textStatus, errorThrown) {
        alert("An error occurred")
      },
    });
  };



var check1;
var check2;
var check3;
var check4;
var check5;
var check6;
var check7;
var check8;
var check9;
var check10;
  function getres1() {
    check1 = true;
     check2 = false;
     check3 = false;
check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres1 = document.getElementById('res1').innerHTML;
 return getres1;


  }

     function getres2() {
      check1 = false;
      check2 = true;
check3 = false;
check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres2 = document.getElementById('res2').innerHTML;
 return getres2;
  }


  function getres3() {
      check1 = false;
      check2 = false;
      check3 = true;
      check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres3 = document.getElementById('res3').innerHTML;
 return getres3;
  }

 
function getres4() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = true;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres4 = document.getElementById('res4').innerHTML;
 return getres4;
  }

  function getres5() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = true;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres5 = document.getElementById('res5').innerHTML;
 return getres5;
  }

    function getres6() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = false;
check6 = true;
check7 = false;
check8 = false;
check9 = false;
check10 = false;
    var getres6 = document.getElementById('res6').innerHTML;
 return getres6;
  }
    function getres7() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = false;
check6 = false;
check7 = true;
check8 = false;
check9 = false;
check10 = false;
    var getres7 = document.getElementById('res7').innerHTML;
 return getres7;
  }

    function getres8() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = true;
check9 = false;
check10 = false;
    var getres8 = document.getElementById('res8').innerHTML;
 return getres8;
  }

  function getres9() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = true;
check10 = false;
    var getres9 = document.getElementById('res9').innerHTML;
 return getres9;
  }


  function getres10() {
      check1 = false;
      check2 = false;
      check3 = false;
      check4 = false;
check5 = false;
check6 = false;
check7 = false;
check8 = false;
check9 = false;
check10 = true;
    var getres10 = document.getElementById('res10').innerHTML;
 return getres10;
  }
var controller = {
  init: function init() {
    controller.setupListener();
    controller.setupRandomListener();

  },

  getArticle: function getArticle() {
    var inputValue = $("#search-box").val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch=";


if (check1 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres1();

    
}

if (check2 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres2();

    
}

if (check3 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres3();

    
}

if (check4 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres4();

    
}

if (check5 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres5();

    
}

if (check6 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres6();

    
}

if (check7 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres7();

    
}

if (check8 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres8();

    
}

if (check9 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres9();

    
}

if (check10 == true){
  url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=max&inprop=url&generator=search&format=json&gsrsearch="+getres10();

    
}
console.log(url)
    $.ajax({
      url: url,
      dataType: 'jsonp'
    })
    .done(function(data) {
      var wikiData = data.query.pages;
      view.clearEntries();
      view.renderResults(wikiData);
    });
  },

  getRandomArticle: function getRandomArticle() {
    var url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exsentences=1&exintro&explaintext&exlimit=1&inprop=url&generator=random&grnnamespace=0&grnlimit=1&format=json"

    $.ajax({
      url: url,
      dataType: 'jsonp'
    })
    .done(function(data) {
      var randomWikiData = data.query.pages;
      view.clearEntries();
      view.renderResults(randomWikiData);

    });
  },

  setupListener: function setupListener() {
    $("#res1").click(function searchClick() {
      controller.getArticle();

    });

      $("#res2").click(function searchClick() {
      controller.getArticle();

    });

       $("#res3").click(function searchClick() {
      controller.getArticle();

    });

         $("#res4").click(function searchClick() {
      controller.getArticle();

    });

             $("#res5").click(function searchClick() {
      controller.getArticle();

    });

             $("#res6").click(function searchClick() {
      controller.getArticle();

    });


             $("#res7").click(function searchClick() {
      controller.getArticle();

    });


             $("#res8").click(function searchClick() {
      controller.getArticle();

    });

                 $("#res9").click(function searchClick() {
      controller.getArticle();

    });

                          $("#res10").click(function searchClick() {
      controller.getArticle();

    });
  },

  setupRandomListener: function setupRandomListener() {
    $("#search-random").click(function randomClick() {
      controller.getRandomArticle();
    });
  }

}
var counter = 0;
var view = {
  renderEntry: function renderEntry(title, fullURL, extract, index) {
    var titleHTML = '<div class="article-entry"><h2 class="article-title"><a href="' + fullURL + '" target="_blank">' + title + '</a></h2>';
    var extractHTML = '<p>' + extract + '</p></div>';
    console.log(index)
    if (index == 1){
    $(".container-main-articles2").append(titleHTML + extractHTML);
  }
    counter++;
  },



  renderResults: function renderResults(dataObj) {
    for(x in dataObj) {
      view.renderEntry(dataObj[x]["title"], dataObj[x]["fullurl"], dataObj[x]["extract"], dataObj[x]["index"]) ;

      console.log(dataObj[x])
      console.log(dataObj[19828134])
       
console.log(dataObj[x]["index"])
    }
  },

  clearEntries: function clearEntries() {
    $(".container-main-articles2").empty();
  }

}

controller.init();
