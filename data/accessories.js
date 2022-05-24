const pumps = [
	{
		category: 'Pumps',
		name: '12V Electric Pump',
		price: 145,
		salePrice: null,
		image: '/../public/images/Accessories/Pumps/12Pump.avif',
		description_long: 'Our premium electric SUP pump is a 12 volt pump that uses your cars power or battery to quickly inflate your stand up paddle board. Insert the pump power cord into your cars power socket or use the adapter to hook up to your car battery. Electric SUP pumps are a convenient paddle board accessory that let you spend more time on the water and less time setting up your inflatable paddle board.',
		description_short: 'Inflate your paddle board effortlessly with our electric SUP pump. Simply plug it into your car outlet and inflate in minutes.',
		inStock: true,
		specs: {
			PowerSupply: '12v Dc',
			Output: '550 Liter/minute',
			Current: '10 Amps',
			Max_Pressure: '20 psi / 1.38 Bar',
			Max_Run_Time: '20 Minutes'
		},
		
	},
	{
		category: 'pumps',
		name: 'Manual ISUP Hand Pump',
		price: 65,
		salePrice: null,
		image: '/../public/images/Accessories/Pumps/handpump.avif',
		description_long: 'Get your iSUP ready for the water more quickly than ever with this high-pressure hand pump. Save more of your energy for paddling with a dual-action pump that inflates your board when you push down and when you pull up on the handle. The pump height of 24.5 inches when compressed and 41.5 inches when extended eliminates stress on the back. And if you do not want to use the dual-action feature, simply unscrew the high-capacity cap for single-action pumping with more focused power that you can see from the easy-to-read and color-coded PSI gauge.',
		description_short: 'Get pumped.  Our dual-action hand pump inflates your paddle board to the suggested 12 PSI with ease. You will get there quickly with dual-action pumping that inflates on the pull and push motion of the pump.' ,
		inStock: true,
		specs: null,
		
	},
]

const bags = [
	{
		category: 'bags',
		name: 'Paddle Board Day Bag',
		price: 195,
		salePrice: 145,
		image: '/../public/images/Accessories/Bags/daybag.avif',
		description_long: 'Made specifically for hard stand up paddle boards, ISLEs paddle board bag is the most effective way to store your board and protect it in transit. Whether you are looking for winter paddle board storage or just want to protect your SUP as you travel to the water, a paddle board day bag is the best option.The ISLE paddle board day bag is also ready for transport. Its layer of heat-reflective 266PE on the bottom of the bag safeguards your board from sun damage while on top of your vehicle. Plus, external paddle straps, a removable non-slip shoulder strap with stainless steel d-rings, and an ergonomic comfort grip side handle make carrying your stand up paddle board easier than ever.',
		description_short: 'Ideal paddle board storage, protect your epoxy SUP from dings and heat damage with an easy-to-carry, tailored paddle board day bag to extend the life of your board. ',
		inStock: true,		
		
	},
	{
		category: 'bags',
		name: 'Touring Day Bag',
		price: 195,
		salePrice: 145,
		image: '/../public/images/Accessories/Bags/touring.avif',
		description_long: 'The easy-to-carry ISLE SUP Touring Day Bag is the best way to protect your epoxy stand up paddle board in storage and transit. Tailor made to fit the Voyager board, you can use the day bag for longer seasonal storage, or even just during travel to your next destination.  This paddle board travel bag surrounds your SUP in 5mm of water-resistant, closed cell foam padding with additional reinforcement in the nose and tail for the ultimate protection against dings. A layer of heat-reflective/resistant 266PE to the bottom of the bag to safeguard your board from damage caused by the sun when strapped to your car rack. ',
		description_short: 'The optimal paddle board storage for our Voyager stand up paddle board, the Touring Day Bag will protect your SUP from dings and heat damage to extend the life of your board. Easily transportable, our Touring Day Bag features a set of external paddle straps, a removable non-slip shoulder strap with stainless steel d-rings, and an ergonomic comfort grip side handle. The superior craftsmanship, quality materials and unique shape of the Touring day bag will keep your Voyager ready to hit that water.',
		inStock: true,
		specs: {},
		
	},
	{
		category: 'bags',
		name: 'Dry Bag',
		price: 60,
		salePrice: null,
		image: '/../public/images/Accessories/Bags/dry.avif',
		description_long: 'The ISLE 25L Dry Bag is a rugged all-weather gear protection that will keep your items safe and dry from anything mother nature throws your way. The bright color comes in handy in the event that your bag is lost or falls overboard. This is the perfect size to pack what you need for the day and is not too big or bulky where it is difficult to strap to your board. With a removable shoulder-strap you can sling it over your shoulder or strap it to your boat or standup paddle board. We suggest leaving a little air in the bag so it will float in the water if it falls off the board. This dry bag is made with a heavy duty 500D fabric, vinyl-coated for watertight protection.',
		description_short: 'This 25L Dry Bag is created to keep all your personal belongings safe and dry. Throw it under your bungees or wear it as a backpack, you will be sure to have everything you will need for a day out on the water. This bag is designed with a PVC coated Cationic Nylon and boasts side carry pockets and additional front bungees for quick and easy access.',
		inStock: true,
		specs: {},
		
	},
	{
		category: 'bags',
		name: 'ISUP Travel Bag',
		price: 75,
		salePrice: null,
		image: '/../public/images/Accessories/Bags/inflatablebag.avif',		
		description_long: 'Fits your inflatable paddle board, travel paddle, pump, fins, leash, and fin with additional room for water and snacks. This Inflatable SUP Backpack was designed for effortless transportation',
		inStock: true,
		specs: {
			length: 11,
			width: 14.5,
			height: 37.5
		},
		
	},

]



