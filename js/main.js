;(function(){
	
	let sticky = false
	let currentPosition = 0
	const imageCant = parseInt($("[data-name='image-counter']").attr("content"))
	console.log(imageCant)

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	//setInterval(diHola,1000)
	setInterval(()=>{
		if(currentPosition < imageCant){
			currentPosition++	
		}else if(currentPosition == imageCant){
			currentPosition = 0
		}
		
		$("#gallery .inner").css({
			left:"-"+currentPosition*100+"%"
		})
	},4000)

	$(window).scroll(()=>{

		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//Cambiar la Navegación sticky
			console.log("Cambiar Navegacion")
			sticky= true
			stickNavigation()
		}else if(!inBottom && sticky){
			//Ocultar navegacion sticky
			console.log("Regresar Navegacion")
			sticky = false
			unStickNavigation()
		}
	})
	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		

		return $(window).scrollTop() > $(window).height() - (descriptionHeight*2)
	}

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown()
	}
	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("normal")
		$("#sticky-navigation").slideUp()
	}
})()
/*
	Acá se debe tener el código encapsulado dentro de la función, el paréntesis fuera de la
	llave sirve para que se auto llame la función.
*/