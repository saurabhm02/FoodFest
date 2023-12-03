// This Folder contain All Hardcored Data 

export const Img_Url ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const CORS_PROXY_URL = "https://corsproxy.io/?";
 export const Swiggy_Api = `${CORS_PROXY_URL}https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2231589&lng=75.7670466&page_type=DESKTOP_WEB_LISTING`


// export const Swiggy_Api = `${CORS_PROXY_URL}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
  export const swiggy_menu_api_URL =
  `${CORS_PROXY_URL}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2231589&lng=75.7670466&&submitAction=ENTER&restaurantId=`

  export const MenuItem_Img_Url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

  export const Github_UserName = "saurabhm02";
  export const Github_repoName = "React-Notes";
  export const Github_UserApi = "https://api.github.com/users/";

  export const Insta_link = 'https://www.instagram.com/'
  export const Git_link = "https://github.com/saurabhm02";
  export const Linkedin_Link = "https://www.linkedin.com/in/saurabh-mahapatra-a5a17321b/";
  export const Twitter_Link = "https://twitter.com/SaurabhDM007";



  export const options = {
    method: "GET",
    headers: {
      Authorization: "",
    },
  };
  

  export const fData = [
    {
      "title": "What is Customer Care Number?",
      "descriptions": "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@foodFest.in",
    },
    {
      "title": "Can I edit my order?",
      "descriptions": "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    },
    {
      "title": "Can I change the address / number?",
      "descriptions": "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
    },
    {
      "title": "I want to cancel my order?",
      "descriptions": "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466XXX). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
    },
    {
      "title": "Do you charge for delivery?",
      "descriptions": "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page.",
    },
    {
      "title": "Do you support bulk orders?",
      "descriptions": "In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.",
    },
  ]


  const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "680128",
        "name": "The Burger Comopany\t",
        "uuid": "226baec8-3f85-4247-aa55-f519d25e165c",
        "city": "113",
        "area": "North Ajmer",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "2fef59a8d61cc3861c8f0fc1cbf12a8c",
        "cuisines": [
          "Fast Food",
          "Italian",
          "Beverages",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 4.5,
        "slugs": {
          "restaurant": "the-burger-comopany-north-ajmer-north-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "anasagar circular road jeevan vihar colony main road, opposite hotel lake vinora, LIC Colony, Ajmer, Rajasthan 305004, India",
        "locality": "Anasagar Circular Road",
        "parentId": 406417,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6307681~p=1~eid=00000187-d0d3-7dfb-1462-02c6004a0116",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "680128",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 4.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.2",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "127969",
        "name": "Cafe Ate Pm",
        "uuid": "fd09da23-782c-44b5-b33b-d4466f76cfea",
        "city": "113",
        "area": "South Ajmer",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "pzwrnmjnz5hkxberl6w3",
        "cuisines": [
          "Pastas",
          "Chinese",
          "Burgers",
          "Ice Cream",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "cafe-ate-pm-dhola-bhata-colony-central-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "OPP Saint Paul's school alwar gate ajmer",
        "locality": "Dhola Bhata Colony",
        "parentId": 52393,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "127969",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121260",
        "name": "7 Spices",
        "uuid": "87154298-2f63-400e-9129-af9d2bfddfb8",
        "city": "113",
        "area": "Railway Quarters",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "esguwqlbgdwlpvgx5vzl",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.10000000149011612,
        "slugs": {
          "restaurant": "7-spices-dhola-bhata-colony-central-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "Near Ajanta Cinema, Siddhi Complex, Dhola Bhata Colony, Ajmer",
        "locality": "",
        "parentId": 5054,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "121260",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.10000000149011612,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "644804",
        "name": "Rominus Pizza & Burger",
        "uuid": "e89a18e2-576c-4c2f-bee9-2ee2ad1565aa",
        "city": "113",
        "area": "Vaishali Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        "cuisines": [
          "Pizzas",
          "Snacks",
          "Beverages",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "rominuz-pizza-and-burger-north-ajmer-north-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "AJGF 19,20,21 Ground Floor Cine Mall, Gaurav Path, Vaishali Nagar, Ajmer, Rajasthan, 305004",
        "locality": "Gaurav Path",
        "parentId": 8387,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6594026~p=4~eid=00000187-d0d3-7dfb-1462-02c7004a045d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "644804",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "644805",
        "name": "Pizza Point Ajmer",
        "uuid": "e89a18e2-576c-4c2f-bee9-2ee2ad1565aa",
        "city": "113",
        "area": "Vaishali Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        "cuisines": [
          "Pizzas",
          "Snacks",
          "Beverages",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 45,
        "slaString": "25 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "rominuz-pizza-and-burger-north-ajmer-north-ajmer",
          "city": "ajmer"
        },
        "cityState": "113",
        "address": "AJGF 19,20,21 Ground Floor Cine Mall, Gaurav Path, Vaishali Nagar, Ajmer, Rajasthan, 305004",
        "locality": "Gaurav Path",
        "parentId": 8387,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6594026~p=4~eid=00000187-d0d3-7dfb-1462-02c7004a045d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "644804",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
]

export default resList

export const bannerList = [
    {
        id: 101,
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/8c86a9b3703a3c7c3fad66b810a6c9f0"
    },
    {
        id: 102,
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/f9802f222bff4ee205fc8bf9bc842995"
    },
    {
        id: 103,
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1332882db644e6ede2b91e4fd1907ba2"
    },
    {
        id: 104,
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e0b0a61e42290317661f60a4e6ee537f"
    },
    {
        id: 105,
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/5ebff1366e7089dd4a2ad7c9433b8067"
    }
]

export const foodCategoryMap = {
    "83644": {
        name: "Pizza",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
        cards: []
    },
    "80439": {
        name: "Pure Veg",
        description: "A vegetarian paradise loaded with options to satisfy your cravings.",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
        cards: [
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            },
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            },
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            },
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            },
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            },
            {
                "id": "435605",
                "type": "restaurant",
                "name": "Green Hub Fast Food & Restaurant",
                "cloudinaryImageId": "ituqykltv8urolp9bck3",
                "cuisines": [
                    "Indian",
                    "Salads",
                    "Beverages",
                    "Pastas",
                    "Pizzas"
                ],
                "costForTwo": "₹200 FOR TWO",
                "sla": {
                    "deliveryTime": "33 MINS"
                },
                "veg": true,
                "promoted": true,
                "avgRating": "3.8"
            }
        ]
    },
    "83647": {
        name: "Chinese",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
        cards: []
    }
    ,
    "83637": {
        name: "Burger",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
        cards: []
    }
    ,
    "83667": {
        name: "Sandwich",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
        cards: []
    }
    ,
    "83670": {
        name: "Rolls",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
        cards: []
    }
    ,
    "83660": {
        name: "Coffee",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
        cards: []
    },
    "83450": {
        name: "Chole Bhature",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
        cards: []
    },
    "83451": {
        name: "Vada Pav",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
        cards: []
    },
    "83452": {
        name: "Ice Cream",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
        cards: []
    },
    "83453": {
        name: "Gulab Jamun",
        description: "",
        imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
        cards: []
    },
}