const paddles = [
	{
		category: 'paddles',
		name: 'Adjustable Paddle-Carbon/Nylon',
		price: 165,
		salePrice: null,
		image: '/../public/images/Accessories/Paddles/adj_carbon_nylon.avif',
		description_long: 'The ISLE Carbon Fiber Adjustable SUP Paddle with Nylon Blade is our hybrid SUP paddle. We used a carbon fiber shaft to make this paddle strong and lightweight. Plus, we integrated a nylon blade to protect your board from dings and scrapes caused by blade contact. The light, stiff shaft helps prevent arm fatigue but still retains a high performance feel during those powerful strokes. The adjustable shaft is ideal if more than one person will likely use the paddle, and adjustable carbon shaft that measures 67 inches to 84 inches. Printed lengths on the shaft support easy sizing, while the adjustable shaft securely locks and allows for zero movement out on the water.',		
		inStock: true,
		specs: {
			model: 'Carbon Hybrid Adjustable SUP paddle',
			paddle_Length: 'Adjustable from 67 - 83 inches',
			weight: '33.86 Ounces',
			blade: 'Nylon',
			shaft: '70% Fiberglass / 30% Carbon'
		},
		
	},
	{
		category: 'paddles',
		name: 'Adjustable Paddle - Full Carbon',
		price: 185,
		salePrice: null,
		image: '/../public/images/Accessories/Paddles/adj_full_carbon.avif',
		description_long: 'A super durable and tough carbon construction, these are the strongest adjustable paddles we offer. Perfect for rental fleets since they can durably withstand the daily abuse.',
		
		inStock: true,
		specs: {
			model: 'Carbon Adjustable paddle',
			paddle_Length: 'Adjustable from 67 - 83 inches',
			weight: '31.74 Ounces',
			blade: 'Nylon',
			shaft: '70% Fiberglass / 30% Carbon'
		},
		
	},
	{
		category: 'paddles',
		name: 'Cut-To-Length Paddle - Full Carbon',
		price: 195,
		salePrice: null,
		image: '/../public/images/Accessories/Paddles/fixed.avif',
		description_long: 'The lightest, strongest and most affordable high performance carbon fiber paddle. This is for the serious paddler who wants a responsive shaft and blade that will last.',
		
		inStock: true,
		specs: {
			model: 'Carbon Elite Fixed Paddle',
			paddle_Length: 'Fixed 83 inches',
			weight: '25.39',
			blade: '100% Carbon',
			shaft: '100% Carbon'
		},
		
	},
]


