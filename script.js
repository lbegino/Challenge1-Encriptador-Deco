
	function input() 
	{

		document.getElementById("msg1").value = " ";
		document.getElementById("msg").value = " ";



	}

	function copy() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy')


	}

	function encriptar() 

{
 event.preventDefault();
		var StringEncrypt = [];
		var input = document.querySelector("input"); //captura de a etiqueta inpu;
		var CheckString = /^[a-z ]+$/;
		var CheckedString = CheckString.test(input.value);

	if (CheckedString == true) {
		StringEncrypt1 = input.value;
	StringEncrypt = StringEncrypt1.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[a]/gi,'ai').replace(/[o]/gi,'ober').replace(/[u]/gi,'ufat');
		document.getElementById("msg").value = StringEncrypt;

		} else { 

	alert("No se permiten caracteres especiales, ni mayusculas");


}
}




	function desencriptar()
	{
 
		 event.preventDefault();

		var input2 = document.querySelector("input"); //captura de la etiqueta input
		var StringDecrypt = [];

		CadenaDecrypt = input2.value;				

		console.log(CadenaDecrypt);
		StringDecrypt = CadenaDecrypt.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u"); 
		console.log(StringDecrypt);
		document.getElementById("msg").value = StringDecrypt;

	}