export const Res_Data = {
  "restaurants": [
    {
      "info": {
        "id": "3241",
        "name": "Meghana Foods",
        "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
        "locality": "Residency Road",
        "areaName": "Residency Road",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "3241",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "635",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 01:30:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/meghana-foods-residency-road-bangalore-3241",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "121603",
        "name": "Kannur Food Point",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "locality": "SG Palya",
        "areaName": "Tavarekere",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Kerala",
          "Chinese"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "121603",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6500
        },
        "parentId": "20974",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 6.7,
          "serviceability": "SERVICEABLE",
          "slaString": "39 mins",
          "lastMileTravelString": "6.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 02:50:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kannur-food-point-sg-palya-tavarekere-bangalore-121603",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "30531",
        "name": "Hotel Empire",
        "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
        "locality": "Brigade Road",
        "areaName": "Church Street",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "30531",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "475",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 04:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-empire-brigade-road-church-street-bangalore-30531",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "210945",
        "name": "Royal Restaurant",
        "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
        "locality": "Sulthangunta",
        "areaName": "Shivajinagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Tandoor"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "210945",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "2896",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-09 23:59:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "35% OFF",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/royal-restaurant-sulthangunta-shivajinagar-bangalore-210945",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "5938",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Tasker Town",
        "areaName": "Shivaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "5938",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 02:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "196047",
        "name": "New Taj Darbar",
        "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
        "locality": "Saint Mary's Church Road",
        "areaName": "Shivajinagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Indian",
          "Chinese",
          "Tandoor",
          "Seafood"
        ],
        "avgRating": 3.5,
        "feeDetails": {
          "restaurantId": "196047",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "148190",
        "avgRatingString": "3.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "41 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-16 00:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/new-taj-darbar-saint-marys-church-road-shivajinagar-bangalore-196047",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "10575",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Shanti Nagar",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "10575",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 01:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "620897",
        "name": "Narmada Chain Of Restaurant",
        "cloudinaryImageId": "nus1zkije83esoyk91o6",
        "locality": "Madhavraya Mudaliar Raod",
        "areaName": "Frazer Town",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "620897",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5200
        },
        "parentId": "322826",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 00:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/narmada-chain-of-restaurant-madhavraya-mudaliar-raod-frazer-town-bangalore-620897",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "48581",
        "name": "Rotti Walla",
        "cloudinaryImageId": "kvlaq1ugkoozqr741zrv",
        "locality": "Appareddy Palya",
        "areaName": "Indiranagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Beverages",
          "Tandoor"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "48581",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6500
        },
        "parentId": "9541",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "43 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-10 03:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {

          },
          "subTitle": {

          },
          "message": {

          },
          "customIcon": {

          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
      },
      "analytics": {
        "context": "seo-data-18d5b96c-8130-4d41-bbe9-8345fdea634c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/rotti-walla-appareddy-palya-indiranagar-bangalore-48581",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]
}
export const Food_Carousel = {
  "imageGridCards":
  {
    "info": [
      {
        "id": "635513",
        "imageId": "rng/md/carousel/production/731031544495581f1d6884624aa3ecf5",
        "action": {
          "link": "https://www.swiggy.com/collections/78798?collection_id=78798&tags=layout_ux4&type=rcv2",
          "text": "All new super",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "GET 50% OFF ON FIRST ORDER",
          "altTextCta": "ORDER NOW"
        },
        "entityId": "78798",
        "frequencyCapping": {
          
        }
      },
      {
        "id": "1343085",
        "imageId": "rng/md/carousel/production/cc71243978bb0cb0e1c96a76e8e35dca",
        "action": {
          "link": "https://www.swiggy.com/collections/97262?collection_id=97262&header_title=Navaratri&tags=layout_worldcup2&type=rcv2",
          "text": "Holi",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Flat deals",
          "altTextCta": "order now"
        },
        "entityId": "swiggy://collectionV2?collection_id=97262&tags=layout_worldcup2&header_title=Navaratri",
        "frequencyCapping": {
          
        }
      },
      {
        "id": "1339867",
        "imageId": "rng/md/carousel/production/cc4e07f95134f2def17a7531ab348124",
        "action": {
          "link": "http://swiggy.com/menu?restaurant_id=550566&uuid=001298ca-3750-42e0-b79b-b656cf56bb17",
          "text": "Brand Card",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Brands with Offers",
          "altTextCta": "open"
        },
        "entityId": "550566",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      },
      {
        "id": "1339898",
        "imageId": "rng/md/carousel/production/2f42fb8823e75f80171af031df048ea3",
        "action": {
          "link": "http://swiggy.com/menu?restaurant_id=567246&uuid=4948d71b-fcd0-4093-920d-10b8e5ad60af",
          "text": "Brand Card",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Brands with Offers",
          "altTextCta": "open"
        },
        "entityId": "567246",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      },
      {
        "id": "1339850",
        "imageId": "rng/md/carousel/production/f45176a1d71b42cb92e77a32052b3116",
        "action": {
          "link": "http://swiggy.com/menu?restaurant_id=209779&uuid=0013aba5-b920-43e0-b823-574259bfa01a",
          "text": "Brand Card",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Brands with Offers",
          "altTextCta": "open"
        },
        "entityId": "209779",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      },
      {
        "id": "731006",
        "imageId": "rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
        "action": {
          "link": "https://www.swiggy.com/collections/78542?collection_id=78542&tags=layout_ux4&type=rcv2",
          "text": "Holi",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "TOP BRANDS TOP OFFERS",
          "altTextCta": "ORDER NOW"
        },
        "entityId": "78542",
        "frequencyCapping": {
          
        }
      },
      {
        "id": "1254481",
        "imageId": "rng/md/carousel/production/5abd17dbc641c9ec757a8374f097e82a",
        "action": {
          "link": "https://www.swiggy.com/menu/557322",
          "text": "Living",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "150",
          "altTextCta": "Order Now"
        },
        "entityId": "557322",
        "frequencyCapping": {

        },
        "isManualAds": true
      },
      {
        "id": "1254294",
        "imageId": "rng/md/carousel/production/1095c62afafd16a1e99289880fddfc5b",
        "action": {
          "link": "https://www.swiggy.com/menu/588619",
          "text": "KFC",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Wednesday Buckets",
          "altTextCta": "Order Now"
        },
        "entityId": "588619",
        "frequencyCapping": {

        },
        "isManualAds": true
      }
    ]
  }
}

