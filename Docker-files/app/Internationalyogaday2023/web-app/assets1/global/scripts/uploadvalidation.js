
/*------------------------------Upload Picture------------------------------*/




	<script type="text/javascript">
	alert("hi")
	$('#file').on('change', function() {
		 var numb = $(this)[0].files[0].size/1024/1024; //count file size
		var resultid = $(this).val().split(".");
		var gettypeup  = resultid [resultid.length-1]; // take file type uploaded file
		var filetype = $(this).attr('data-file_types'); // take allowed files from input
		var allowedfiles = filetype.replace(/\|/g,', '); // string allowed file
		var filesize = 0.5; //2MB
		var onlist = $(this).attr('data-file_types').indexOf(gettypeup) > -1;
		var checkinputfile = $(this).attr('type');
		numb = numb.toFixed(2);

		if (onlist && numb <= filesize) {
					$('#alert').html('The file is ready to upload').removeAttr('class').addClass('xd2'); //file OK
		   } else {
		   if(numb >= filesize && onlist){
		  $(this).val(''); //remove uploaded file
		      $('#alert').html('Added file is too big \(' + numb + ' MB\) - max file size '+ filesize +' MB').removeAttr('class').addClass('xd'); //alert that file is too big, but type file is ok
		      } else if(numb < filesize && !onlist) {
		     $(this).val(''); //remove uploaded file
		      $('#alert').html('An not allowed file format has been added \('+ gettypeup +') - allowed formats: ' + allowedfiles).removeAttr('class').addClass('xd'); //wrong type file
		      } else if(!onlist) {
		    $(this).val(''); //remove uploaded file
		      $('#alert').html('An not allowed file format has been added \('+ gettypeup +') - allowed formats: ' + allowedfiles).removeAttr('class').addClass('xd'); //wrong type file
		      }
		   }
		})

	</script>

		


		