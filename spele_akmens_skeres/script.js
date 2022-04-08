// JavaScript Document


var enemy_choice_now;



function change_img()
{
   //alert(  document.getElementById('p1_sel').value );

   var selected = document.getElementById('p1_sel').value;
	
	

   if( selected == 'paper' )
	   {
	   document.getElementById('p1_img').src='img/paper.png';
	   }

   if( selected == 'rock' )
	   {
	   document.getElementById('p1_img').src='img/rock.png';
	   }
	
   if( selected == 'scissors' )
	   {
	   document.getElementById('p1_img').src='img/scissors.png';
	   }

   if( selected == 'rock' )
	   {
	   document.getElementById('p1_img').src='img/rock.png';
	   }	   
	   
	   
}//te beidzas change_img()
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////

function enemy_choice()
{
	var choices = Array();
	choices[0] = 'rock';
	choices[1] = 'paper';
	choices[2] = 'scissors';
	
	
	min = 0;
	max = 2;
	
	random = Math.random() * (max - min + 1) + min;
	random = Math.floor(random);
	
	selected = choices[random];
	enemy_choice_now = selected;
	

   if( selected == 'rock' )
	   {
	   document.getElementById('p2_img').src='img/rock.png';
	   }
	
   if( selected == 'scissors' )
	   {
	   document.getElementById('p2_img').src='img/scissors.png';
	   }

   if( selected == 'paper' )
	   {
	   document.getElementById('p2_img').src='img/paper.png';
	   }
	

	get_winner();
	
}//te beidzas enemy_choice()




function get_winner()
{
	var player_choice = document.getElementById('p1_sel').value;
	
	//alert(enemy_choice_now);
	
	if(player_choice == enemy_choice_now)
		{
			alert("Neizšķirts!");
		}
	
	
	if(player_choice == 'rock')
	{
		if(enemy_choice_now=='paper')
		{
		alert('Enemy wins!');		
		}
		
		if(enemy_choice_now=='scissors')
		{
		alert('Player wins!');		
		}
		
	}//if player_choice=rock
	
	
	
	
	if(player_choice == 'paper')
	{
		if(enemy_choice_now=='rock')
		{
		alert('Player wins!');		
		}
		
		if(enemy_choice_now=='scissors')
		{
		alert('Enemy wins!');		
		}
		
	}//if player_choice=paper

	
	
	
	
	
	if(player_choice == 'scissors')
	{
		if(enemy_choice_now=='rock')
		{
		alert('Enemy wins!');		
		}
		
		if(enemy_choice_now=='paper')
		{
		alert('Player wins!');		
		}
		
	}//if player_choice=scissors
	
	
	

}//te beidzas get_winner()