export const Item_Carousel = {
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      "header": {
        "title": "Saurabh, what's on your mind?",
        "headerStyling": {
          "padding": {
            "left": 16,
            "top": 16,
            "bottom": 4
          }
        }
      },
      "layout": {
        "rows": 1,
        "columns": 6,
        "horizontalScrollEnabled": true,
        "itemSpacing": 24,
        "widgetPadding": {
          
        },
        "containerStyle": {
          "containerPadding": {
            "left": 8,
            "top": 8,
            "right": 12,
            "bottom": 4
          }
        },
        "scrollBar": {
          
        },
        "widgetTheme": {
          "defaultMode": {
            "backgroundColour": "#FFFFFF",
            "theme": "THEME_TYPE_LIGHT"
          },
          "darkMode": {
            "theme": "THEME_TYPE_DARK"
          }
        }
      },
      "imageGridCards": {
        "info": [
          {
            "id": "749879",
            "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
              "text": "Chole Bhature",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for chhole bhatoore",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750203",
            "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
              "text": "Paratha",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for paratha",
              "altTextCta": "open"
            },
            "entityId": "80476",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750592",
            "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
              "text": "Biryani",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for biryani",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "762797",
            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
              "text": "Burgers",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for burger",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750580",
            "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
              "text": "pizzas",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for pizza",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750239",
            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
              "text": "Shake",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for shakes",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750223",
            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
              "text": "Rolls",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for roll",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750572",
            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
              "text": "Pure Veg",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for veg",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750588",
            "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
              "text": "Chinese",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for chinese",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750582",
            "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
              "text": "North Indian",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for north indian",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750111",
            "imageId": "v1675667630/PC_Creative%20refresh/Desserts_2.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Dessert&type=rcv2",
              "text": "Dessert",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for dessert",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Dessert",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750636",
            "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
              "text": "Kebabs",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for kebabs",
              "altTextCta": "open"
            },
            "entityId": "80452",
            "frequencyCapping": {
              
            }
          }
        ],
        "style": {
          "width": {
            "type": "TYPE_RELATIVE",
            "value": 0.2941,
            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
          },
          "height": {
            "type": "TYPE_RELATIVE",
            "value": 1.2444,
            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
          }
        }
      },
      "id": "whats_on_your_mind",
      "gridElements": {
        "infoWithStyle": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
          "info": [
            {
              "id": "749879",
              "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                "text": "Chole Bhature",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for chhole bhatoore",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750203",
              "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                "text": "Paratha",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for paratha",
                "altTextCta": "open"
              },
              "entityId": "80476",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750592",
              "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                "text": "Biryani",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for biryani",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "762797",
              "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                "text": "Burgers",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for burger",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750580",
              "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                "text": "pizzas",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for pizza",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750239",
              "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                "text": "Shake",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for shakes",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750223",
              "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                "text": "Rolls",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for roll",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750572",
              "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                "text": "Pure Veg",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for veg",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750588",
              "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                "text": "Chinese",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for chinese",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750582",
              "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                "text": "North Indian",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for north indian",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750111",
              "imageId": "v1675667630/PC_Creative%20refresh/Desserts_2.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Dessert&type=rcv2",
                "text": "Dessert",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for dessert",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Dessert",
              "frequencyCapping": {
                
              }
            },
            {
              "id": "750636",
              "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                "text": "Kebabs",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for kebabs",
                "altTextCta": "open"
              },
              "entityId": "80452",
              "frequencyCapping": {
                
              }
            }
          ],
          "style": {
            "width": {
              "type": "TYPE_RELATIVE",
              "value": 0.2941,
              "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
            },
            "height": {
              "type": "TYPE_RELATIVE",
              "value": 1.2444,
              "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
            }
          }
        }
      }
    }
  }
}

