//the_chars = {"A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"}

var url = window.location.href;

if(url.startsWith("https://www.freeroms.com/roms/amiga_roms"){


}

if(url.startsWith("https://www.freeroms.com/roms/amstrad_cpc_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/atari")) {
	
}

if(url.startsWith("https://www.freeroms.com/roms/atari_jaguar"){
	
}

if(url.startsWith("https://www.freeroms.com/roms/atari_lynx"){
	
}

if(url.startsWith("https://www.freeroms.com/roms/colecovision_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/cps2_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/flash_games_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/game_gear_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/gameboy_advance_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/genesis_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/intellivision_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/mame_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/n64_roms")){
	
}

if(url.startsWith("https://www.freeroms.com/roms/nds_roms")){
	
}




if(window.location.href.length==39){
var amiga = "http://download.freeroms.com/amiga_roms/a/a-10tkiller.zip";
var n64 = "https://download.freeroms.com/n64-roms/"
var e = document.querySelectorAll("span[itemprop=name]")
var count = 0
var page = "https://www.freeroms.com/n64_roms_"
setInterval(function(){
	var string = e[count].innerText.toLowerCase()
	var arr = string.split("")
	var game=""
	for(i=0; i<arr.length; i++){
	
		if((arr[i]!=' ' && arr[i]!='-') && (arr[i]!='/')){
		game += arr[i]
		}
		
	}
	console.log(game)
    window.open(n64+"/1"+"/"+game+".zip")
     window.open(n64+"/2"+"/"+game+".zip")
     window.open(n64+"/3"+"/"+game+".zip")
     window.open(n64+"/4"+"/"+game+".zip")
    window.open(n64+"/5"+"/"+game+".zip")


    
    count++
   found = false
    if(count > e.length()){
    /*
    var ext = window.location.href.split()
     ext[34] = the_chars[the_chars.indexOf(exit[34])]+1]
     window.location.href = ext.toString()
     */
    
}
},3000)
}
else {
setTimeout(function(){window.close()},3000)
}



