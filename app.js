(function(){
	var app = angular.module('store',['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	/*app.controller("PanelController", function(){
	this.tab=1;

	this.selectTab=function(setTab){
		this.tab=setTab;
		};
	this.isSelected=function(checkTab){
		return this.tab === checkTab;
		};
	});*/

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});


	var gems = [
	{
		name: "Dodecahedron Gem",
		price: 2,
		description: "One of the most magnificent gems in the world!",
		canPurchase: true,
		shine: 8,
		faces: 14,
		rarity: 7,
		color: '#CCC',
		images: [
			"gem-01.gif",
			"gem-02.gif",
			"gem-03.gif",
			"gem-04.gif",
			"gem-05.gif"
		],
		reviews:[
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks.",
				author: "tim@hater.com"
			}
		]
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "A glorious gem for any occasion.",
		canPurchase: false,
		image: 'http://goo.gl/h8VXPH',
		shine: 9,
		faces: 12,
		rarity: 6,
		color: '#EEE',
		images: [
			"gem-01.gif",
			"gem-02.gif",
			"gem-03.gif",
			"gem-04.gif",
			"gem-05.gif"
		]
	}
];
})();

