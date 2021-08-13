$(document).ready(function () {

  $('#example').DataTable({
 
    columnDefs: [
      { type: 'turkish', targets: [0, 1] }
    ],

    dom: 'lBfrtip',

    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],

    "scrollX": true,

    "footerCallback": function () {
      var api = this.api();
      var toplam_deger = $("#xxx").html();

      $(api.columns([0, 1, 2, 3, 4]).footer()).html("");
      $(api.columns(5).footer()).html(toplam_deger);
    }

  });
});

// $(document).ready(function () {
//   var oTable = $('#example').DataTable();

//   var newData;

//   $('#example tbody').on('click', 'tr', function () {
//     $(this).toggleClass('selected');
//     var pos = oTable.row(this).index();
//     var row = oTable.row(pos).data();
//     var xx = oTable.rows('.selected').data();
//     console.log("data: " + pos);
//     var myData = oTable.rows('.selected').data().toArray();
//     console.log(myData);
//     var newArr = [];

//     for (var i = 0; i < myData.length; i++) {
//       newArr.push(myData[i][0]);
//     }
//     console.log(newArr);
//     newData = newArr.join();
//   });
//   $('#button').click(function () {
//     alert(newData);
//   });
// });

$(document).ready(function() {
  var table = $('#example').DataTable();

  $('#example tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
  } );

  $('#myBtn2').click( function () {
      table.row('.selected').remove().draw( false );
  });
  
  $('#myBtn3').click( function () {
    table.row( 
      [
      $('#name').val(),
      $('#position').val(),
      $('#office').val(),
      $('#age').val(),
      $('#date').val(),
      $('#salary').val()
    ] 
    ).edit();
} );

});

$(document).ready(function () {

  var dTable = $('#example').DataTable();

  $('#addbtn').on('click', function () {
    dTable.row.add(
      [
      $('#name').val(),
      $('#position').val(),
      $('#office').val(),
      $('#age').val(),
      $('#date').val(),
      $('#salary').val()
    ]
  ).draw();
  document.getElementById('name').value="";
  document.getElementById('position').value="";
  document.getElementById('office').value="";
  document.getElementById('age').value="";
  document.getElementById('date').value="";
  document.getElementById('salary').value="";
  });

});


 
















function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById('btnopen').style.visibility = 'hidden';
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById('btnopen').style.visibility = 'visible';
}

function closeLine() {

  document.body.classList.toggle('sideNavActive');
  document.getElementById('icerik').style.visibility = 'hidden';

}


////row adding

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal({show: true});
  });
  $("#myBtn2").click(function(){
    $("#myModal2").modal({show: false});
  });
});
$("#myBtn3").click(function(){
  $("#myModal3").modal({show: false});
});

