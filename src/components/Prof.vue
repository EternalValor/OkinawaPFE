<template>
    <div>
    <div class="flex"> 
      <div class="photo">
        <img src="../assets/img/prof.jpg" height="500px"  /> 
        
      
     
 </div>
     <div class="info">
       <b>Mohamed Saidi</b>
       <ul>
       	<li>Président de la ligue Doukkala du karaté</li>
        <li>Président de l'association OKINAWA</li>
        <li>Entraineur au Club OCEJ Olympic Club El jadida depuis 1996</li>
        <li>5ème dan </li>
        <li>Juge africain</li>
        <li>Instructeur Féderal</li>
        
        <li>plus de 40 ans de pratique</li>

       </ul> 
      <b>Parcours</b>
        <dl>
          <dd> <b>1959/04/23 : </b> Né à Oujda </dd>
          <dd> <b>1978:</b> Mohammed Saidi a débuté le Karaté à Ouajda</dd>
          <dd><b>1988 :</b>Création de l'association OKINAWA ( bloc B N°42 Essaada 1 El jadida )  </dd>
          <dd><b></b> Entrainer chez Sensei BAHI AHMED à Oujda</dd>
          
        </dl>
     	 
  
     </div>
</div>
<hr width="60%"  size="2px" color="black" > 
<div class="instruction">
	<h1 class="tit">Albums</h1>
  <div class="pic" ><img src="../assets/img/pic1.jpg" /></div>
  <div class="pic" ><img src="../assets/img/pic2.jpg" /></div>
  <div class="pic" ><img src="../assets/img/pic3.jpg" /></div>

</div>
</div>
</template>
<style type="text/css" scoped>
:root{
  --primary:#339933;
}







hr{
	margin-left:20% 
}


.photo{
	/*border:1px solid #545454;*/
	width:30%;
	margin-left: 40px; 
	border-radius: 3px;
  background: transparent;
  
   /*box-shadow:0 8px 20px rgba(0,0,0,.5);*/ 
}

img{
	width:100%;
	background: transparent;
}
.nom{  
	
	color:black; 
	display: block;
	font-size: 1.8rem;
	font-weight: bold;
	width:100%;
	padding:10px 0;
	float:bottom;	    	
	text-align:center;
	z-index:100; 
}	
.flex{
  display:flex;
  flex-wrap: wrap;
	justify-content: center;
	align-items: center;
  background-color:transparent; 
}
.info{
    width:40%;
    height:500px; 
    
    margin:2% 10%;
    background-color:transparent;

}
hr{
  margin-bottom:7%;  
  margin-top:7%;
}

.instruction{
	width:80%;
	height:400px;
	margin:0 10%;
	padding:10px; 
	/*box-shadow: 0 5px 20px rgba(0,0,0,.5);*/
	
	border-radius:3px;
  display:flex;
  flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;


}
.esp{
	height:200px;
}
.tit{
  height:50px;
  width: 100%;
	margin:0;  
}
.pic {
	width:30%;
	height:300px;
	margin-top:10%; 
	margin-left:2% ;
	border:4px solid gray;

}
.pic img{
	box-sizing:border-box;
	height:100%   
}

@media (max-width: 700px) {
  .photo {
    width: 80%;
    margin-bottom: 5rem;
  }

  .info {
    margin-bottom: 10rem;
  }

  .instruction {
    text-align: center;
    flex-wrap: wrap;
  }

  .pic {
    width: 80%;
  }

}
	
</style>