//bags
'[{"category":"bags","name":"Paddle Board Day Bag","price":195,"salePrice":145,"image":"/../public/images/Accessories/Bags/daybag.avif","description_long":"Made specifically for hard stand up paddle boards, ISLEs paddle board bag is the most effective way to store your board and protect it in transit. Whether you are looking for winter paddle board storage or just want to protect your SUP as you travel to the water, a paddle board day bag is the best option.The ISLE paddle board day bag is also ready for transport. Its layer of heat-reflective 266PE on the bottom of the bag safeguards your board from sun damage while on top of your vehicle. Plus, external paddle straps, a removable non-slip shoulder strap with stainless steel d-rings, and an ergonomic comfort grip side handle make carrying your stand up paddle board easier than ever.","description_short":"Ideal paddle board storage, protect your epoxy SUP from dings and heat damage with an easy-to-carry, tailored paddle board day bag to extend the life of your board. ","inStock":true},{"category":"bags","name":"Touring Day Bag","price":195,"salePrice":145,"image":"/../public/images/Accessories/Bags/touring.avif","description_long":"The easy-to-carry ISLE SUP Touring Day Bag is the best way to protect your epoxy stand up paddle board in storage and transit. Tailor made to fit the Voyager board, you can use the day bag for longer seasonal storage, or even just during travel to your next destination.  This paddle board travel bag surrounds your SUP in 5mm of water-resistant, closed cell foam padding with additional reinforcement in the nose and tail for the ultimate protection against dings. A layer of heat-reflective/resistant 266PE to the bottom of the bag to safeguard your board from damage caused by the sun when strapped to your car rack. ","description_short":"The optimal paddle board storage for our Voyager stand up paddle board, the Touring Day Bag will protect your SUP from dings and heat damage to extend the life of your board. Easily transportable, our Touring Day Bag features a set of external paddle straps, a removable non-slip shoulder strap with stainless steel d-rings, and an ergonomic comfort grip side handle. The superior craftsmanship, quality materials and unique shape of the Touring day bag will keep your Voyager ready to hit that water.","inStock":true,"specs":{}},{"category":"bags","name":"Dry Bag","price":60,"salePrice":null,"image":"/../public/images/Accessories/Bags/dry.avif","description_long":"The ISLE 25L Dry Bag is a rugged all-weather gear protection that will keep your items safe and dry from anything mother nature throws your way. The bright color comes in handy in the event that your bag is lost or falls overboard. This is the perfect size to pack what you need for the day and is not too big or bulky where it is difficult to strap to your board. With a removable shoulder-strap you can sling it over your shoulder or strap it to your boat or standup paddle board. We suggest leaving a little air in the bag so it will float in the water if it falls off the board. This dry bag is made with a heavy duty 500D fabric, vinyl-coated for watertight protection.","description_short":"This 25L Dry Bag is created to keep all your personal belongings safe and dry. Throw it under your bungees or wear it as a backpack, you will be sure to have everything you will need for a day out on the water. This bag is designed with a PVC coated Cationic Nylon and boasts side carry pockets and additional front bungees for quick and easy access.","inStock":true,"specs":{}},{"category":"bags","name":"ISUP Travel Bag","price":75,"salePrice":null,"image":"/../public/images/Accessories/Bags/inflatablebag.avif","description_long":"Fits your inflatable paddle board, travel paddle, pump, fins, leash, and fin with additional room for water and snacks. This Inflatable SUP Backpack was designed for effortless transportation","inStock":true,"specs":{"length":11,"width":14.5,"height":37.5}}]'


