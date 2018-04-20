/* dollar
kurung buka
ketik function
kurung buka
geser kanan 1x
kurung kurawal buka
enter*/

$(function(){
	//ganti judul
	$("h2").text("Resep Bala-bala");

	//tambah list
	$("#bahan").append("<li>Sayuran</li>");
})

	//tambah list dengan inputan
	$("#tambah").click(function(){

		//ambil nilai dari input id bahanbaru
		var bahan = $("#bahanbaru").val();

		// jangan tambahkan data bahanbaru ke list
		if (bahan.trim() == "") return false;
		$("#bahan").append();

		//tambah data yg telah diinput ke id bahanbaru kedalam list/id bahan
		$("#bahan").append("<li>"+bahan+"</li>");
		
		//bersihkan input
		$("#bahanbaru").val("").focus();
	})

	//jalankan aksi klik bila tombol enter ditekan
	$("#bahanbaru").keypress(function(e){
		var key = e.which;
		if(key == 13){
			$("#tambah").click();
		}
	})