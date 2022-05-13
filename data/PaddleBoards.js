export const PADDLEBOARDS = {
	hardTop_PaddleBoards: [
		{
			id: 0,
			name: 'Cruiser',
			specs: {
				Length: 10.5,
				Width: 32,
				Thickness: 4.5,
				Weight: 24,
				Capacity: 235,
			},
			description:
				'The only soft top paddle board of its kind in our lineup. It has an epoxy core, soft outer skin, and full deck traction for durability and comfort while you ride.',
			colors: ['coral', 'blue', 'green'],
			image: {
				main: '/../public/images/Hardtop_paddleboards/Cruiser/coral.avif',
				coral: '/../public/images/Hardtop_paddleboards/Cruiser/coral.avif',
				blue: '/../public/images/Hardtop_paddleboards/Cruiser/blue.avif',
				green: '/../public/images/Hardtop_paddleboards/Cruiser/green.avif',
			},
			price: 1095,
			salePrice: 945,
			isBestSeller: true,
			inStock: true,
		},
		{
			id: 1,
			name: 'Versa',
			specs: {
				Length: 11.2,
				Width: 33,
				Thickness: 5.25,
				Weight: 29,
				Capacity: 275,
			},
			description:
				'The best all-around epoxy stand up paddle board. The Versa is a hard SUP that performs well in all conditions for all skill levels.',
			colors: ['coral', 'blue', 'green'],
			image: {
				main: '/../public/images/Hardtop_paddleboards/Versa/green.avif',
				coral: '/../public/images/Hardtop_paddleboards/Versa/coral.avif',
				blue: '/../public/images/Hardtop_paddleboards/Versa/blue.avif',
				green: '/../public/images/Hardtop_paddleboards/Versa/green.avif',
			},
			price: 1295,
			salePrice: 1245,
			isBestSeller: false,
			inStock: true,
		},
		{
			id: 2,
			name: 'Outpost',
			specs: {
				Length: 10.6,
				Width: 32,
				Thickness: 4.8,
				Weight: 33,
				Capacity: 265,
			},
			description:
				'The most durable stand up paddle board we offer. It has a resilient outer shell and reinforced rails to withstand wear and tear from repeated use by families or SUP rental companies.',
			colors: ['blue'],
			image: {
				main: '/../public/images/Hardtop_paddleboards/Outpost/blue.avif',
			},
			price: 1245,
			salePrice: 1195,
			isBestSeller: false,
			inStock: true,
		},
		{
			id: 3,
			name: 'Glider',
			specs: {
				Length: 11,
				Width: 31,
				Thickness: 4.5,
				Weight: 25,
				Capacity: 245,
			},
			description:
				'A unique combo of epoxy and wooden veneer, the Glider is not only beautiful, it is exceptional in both flatwater and small to medium surf.',
			colors: ['coral', 'blue', 'green'],
			image: {
				main: '/../public/images/Hardtop_paddleboards/Glider/coral.avif',
				coral: '/../public/images/Hardtop_paddleboards/Glider/coral.avif',
				blue: '/../public/images/Hardtop_paddleboards/Glider/blue.avif',
				green: '/../public/images/Hardtop_paddleboards/Glider/green.avif',
			},
			price: 1395,
			salePrice: 1345,
			isBestSeller: false,
			inStock: false,
		},
		{
			id: 4,
			name: 'Voyager',
			specs: {
				Length: 11.5,
				Width: 31,
				Thickness: 2.4,
				Weight: 24,
				Capacity: 285,
			},
			description:
				'The best touring stand up paddle board we offer, the Voyager is a beautifully crafted wooden SUP that is perfect for long paddle expeditions.',
			colors: ['green', 'blue'],
			image: {
				main: '/../public/images/Hardtop_paddleboards/Voyager/green.avif',
				blue: '/../public/images/Hardtop_paddleboards/Voyager/blue.avif',
				green: '/../public/images/Hardtop_paddleboards/Voyager/green.avif',
			},

			price: 1495,
			salePrice: 1445,
			isBestSeller: true,
			inStock: true,
		},
	],

	inflatable_PaddleBoards: [
		{
			id: 0,
			name: 'Pioneer',
			specs: {
				Length: 10.5,
				Width: 34,
				Thickness: 6,
				Weight: 24,
				Capacity: 285,
			},
			description:
				'The best inflatable stand up paddle board for beginners up to 285lbs. Stable, lightweight and extremely durable, this SUP is built for a wide range of activities and skill levels.',
			colors: ['coral', 'green', 'blue'],
			image: {
				main: '/../public/images/Inflatable_paddleboards/Pioneer/coral.avif',
				coral: '/../public/images/Inflatable_paddleboards/Pioneer/coral.avif',
				blue: '/../public/images/Inflatable_paddleboards/Pioneer/blue.avif',
				green: '/../public/images/Inflatable_paddleboards/Pioneer/green.avif',
			},
			price: 845,
			salePrice: 595,
			isBestSeller: true,
			inStock: true,
		},
		{
			id: 1,
			name: 'Explorer',
			specs: {
				Length: 11.6,
				Width: 32,
				Thickness: 6,
				Weight: 24,
				Capacity: 300,
			},
			description:
				'Our highest performing inflatable paddle board. Portable, durable, and functional, the ISLE Explorer will carry you and your gear on any body of water, near and far.',
			colors: ['blue', 'green'],
			image: {
				main: '/../public/images/Inflatable_paddleboards/Explorer/green.avif',
				blue: '/../public/images/Inflatable_paddleboards/Explorer/blue.avif',
				green: '/../public/images/Inflatable_paddleboards/Explorer/green.avif',
			},
			price: 895,
			salePrice: 695,
			isBestSeller: false,
			inStock: true,
		},
		{
			id: 2,
			name: 'Scout',
			specs: {
				Length: 11,
				Width: 33,
				Thickness: 6,
				Weight: 21,
				Capacity: 315,
			},
			description:
				'The best paddle board for SUP Yoga, the Scout is soft, wide, and has a full-length traction pad. You can take advantage of its extra space and use it as a multi-person board as well.',
			colors: ['blue', 'coral'],
			image: {
				main: '/../public/images/Inflatable_paddleboards/Scout/blue.avif',
				blue: '/../public/images/Inflatable_paddleboards/Scout/blue.avif',
				green: '/../public/images/Inflatable_paddleboards/Scout/coral.avif',
			},
			price: 895,
			salePrice: 845,
			isBestSeller: true,
			inStock: true,
		},
		{
			id: 3,
			name: 'Megalodon',
			specs: {
				Length: 15,
				Width: 56,
				Thickness: 8,
				Weight: 50,
				Capacity: 1050,
			},
			description:
				'A multi-person stand up paddle board, the Megalodon is the largest SUP in our collection and is made for fun. It can fit you, your friends, family, dogs and gear — potentially at the same time.',
			colors: ['blue'],
			image: {
				main: '/../public/images/Inflatable_paddleboards/Megalodon/blue.avif',
			},
			price: 1245,
			salePrice: 1195,
			isBestSeller: false,
			inStock: true,
		},
	],
};

//      MOVE IMAGE FOLDERS INTO PROJECTS AND THEN ADD THE PICTURES TO THE DATA

//      set a color variable...see if that works inside of the colors object.  The colors will need to be an object that sets the colors?
//      ============= COLORS ==============
// blue: #48ACC3
// coral: #FFAB8A
// green: #B8C9B9

// {
//     id: ,
//     name: ,
//     specs: {
//         Length: ,
//         Width: ,
//         Thickness: ,
//         Weight: ,
//         Capacity: ,
//     },
//     description: '',
//     colors: [],
//     images: [],
//     price: ,
//     salePrice: ,
//     isBestSeller: ,
//     inStock: ,
// },

// {
//     id: 3,
//     name:"Redux Woods Campground",
//     image: "/assets/images/redux-woods.jpg",
//     elevation: 42,
//     featured: true,
//     description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
// }
