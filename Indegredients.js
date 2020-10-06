import React, { Component } from 'react';  
import {View,Text,FlatList} from 'react-native';  
import {Card} from'react-native-paper';
import About from'./About';



export default class Indegredients extends Component {  
     
     constructor(props){
          super(props);
          this.state={
               category:[
                    {
                         id:'1',
                         name:"kadai paneer ",
                        method:"[Ingredients] 5 to 6 kashmiri red chilies , 1.5 tablespoons coriander seeds ,3 to 4 tablespoons oil,1 medium to large onion or 90 grams onions - finely chopped or ⅓ to ½ cup finely chopped onions ,2 teaspoons ginger-garlic paste ,5 to 6 medium tomatoes or 400 grams tomatoes - finely chopped or 2.5 to 3 cups finely chopped tomatoes ,1 large capsicum - julienned or sliced or ¾ to 1 cup thinly sliced capsicum (bell pepper) ,1 or 2 green chilies - slit ,½ cup water or add as required, ½ teaspoon garam masala powder ,250 grams paneer - cubed (cottage cheese) ,1 teaspoon crushed kasuri methi (dry fenugreek leaves) ,2 tablespoons chopped coriander leaves (cilantro leaves) ,1 inch ginger, julienne ,salt as required",
                        method1:"In a kadai heat 2 tbsp oil, Add finely chopped onions and saute them till they turn translucent.,Then add ginger-garlic paste. Saute till the raw aroma of ginger-garlic goes away. ,Now add the finely chopped tomatoes. Saute tomatoes for 3 to 4 mins. ,Then add the ground kadai masala to the tomatoes., Saute the tomatoes till the whole mixture become like a paste and starts to leave oil ,Now add the capsicum julienne. ,Saute the capsicum for some 3 to 4 minutes. ,Then add green chilies. add water. ,Mix very well and saute till the capsicum is half done. ,Then add salt and garam masala powder. ,Mix these with the rest of the masala. ,Now add the paneer cubes. ,Again mix very well.,Lastly add kasuri methi, ginger julienne and coriander leaves. Mix again.,Serve the kadai paneer, hot with rotis or naans."
                    },
                    {
                         id: '2',
                         name: 'Mutton Biryani',
                         method:"[Ingredients Of Mutton Biryani] For the rice:1 Star anise,500 gms basmati rice, blanched,2 Bay leaves,2 Black cardamom,2 tsp black cumin seeds,6 Black peppercorn,6 Green cardamom,2 Cinnamon sticks,6 Cloves,1 tsp fennel,1/4 Jaiphal,1 Javitri,3 tsp Salt:,[For mutton marination:] 1 kg mutton (cut in 2 inches pieces, preferably front leg part and avoid shoulder cut),1 tbsp garam masala,1 tbsp garlic paste,1 tbsp ginger paste,3 tbsp raw papaya paste,4 tbsp hung curd,1 Lemon (juiced),Coriander powder,1 tbsp red chilli powder,1 tsp salt:,[Other ingredients:]4 onions, sliced,2 tomatoes, chopped,1/4 cup milk (warm),Ghee,Saffron strands,Oil,Rose water,Kewra essence,4 green chillies",
                         method1:"[Preparing fried onions or Barista:] 1.Slice 2 onions very thinly. Separate the slices.,2.In a pan or kadai add oil and fry the onion slices till nicely brown.,3.Take care not to burn them. Fry in small batches. Do not put all the slices at a time, that will lead to lumpy messy onions.,4.Make sure all the onion slices frying are dipped in oil, if needed add more oil. Keep stirring continuously but gently for an even brown color.,5.Take the fried onions out with a slotted spoon or ladle.,6.Keep them on a paper-towel lined plate. This crispy brown fried onion slices are called Barista.",
                         method2:"[Preparing the rice:] 1.Use only good quality long grain Basmati rice. Soak the rice for 20 minutes in water. Wash well till the water runs clear. Drain all the water.,2.In a small piece of cloth take cardamom, cinnamon, cloves, javitri, jaiphal, black peppercorn, shahi jeera, star anise and tie a knot to make a bag (potli).,3.Bring 750 ml water to boil, add rice, bay leaf, salt and potli, cover and cook till rice is done 1/3rd.,4.Drain the water & remove the whole masala potli.",
                         method3:"[Layering the biryani:] 1.Take a large heavy bottom pan with tight fitting lid.,2.Add 2tbsp ghee to the pan. Melt the ghee on low heat. Turn and rotate the pan carefully so the ghee can coat the bottom and sides of the pan. Switch off the heat.,3.Add a layer of cooked rice, then cooked meat pieces, sprinkle saffron water, add fried onion slices and ghee.,4.Again add a layer of rice, then meat...go on like this till you are done. Top and bottom layer will be of rice.,5.Cover with chopped pudina and coriander, fried onion and slit green chillies and juice of half a lemon.,6.Put the lid on. Seal the pan with flour dough or aluminium foil, then put the lid. Keep the heat to lowest. And cook the Biryani in this 'Dum' process for 40 minutes.,7.Make sure your pan is heavy-bottomed or the rice will burn. Or you can place a flat tawa then keep the pan on that tawa.,8.After 40 minutes switch off the heat and let the biryani stand for another 10 minutes. Transfer to a serving bowl.,9.Serve with raita and salad."
                        
                       },
                       {
                         id: '3',
                         name: 'BUTTER CHICKEN',
                         method:"[INGREDIENTS] 500 gm of boneless chicken, cubed,2 onions, minced,1 tomato, pureed,1 tbsp of tomato paste or sauce,1 tbsp of butter, ghee, or oil,1 tsp of minced garlic,1 tsp of minced ginger,2 tsp of coriander powder,1 tsp of chilli powder (use Kashmiri chilli powder for better results),1 tsp of garam masala or chicken masala,1 large pinch of kasuri methi / dried fenugreek leaves,1 cup of milk,3 tbsp of cream or pureed cashew paste (soak and grind cashew nuts),1–2 tsp salt (adjust to taste),1/4 tsp of turmeric powder,1 small bunch of coriander leaves / cilantro, for ganish",
                         method1:"Heat the butter in a pan and add the minced onions. Fry until golden brown,Add the ginger, garlic, coriander, chilli powder, turmeric, and salt. Fry for a minute until fragrant,Add the pureed tomato and tomato paste and cook for 3-4 mins until the mixture bubbles uniformly,Thrown in the kasuri methi, milk, and the cubed chicken. Cook covered for 8-10 mins until the chicken is soft. The chicken will let out more water, just check once or twice in between and give the curry a stir. Keep the flame on sim,When the chicken is cooked soft, open the lid and cook for a further minute or two. If the gravy is too thick, add some water at this stage,When done, add the garam masala or chicken masala and the cream or cashew paste. Give it a good stir, but don’t boil,Adjust salt, garnish with the coriander leaves, and remove from fire,Serve hot with tawa naan, vegetable pulao, or jeera rice"
                         
                       },
                       {
                         id: '4',
                         name: ' Mutton Curry',
                         method:"[Ingredients Of Mutton Curry] 1 Kg mutton,750 gms onion, sliced,2 Garlic cloves (crushed),6 tbsp ginger-garlic paste,1 tbsp coriander powder,1 tbsp turmeric powder,2 tbsp degi mirch,2 tbsp Kashmiri mirch,2 tbsp lemon juice,150 gms yogurt,1/2 cup mustard oil,1 tsp fennel powder,1 tsp garam masala powder,10 Cloves,8 Black peppercorn,2 inch cinnamon sticks,1 Bay leaf,4 tsp cumin seeds,1 tsp cumin powder, roasted,Wheat dough (atta, to seal the vessel),To taste salt",
                         method1:"1.Marinate the mutton with 3/4th cup of mustard oil and all the remaining ingredients. Keep it aside for 20 minutes.,2.Take a big earthen pot or a heavy bottom saucepan. Add the remaining oil and the marinated mutton. Put the lid, and seal the edges with dough.3.Cook on low heat and then slowly increase the flame to medium and let the mutton cook for 45-50 minutes.,4.Take out the dough seal after 45 minutes, check if the oil has come up and the mutton is tender and well-cooked.,5.Garnish with coriander leaves and serve hot."
                       }
               ]
          }
     }


     render(){   
        
                return(
           
          <View style={{flex:1,padding:10}}>
          <FlatList 
          data={this.state.category}
          renderItem={({item})=> 
          <Card style={{margin:5,backgroundColor:"green",borderRadius:10}} >
           <View style={{flex:1,flexDirection:"row",padding:10,marginLeft:20}}>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.name}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method1}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method2}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>Time:{item.time}</Text>
          </View>    
          </Card>
            }
           keyExtractor={item=>item.id}
          />
          </View>
     
        )
   }
}