//paddles
'[{"category":"paddles","name":"Adjustable Paddle-Carbon/Nylon","price":165,"salePrice":null,"image":"/../public/images/Accessories/Paddles/adj_carbon_nylon.avif","description_long":"The ISLE Carbon Fiber Adjustable SUP Paddle with Nylon Blade is our hybrid SUP paddle. We used a carbon fiber shaft to make this paddle strong and lightweight. Plus, we integrated a nylon blade to protect your board from dings and scrapes caused by blade contact. The light, stiff shaft helps prevent arm fatigue but still retains a high performance feel during those powerful strokes. The adjustable shaft is ideal if more than one person will likely use the paddle, and adjustable carbon shaft that measures 67 inches to 84 inches. Printed lengths on the shaft support easy sizing, while the adjustable shaft securely locks and allows for zero movement out on the water.","inStock":true,"specs":{"model":"Carbon Hybrid Adjustable SUP paddle","paddle_Length":"Adjustable from 67 - 83 inches","weight":"33.86 Ounces","blade":"Nylon","shaft":"70% Fiberglass / 30% Carbon"}},{"category":"paddles","name":"Adjustable Paddle - Full Carbon","price":185,"salePrice":null,"image":"/../public/images/Accessories/Paddles/adj_full_carbon.avif","description_long":"A super durable and tough carbon construction, these are the strongest adjustable paddles we offer. Perfect for rental fleets since they can durably withstand the daily abuse.","inStock":true,"specs":{"model":"Carbon Adjustable paddle","paddle_Length":"Adjustable from 67 - 83 inches","weight":"31.74 Ounces","blade":"Nylon","shaft":"70% Fiberglass / 30% Carbon"}},{"category":"paddles","name":"Cut-To-Length Paddle - Full Carbon","price":195,"salePrice":null,"image":"/../public/images/Accessories/Paddles/fixed.avif","description_long":"The lightest, strongest and most affordable high performance carbon fiber paddle. This is for the serious paddler who wants a responsive shaft and blade that will last.","inStock":true,"specs":{"model":"Carbon Elite Fixed Paddle","paddle_Length":"Fixed 83 inches","weight":"25.39","blade":"100% Carbon","shaft":"100% Carbon"}}]'

//pumps
'[{"category":"Pumps","name":"12V Electric Pump","price":145,"salePrice":null,"image":"/../public/images/Accessories/Pumps/12Pump.avif","description_long":"Our premium electric SUP pump is a 12 volt pump that uses your cars power or battery to quickly inflate your stand up paddle board. Insert the pump power cord into your cars power socket or use the adapter to hook up to your car battery. Electric SUP pumps are a convenient paddle board accessory that let you spend more time on the water and less time setting up your inflatable paddle board.","description_short":"Inflate your paddle board effortlessly with our electric SUP pump. Simply plug it into your car outlet and inflate in minutes.","inStock":true,"specs":{"PowerSupply":"12v Dc","Output":"550 Liter/minute","Current":"10 Amps","Max_Pressure":"20 psi / 1.38 Bar","Max_Run_Time":"20 Minutes"}},{"category":"pumps","name":"Manual ISUP Hand Pump","price":65,"salePrice":null,"image":"/../public/images/Accessories/Pumps/handpump.avif","description_long":"Get your iSUP ready for the water more quickly than ever with this high-pressure hand pump. Save more of your energy for paddling with a dual-action pump that inflates your board when you push down and when you pull up on the handle. The pump height of 24.5 inches when compressed and 41.5 inches when extended eliminates stress on the back. And if you do not want to use the dual-action feature, simply unscrew the high-capacity cap for single-action pumping with more focused power that you can see from the easy-to-read and color-coded PSI gauge.","description_short":"Get pumped.  Our dual-action hand pump inflates your paddle board to the suggested 12 PSI with ease. You will get there quickly with dual-action pumping that inflates on the pull and push motion of the pump.","inStock":true,"specs":null}]'