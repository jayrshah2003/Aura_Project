const clothes = [
    {
      id: "1",
      name: "Ball-Gown Lace Tulle Sweep Train Dress Black/Diamond White",
      price: "$200/day",
      size: ["XS", "S", "M", "L", "XL"],
      image: "https://cdn-1.azazie.com/upimg/h65/d2/b2/b2f649497be7e1d88b74effa475ad2b2.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },{
      id: "2",
      name: "A-Line V-Neck Lace Tulle Cathedral Train Dress Diamond White",
      price: "$175/day",
      size: ["S", "M", "L", "XL"],
      image: "https://cdn-1.azazie.com/upimg/h65/f6/82/05730a95da12c65fe8f966c99e5ff682.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },
    {
      id: "3",
      name: "A-Line Lace Chiffon Chapel Train Dress Diamond White",
      price: "$250/day",
      size: ["S", "M", "L"],
      image: "https://cdn-1.azazie.com/upimg/h65/0d/65/928272a65893f8fc666bd58f153f0d65.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },
    {
      id: "4",
      name: "A-Line V-Neck Sequins Stretch Crepe Chapel Train Dress Diamond White",
      price: "$150/day",
      size: ["S", "M", "L"],
      image: "https://cdn-1.azazie.com/upimg/h65/9b/f4/f8884d3d6b2bc6f1ecc562f6413e9bf4.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },
    {
      id: "5",
      name: "A-Line Lace Sweep Train Dress Diamond White",
      price: "$180/day",
      size: ["S", "M", "L"],
      image: "https://cdn-1.azazie.com/upimg/h65/26/bc/878892ba89c02ee2904aeeaaaeb726bc.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },
    {
      id: "6",
      name: "A-Line V-Neck Sequins Tulle Chapel Train Dress Diamond White/Champagne",
      price: "$170/day",
      size: ["S", "M", "L", "XL"],
      image: "https://cdn-1.azazie.com/upimg/h65/30/46/5a51788d2e3ffd5512fa5c33f48f3046.jpg.webp",
      brand: "AURA",
      type: "Bride"
    },
    {
      id: "1",
      name: "Beyond Classy White Satin Halter Midi Dress",
      price: "$120/day",
      size: ["XS", "S", "M", "L", "XL"],
      image: "https://www.lulus.com/images/product/xlarge/8287161_1664996.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "2",
      name: "Reinette Black Midi Dress",
      price: "$110/day",
      size: ["S", "M", "L", "XL"],
      image: "https://www.lulus.com/images/product/xlarge/10391701_1409376.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "3",
      name: "Perfect Pick Black Bodycon Dress",
      price: "$90/day",
      size: ["S", "M", "L"],
      image: "https://www.lulus.com/images/product/xlarge/4458990_361912.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "4",
      name: "Shape the Night Dark Teal Blue Asymmetrical Midi Dress",
      price: "$75/day",
      size: ["S", "M", "L"],
      image: "https://www.lulus.com/images/product/xlarge/7817881_1588836.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "5",
      name: "Springtime Soiree White Sequin 3D Floral Applique Midi Dress",
      price: "$150/day",
      size: ["S", "M", "L"],
      image: "https://www.lulus.com/images/product/xlarge/10352321_2075956.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "6",
      name: "Katrina Royal Blue Strappy Backless Skater Dress",
      price: "$130/day",
      size: ["S", "M", "L", "XL"],
      image: "https://www.lulus.com/images/product/xlarge/4228390_764802.jpg?w=560&hdpi=1",
      brand: "AURA",
      type: "Cocktail"
    },
    {
      id: "1",
      name: "SMALL DG LOGO BAG CROSSBODY BAG",
      price: "$100/day",
      size: ["N/A"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw8d56a0e4/images/zoom/BB7287A1471_80999_0.jpg",
      brand: "AURA",
      type: "D&G"
    },
    {
      id: "2",
      name: "DOUBLE-BREASTED WOOLEN JACKET WITH SIDE VENTS",
      price: "$150/day",
      size: ["S", "M", "L", "XL"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwc567c1d3/images/zoom/F29YLTFUVG7_N0000_0.jpg",
      brand: "AURA",
      type: "D&G"
    },
    {
      id: "3",
      name: "DEVOTION NECKLACE IN YELLOW GOLD WITH DIAMONDS AND PEARLS",
      price: "$300/day",
      size: ["N/A"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw984149c1/images/zoom/WALD1GWDPEY_ZOO00_1.jpg",
      brand: "AURA",
      type: "D&G"
    },
    {
      id: "4",
      name: "SINGLE-BREASTED STRETCH WOOL SICILIA-FIT JACKET",
      price: "$250/day",
      size: ["S", "M", "L"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwea729a91/images/zoom/G2SC9TFUBGG_W0001_0.jpg",
      brand: "AURA",
      type: "D&G"
    },
    {
      id: "5",
      name: "CROPPED HOODIE WITH DOLCE&GABBANA LOGO",
      price: "$175/day",
      size: ["S", "M", "L"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwfcb91de2/images/zoom/G9AYQTG7M8E_N9299_0.jpg",
      brand: "AURA",
      type: "D&G"
    },
    {
      id: "6",
      name: "DOLCE&GABBANA X PERSOL SUNGLASSES",
      price: "$165/day",
      size: ["N/A"],
      image: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw046d9b99/images/zoom/VG3294VP5B1_9V000_0.jpg",
      brand: "AURA",
      type: "D&G"
    }
,    
{
  id: "1",
  name: "Kei Textured Wool, Silk & Linen Sport Jacket",
  price: "$200/day",
  size: ["XS", "S", "M", "L", "XL"],
  image: "https://cdn.media.amplience.net/i/harryrosen/20137208047",
  brand: "AURA",
  type: "Groom"
},
{
  id: "2",
  name: "Velvet Tuxedos",
  price: "$150/day",
  size: ["S", "M", "L", "XL"],
  image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/87/9.webp",
  brand: "AURA",
  type: "Groom"
},
{
  id: "3",
  name: "White Tuxedo",
  price: "$90/day",
  size: ["S", "M", "L"],
  image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/86/2018-aw-6634-tux.webp",
  brand: "AURA",
  type: "Groom"
},
{
  id: "4",
  name: "Tuxedo Vest",
  price: "$130/day",
  size: ["S", "M", "L"],
  image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/368/tuxedo-vest.webp",
  brand: "AURA",
  type: "Groom"
},
{
  id: "5",
  name: "Morning Suit",
  price: "$150/day",
  size: ["S", "M", "L"],
  image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/29/morningcoat_front.webp",
  brand: "AURA",
  type: "Groom"
},
{
  id: "6",
  name: "Tweed Wedding Suit",
  price: "$130/day",
  size: ["S", "M", "L", "XL"],
  image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/240/2019-aw-2416.webp",
  brand: "AURA",
  type: "Groom"
},
{
  id: "1",
  name: "Gucci Soho Small Leather Disco Bag",
  price: "$20/day",
  size: ["NA"],
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHdNbRPoQyZskycQKZSXzpIVf7GK7YhT7_JzSILW1fHDNQLUCfqDksAJio5cViFC7UD6w44TXxHl-5bc8Y7UiWWORaILxJNo-0ugtTYjLq9KHwIKIcfb2oDQ&usqp=CAY",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "2",
  name: "Logo-Appliquéd Striped Quilted Shell Down Jacket",
  price: "$500/day",
  size: ["S", "M", "L"],
  image: "https://www.mrporter.com/variants/images/30629810019709689/in/w1200_q80.jpg",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "3",
  name: "Logo-Print Cotton-Jersey Hoodie",
  price: "$150/day",
  size: ["S", "M", "L"],
  image: "https://www.mrporter.com/variants/images/1647597278814004/in/w1200_q60.jpg",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "4",
  name: "Khaki Interlocking G Cropped Zip-Up",
  price: "$300/day",
  size: ["S", "M", "L"],
  image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_3.0/221451F058000_1/gucci-khaki-interlocking-g-cropped-zip-up.jpg",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "5",
  name: "Webbing-Trimmed Monogrammed Jersey Sweatpants",
  price: "$180",
  size: ["S", "M", "L"],
  image: "https://www.mrporter.com/variants/images/1647597301046726/in/w1200_q60.jpg",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "6",
  name: "Gucci GG Marmont Matelasse Super Mini Bag",
  price: "$70",
  size: ["NA"],
  image: "https://images.stockx.com/images/Gucci-Marmont-Super-Mini-Matelasse-Calfskin-Leather-Black-Studio-v1.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=3&trim=color&trimcolor=ffffff&updated_at=1606317838&q=41",
  brand: "Gucci",
  type: "gucci"
},
{
  id: "1",
  name: "LACOSTE Men'S Pastille Cropped Hooded Jacket Gree",
  price: "$100/day",
  size: ["S", "M", "L"],
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcREyA1vA0Z04u7FvdQcwq4xBwhb6wo-jV-vGPZnxsLulXLstV7kkn-i95i1DpIPNEyqwiwUq3ecVw2i-U_gAP1ZQLCiJOXbvXoHJt1Y6ks9LlrWWuZ-DIuQ&usqp=CAY",
  brand: "Lacoste",
  type: "Lacoste"
},
{
  id: "2",
  name: "Lacoste White Neocroc Bag",
  price: "$50/day",
  size: ["S"],
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrW4dm9Y5VMRetv-NVZOC_BIOB_1q7ZkBSu79rhgEB1o-6HsxN_DDgj0Tcz_26m4sV7bBS6XVIo8_MLKFUSuZHlhaW6cO87BBr2xuHtMhtO0p1VDNa5uvtXA&usqp=CAY",
  brand: "Lacoste",
  type: "Lacoste"
},
{
  id: "3",
  name: "LACOSTE Off-White Half-Zip Sweatshirt",
  price: "$110/day",
  size: ["M", "L"],
  image: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232268M202002_1/lacoste-off-white-half-zip-sweatshirt.jpg",
  brand: "Lacoste",
  type: "Lacoste"
},
{
  id: "4",
  name: "Lacoste Men's Live Logo Graphic Sweatshirt",
  price: "$150/day",
  size: ["S", "M", "L"],
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1ICocrHJCmj74zk5vJiP-Af09VFXyoADL3Bx7W5Eal-IItfw9e4_92RPwJzvQPsjF3Ro-bug2btC0SUkr1EpLx_40LF0MWO7xpinS7f4&usqp=CAY",
  brand: "Lacoste",
  type: "Lacoste"
},
{
  id: "5",
  name: "Lacoste Unisex Monogram Cardigan, Viennese/Expresso, Men's,Sweaters Button-Front & Open Cardigan Sweaters",
  price: "$180",
  size: ["S", "M", "L"],
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRH63zpI_F0ZHhV5zaCoohYMekoqTQP5572sbpRj_n-fJZ-ig8D2PQkqH3HBllTdeZhzaIUpTYzNNLyo7aonM0683WiYJDVf9lGKfAd00i8efosqNEpZTPq&usqp=CAY",
  brand: "Lacoste",
  type: "Lacoste"
},
{
  id: "6",
  name: "Lacoste Multicolor Embroidered Shirt",
  price: "$120",
  size: ["S", "M", "L"],
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiuUFlZHXo0_vPlB83HRshV4XaeQbJP0vaG_NUg6Cq8_R6UW7aVQJmC5zvjqDNlBMj0fUhdqOjg7ACBmWeIkFae_b8fyKf&usqp=CAE",
  brand: "Lacoste",
  type: "Lacoste"
}
,
    {
      id: "1",
      name: "Blue Silk Jacket",
      price: "$105/day",
      size: ["XS", "S", "M", "L", "XL"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1690328752614-VL13045%20BLUE-2.jpg?alt=media&token=df02d623-5b77-4ce6-b764-0ba680163d1f",
      brand: "AURA",
      type: "Work"
    },
    {
      id: "2",
      name: "Button Down Shirt With Pocket",
      price: "$150/day",
      size: ["S", "M", "L", "XL"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1668603197971-VL12414BLUE-2_1024x1024%402x.jpg?alt=media&token=903462e5-d446-4512-b0f5-40e0d22f34db",
      brand: "AURA",
      type: "Work"
    },
    {
      id: "3",
      name: "Neck Bowknot Contrast Sheath Dress Without Belt",
      price: "$90/day",
      size: ["S", "M", "L"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1660151627323-VLS0515%20PURPLE%20BACK.jpg?alt=media&token=64b55118-6fd5-470f-9d66-27cbfb74eba9",
      brand: "AURA",
      type: "Work"
    },
    {
      id: "4",
      name: "Button Down Sweater",
      price: "$130/day",
      size: ["S", "M", "L"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1660145585422-VL12413%20PURPLE%20BACK.jpg?alt=media&token=910aff6a-f68e-4373-96e0-fc6196de2e2e",
      brand: "AURA",
      type: "Work"
    },
    {
      id: "5",
      name: "Long Style Black Dress",
      price: "$150/day",
      size: ["S", "M", "L"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1690296654250-VL13034%20BLACK-2.jpg?alt=media&token=8ee7900a-af79-4436-a9fb-c87345878c98",
      brand: "AURA",
      type: "Work"
    },
    {
      id: "6",
      name: "V-neck Silk Blouse",
      price: "$130/day",
      size: ["S", "M", "L", "XL"],
      image: "https://firebasestorage.googleapis.com/v0/b/beyondtherunway-fc203.appspot.com/o/images%2F1656366698050-VL12340%20BLACK-2.jpg?alt=media&token=0fa92963-3d4b-4016-a624-ef39bfed4d9f",
      brand: "AURA",
      type: "Work"
    }
  ]
  

export {clothes}