export const Res_Carousel = {
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      "header": {
        "title": "Top restaurant chains in Phagwara",
        "action": {
          
        },
        "headerStyling": {
          "padding": {
            "left": 16,
            "top": 28,
            "bottom": 18
          }
        }
      },
      "layout": {
        "rows": 1,
        "columns": 12,
        "horizontalScrollEnabled": true,
        "itemSpacing": 32,
        "widgetPadding": {
          
        },
        "containerStyle": {
          "containerPadding": {
            "left": 16,
            "right": 12,
            "bottom": 12
          }
        },
        "scrollBar": {
          "scrollThumbColor": "#E46D47",
          "scrollTrackColor": "#02060C",
          "width": 54,
          "height": 4,
          "scrollStyling": {
            "padding": {
              "top": 6,
              "bottom": 24
            }
          }
        },
        "widgetTheme": {
          "defaultMode": {
            "backgroundColour": "#1B3028",
            "theme": "THEME_TYPE_DARK"
          },
          "darkMode": {
            "backgroundColour": "#1B3028",
            "theme": "THEME_TYPE_DARK"
          }
        }
      },
      "id": "top_brands_for_you",
      "gridElements": {
        "infoWithStyle": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          "restaurants": [
            {
              "info": {
                "id": "202844",
                "name": "Spice N Cool (Ridzee IceCream)",
                "cloudinaryImageId": "xfscdoisq4pwosyzvaib",
                "locality": "Khera Road",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Chinese",
                  "Mughlai"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                  "restaurantId": "202844",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "192150",
                "avgRatingString": "3.8",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 20,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20 mins",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 22:01:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "40% OFF",
                  "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/spice-n-cool-ridzee-icecream-khera-road-phagwara-central-phagwara-202844",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "475166",
                "name": "Hungry Farms",
                "cloudinaryImageId": "o0rzxlfdvbfcvdyjljnn",
                "locality": "Satnampura\n",
                "areaName": "Phagwara Central",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Chinese",
                  "Italian",
                  "Pizzas",
                  "Mexican",
                  "Snacks",
                  "Fast Food"
                ],
                "avgRating": 3.9,
                "feeDetails": {
                  "restaurantId": "475166",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "104652",
                "avgRatingString": "3.9",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 18,
                  "lastMileTravel": 0.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "18 mins",
                  "lastMileTravelString": "0.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 22:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/hungry-farms-satnampura-phagwara-central-phagwara-475166",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "176958",
                "name": "Agra Chat Bhandar",
                "cloudinaryImageId": "mrjill9ml5uhmo9ytfu8",
                "locality": "Sarai Road",
                "areaName": "Phagwara Central",
                "costForTwo": "₹150 for two",
                "cuisines": [
                  "North Indian"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "176958",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "27772",
                "avgRatingString": "3.9",
                "totalRatingsString": "500+",
                "sla": {
                  "deliveryTime": 20,
                  "lastMileTravel": 1.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20 mins",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 21:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/agra-chat-bhandar-sarai-road-phagwara-central-phagwara-176958",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "524229",
                "name": "Shama Chicken Corner",
                "cloudinaryImageId": "mbdrjxyklv646hnsiirj",
                "locality": "Singla Market",
                "areaName": "Phagwara Central",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                  "restaurantId": "524229",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "13769",
                "avgRatingString": "3.8",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 42,
                  "lastMileTravel": 1.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "42 mins",
                  "lastMileTravelString": "1.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 23:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                    }
                  ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "OnlyOnSwiggy",
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/shama-chicken-corner-singla-market-phagwara-central-phagwara-524229",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "479610",
                "name": "Midway Healthy Meal",
                "cloudinaryImageId": "t8ckckygfigj5oks77eo",
                "locality": "Guru Hargobind Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Indian",
                  "Salads",
                  "Beverages",
                  "Snacks",
                  "Healthy Food"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                  "restaurantId": "479610",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "288116",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 20,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20 mins",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 22:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/midway-healthy-meal-guru-hargobind-nagar-phagwara-central-phagwara-479610",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "214083",
                "name": "Big 7 Food Plaza",
                "cloudinaryImageId": "hmkfi1mryrmmgtw93beg",
                "locality": "Hargobind Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Beverages",
                  "Mughlai",
                  "North Indian",
                  "Snacks"
                ],
                "avgRating": 4,
                "feeDetails": {
                  "restaurantId": "214083",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "45424",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 40,
                  "lastMileTravel": 1.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40 mins",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 22:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/big-7-food-plaza-hargobind-nagar-phagwara-central-phagwara-214083",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "196185",
                "name": "Pizza Country",
                "cloudinaryImageId": "qz5a5ieamhqgiwygrnrl",
                "locality": "Guru Hargobind Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Beverages",
                  "Pizzas",
                  "Italian",
                  "Indian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "196185",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "158473",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 20,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20 mins",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹175 OFF",
                  "subHeader": "ABOVE ₹349",
                  "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-country-guru-hargobind-nagar-phagwara-central-phagwara-196185",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "488740",
                "name": "Oberoi Special Chana Bhature",
                "cloudinaryImageId": "wvuadohhsanvqarxzvlm",
                "locality": "Hoshiarpur road",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "North Indian",
                  "Snacks",
                  "Punjabi"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "488740",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "150863",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 21,
                  "lastMileTravel": 1.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "21 mins",
                  "lastMileTravelString": "1.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 17:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/oberoi-special-chana-bhature-hoshiarpur-road-phagwara-central-phagwara-488740",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "488924",
                "name": "Ice Cream Land And Cafe",
                "cloudinaryImageId": "sh6bp9khgzsvkm77y1dh",
                "locality": "Guru Hargobind Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Ice Cream",
                  "Indian",
                  "Snacks",
                  "Beverages"
                ],
                "avgRating": 3.7,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "488924",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "293282",
                "avgRatingString": "3.7",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 21,
                  "lastMileTravel": 1.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "21 mins",
                  "lastMileTravelString": "1.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/ice-cream-land-and-cafe-guru-hargobind-nagar-phagwara-central-phagwara-488924",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "168618",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "oqmeixtozgmjlqh71mcc",
                "locality": "Guru Hargobind Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Pastas",
                  "Desserts"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                  "restaurantId": "168618",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "2456",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 25,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25 mins",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹100 OFF",
                  "subHeader": "ABOVE ₹999",
                  "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-guru-hargobind-nagar-phagwara-central-phagwara-168618",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "211570",
                "name": "Pizza Home",
                "cloudinaryImageId": "ogg7962itcmeik7ffxq0",
                "locality": "Kabir Nagar",
                "areaName": "Phagwara Central",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Beverages",
                  "Pizzas"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                  "restaurantId": "211570",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "158633",
                "avgRatingString": "3.7",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "23 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 22:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-home-kabir-nagar-phagwara-central-phagwara-211570",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "489441",
                "name": "Mezbaan By Hawks Hospitality",
                "cloudinaryImageId": "saxykbgxelkpgxtsbtnf",
                "locality": "Green Park Plahi Road",
                "areaName": "Phagwara Central",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Biryani",
                  "Arabian",
                  "Kebabs"
                ],
                "avgRating": 4,
                "feeDetails": {
                  "restaurantId": "489441",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 1900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 1900
                },
                "parentId": "293565",
                "avgRatingString": "4.0",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 2.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "23 mins",
                  "lastMileTravelString": "2.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-10-16 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/mezbaan-by-hawks-hospitality-green-park-plahi-road-phagwara-central-phagwara-489441",
                "type": "WEBLINK"
              }
            }
          ],
          "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
          "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
          "style": {
            "width": {
              "type": "TYPE_RELATIVE",
              "value": 0.41111112,
              "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
            },
            "height": {
              "type": "TYPE_RELATIVE",
              "value": 0.7027027,
              "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
            },
            "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
          },
          "collectionId": "84124"
        }
      }
    }
  }
}  