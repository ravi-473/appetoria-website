/* ==============================
   APPETORIA — MAIN JAVASCRIPT
   ============================== */

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- MENU DATA ----
const menuData = {
  "Veg Soup": [
    { name: "Veg Clear Soup", price: "₹140" },
    { name: "Veg Sweet Corn Soup", price: "₹170" },
    { name: "Veg Hot & Sour Soup", price: "₹170" },
    { name: "Veg Sweet & Sour Soup", price: "₹170" },
    { name: "Veg Manchow Soup", price: "₹210" },
    { name: "Veg Thukpe", price: "₹310" },
  ],
  "Non Veg Soup": [
    { name: "Bone Garlic Corn Soup", price: "₹240" },
    { name: "Chicken Clear Soup", price: "₹180" },
    { name: "Chicken Hot & Sour Soup", price: "₹210" },
    { name: "Chicken Manchow Soup", price: "₹240" },
    { name: "Chicken Sweet & Sour Soup", price: "₹230" },
    { name: "Chicken Sweet Corn Soup", price: "₹210" },
    { name: "Chicken Thukpa", price: "₹340" },
  ],
  "Veg Starter": [
    { name: "Cheesy Fries", price: "₹210" },
    { name: "Crispy Chilli Baby Corn", price: "₹210" },
    { name: "French Fries", price: "₹150" },
    { name: "Honey Chilli Baby Corn", price: "₹230" },
    { name: "Honey Chilli Mushroom", price: "₹240" },
    { name: "Kurkure Babycorn", price: "₹210" },
    { name: "Mushroom 65", price: "₹230" },
    { name: "Mushroom in Black Bean Sauce", price: "₹260" },
    { name: "Paneer 65", price: "₹260" },
    { name: "Paneer Cordon", price: "₹330" },
    { name: "Paneer in Black Bean Sauce", price: "₹310" },
    { name: "Paneer Salt & Pepper", price: "₹260" },
    { name: "Peri Peri Fries", price: "₹170" },
    { name: "Salt & Pepper Mushroom", price: "₹210" },
  ],
  "Non Veg Starter": [
    { name: "Appetoria Special Pocket Chicken", price: "₹370" },
    { name: "BBQ Wings", price: "₹320" },
    { name: "Buffalo Wings", price: "₹320" },
    { name: "Cheesy Lolypop", price: "₹370" },
    { name: "Chicken 65", price: "₹270" },
    { name: "Chicken Cordon", price: "₹370" },
    { name: "Chicken Dynamite", price: "₹310" },
    { name: "Chicken in Black Bean Sauce", price: "₹340" },
    { name: "Chicken Kabiraji", price: "₹260" },
    { name: "Crispy Chicken in Sweet Chilli Sauce", price: "₹270" },
    { name: "Crispy Chicken", price: "₹250" },
    { name: "Dragon Chicken", price: "₹250" },
    { name: "Drums of Heaven", price: "₹320" },
    { name: "Fried Wing in Hot Garlic Sauce", price: "₹320" },
    { name: "Honey Chilli Wings", price: "₹320" },
    { name: "Honey Glaze Chicken", price: "₹250" },
    { name: "Hong Kong Chicken", price: "₹320" },
    { name: "Korean Fried Chicken", price: "₹320" },
    { name: "Mongolian Wings", price: "₹320" },
    { name: "Peri Peri Chicken", price: "₹252" },
    { name: "Salt & Pepper Chicken", price: "₹250" },
    { name: "Shredded Chicken", price: "₹290" },
  ],
  "Veg Kabab": [
    { name: "Appetoria Spcl. Paneer Malai Kabab", price: "₹448" },
    { name: "Hariyali Paneer", price: "₹378" },
    { name: "Paneer Afgani Kabab", price: "₹392" },
    { name: "Paneer Banjara", price: "₹378" },
    { name: "Paneer Cheesy Matka", price: "₹406" },
    { name: "Paneer Malai", price: "₹392" },
    { name: "Panneer Tikka", price: "₹392" },
    { name: "Peshawari Paneer", price: "₹378" },
  ],
  "Non Veg Kabab": [
    { name: "Afgani Tandoori Chicken", price: "₹392" },
    { name: "Appetoria Spcl. Chelow Kabab", price: "₹588" },
    { name: "Appetoria Special Chicken Malai Kabab", price: "₹490" },
    { name: "Banjara Fish", price: "₹532" },
    { name: "Chicken Banjara Kabab", price: "₹392" },
    { name: "Chicken Cheesy Matka", price: "₹448" },
    { name: "Chicken Reshmi Kabab", price: "₹378" },
    { name: "Chicken Sheekh Kabab", price: "₹392" },
    { name: "Chicken Tikka Kabab", price: "₹392" },
    { name: "Fish Tikka Kabab", price: "₹532" },
    { name: "Hariyali Chicken Kabab", price: "₹378" },
    { name: "Hariyali Fish", price: "₹532" },
    { name: "Kasundi Fish Kabab", price: "₹532" },
    { name: "Nawabi Mataka", price: "₹420" },
    { name: "Peswari Chicken Kabab", price: "₹406" },
    { name: "Peswari Fish", price: "₹532" },
    { name: "Tandoori Chicken", price: "₹392" },
    { name: "Tangri Kabab", price: "₹308" },
  ],
  "Biryani": [
    { name: "Chicken Biryani", price: "₹308" },
    { name: "Chicken Spicy Biryani", price: "₹448" },
    { name: "Egg Biryani", price: "₹224" },
    { name: "Mutton Biryani", price: "₹532" },
    { name: "Mutton Spicy Biryani", price: "₹672" },
    { name: "Veg Biryani", price: "₹252" },
  ],
  "Indian Veg Gravy": [
    { name: "Amritshari Paneer", price: "₹364" },
    { name: "Butter Mushroom Matar Masala", price: "₹322" },
    { name: "Dal Makhani", price: "₹280" },
    { name: "Kadai Mushroom", price: "₹252" },
    { name: "Kadai Paneer", price: "₹336" },
    { name: "Malai Kofta", price: "₹350" },
    { name: "Mattar Paneer Masala", price: "₹322" },
    { name: "Mix Veg", price: "₹294" },
    { name: "Mushroom Dopiyaja", price: "₹252" },
    { name: "Palak Paneer", price: "₹336" },
    { name: "Paneer Butter Masala", price: "₹364" },
    { name: "Paneer Dopiyaja", price: "₹364" },
    { name: "Paneer Ghee Roast", price: "₹364" },
    { name: "Shahi Paneer", price: "₹392" },
    { name: "Veg Bhuna Masala", price: "₹252" },
    { name: "Veg Kolapuri", price: "₹294" },
    { name: "Veg Maratha", price: "₹252" },
    { name: "Yellow Dal Fry", price: "₹224" },
  ],
  "Indian Chicken Gravy": [
    { name: "Adraki Murgh", price: "₹364" },
    { name: "Afgani Chicken", price: "₹364" },
    { name: "Ajwani Chicken", price: "₹364" },
    { name: "Amritshari Chicken", price: "₹364" },
    { name: "Appetoria Special Mughali Murgh", price: "₹448" },
    { name: "Chicken Ghee Roast", price: "₹392" },
    { name: "Chicken Pepper Fry", price: "₹392" },
    { name: "Chicken Tikka Butter Masala", price: "₹392" },
    { name: "Chicken Banjara Masala", price: "₹392" },
    { name: "Chicken Bharta", price: "₹364" },
    { name: "Chicken Dopiyaja", price: "₹350" },
    { name: "Chicken Lababdar", price: "₹364" },
    { name: "Chicken Maharaja", price: "₹392" },
    { name: "Chicken Patiyala", price: "₹364" },
    { name: "Chicken Reshmi Butter Masala", price: "₹392" },
    { name: "Delhi Ka Butter Chicken Boneless", price: "₹392" },
    { name: "Hariyali Chicken Masala", price: "₹392" },
    { name: "Kadai Chicken", price: "₹364" },
    { name: "Kolapuri Chicken", price: "₹364" },
    { name: "Masala Chicken", price: "₹364" },
    { name: "Murgh Kali Mirch", price: "₹392" },
    { name: "Murgh Malai", price: "₹392" },
    { name: "Nawabi Chicken", price: "₹378" },
    { name: "Tandoori Butter Masala", price: "₹448" },
    { name: "Tangari Masala", price: "₹364" },
    { name: "Tawa Masala Chicken", price: "₹364" },
  ],
  "Indian Fish Gravy": [
    { name: "Amritshari Macchi", price: "₹420" },
    { name: "Fish Dopiyaje", price: "₹434" },
    { name: "Fish Kali Mirch", price: "₹434" },
    { name: "Fish Kolapuri", price: "₹420" },
    { name: "Fish Maharaja", price: "₹448" },
    { name: "Kadai Fish", price: "₹434" },
    { name: "Masala Fish", price: "₹420" },
    { name: "Tawa Fish Fry", price: "₹420" },
  ],
  "Indian Prawn": [
    { name: "Masala Prawn", price: "₹490" },
    { name: "Prawn Cocktail", price: "₹490" },
    { name: "Prawn Ghee Roast", price: "₹504" },
    { name: "Prawn Tawa Fry", price: "₹490" },
  ],
  "Chinese Veg Side": [
    { name: "Chilli Mushroom", price: "₹238" },
    { name: "Chilli Paneer", price: "₹310" },
    { name: "Garlic Paneer", price: "₹310" },
    { name: "Garlic Mushroom", price: "₹238" },
    { name: "Hot & Sour Mushroom", price: "₹250" },
    { name: "Hot & Sour Paneer", price: "₹310" },
    { name: "Kung Pao Mushroom", price: "₹252" },
    { name: "Kung Pao Paneer", price: "₹310" },
    { name: "Mushroom Manchurian", price: "₹238" },
    { name: "Paneer Manchurian", price: "₹310" },
    { name: "Schezwan Mushroom", price: "₹252" },
    { name: "Schezwan Paneer", price: "₹310" },
    { name: "Sweet & Sour Paneer", price: "₹310" },
    { name: "Teriyaki Mushroom", price: "₹238" },
    { name: "Teriyaki Paneer", price: "₹310" },
    { name: "Veg Manchurian", price: "₹250" },
  ],
  "Chinese Non Veg Side": [
    { name: "Chicken Manchurian", price: "₹308" },
    { name: "Chilli Chicken", price: "₹294" },
    { name: "Garlic Chicken", price: "₹294" },
    { name: "Hot & Sour Chicken", price: "₹308" },
    { name: "Kung Pao Chicken", price: "₹308" },
    { name: "Lemon Chilli Chicken", price: "₹294" },
    { name: "Sweet & Sour Chicken", price: "₹308" },
    { name: "Schezwan Chicken", price: "₹308" },
    { name: "Teriyaki Chicken", price: "₹294" },
  ],
  "Prawn (Chinese)": [
    { name: "Butter Garlic Prawn", price: "₹490" },
    { name: "Chilli Prawn", price: "₹490" },
    { name: "Golden Fried Prawn", price: "₹490" },
    { name: "Hot Garlic Prawn", price: "₹490" },
    { name: "Salt & Pepper Prawn", price: "₹490" },
    { name: "Schezwan Prawn", price: "₹490" },
    { name: "Teriyaki Prawn", price: "₹490" },
  ],
  "Fish (Chinese)": [
    { name: "Chilli Basil Fish", price: "₹448" },
    { name: "Crispy Fish in Sweet Chili Sauce", price: "₹378" },
    { name: "Dragon Fish", price: "₹364" },
    { name: "Fish Dynamite", price: "₹406" },
    { name: "Fish Fry", price: "₹322" },
    { name: "Fish in Devil Sauce", price: "₹364" },
    { name: "Fish Kabiraji", price: "₹392" },
    { name: "Fish Korean Stick", price: "₹392" },
    { name: "Fish Manchurian", price: "₹378" },
    { name: "Garlic Fish", price: "₹364" },
    { name: "Hong Kong Style Fish", price: "₹378" },
    { name: "Hot Garlic Fish", price: "₹378" },
    { name: "Kung Pao Fish", price: "₹378" },
    { name: "Lemon Chilli Fish", price: "₹392" },
    { name: "Pan Fried Chili Fish", price: "₹378" },
    { name: "Salt & Pepper Fish", price: "₹392" },
    { name: "Schezwan Fish", price: "₹378" },
    { name: "Sweet & Sour Fish", price: "₹364" },
    { name: "Teriyaki Fish", price: "₹378" },
  ],
  "Noodles": [
    { name: "Chicken Chili Garlic Noodles", price: "₹238" },
    { name: "Chicken Hakka Noodles", price: "₹224" },
    { name: "Chicken Manchurian Noodles", price: "₹364" },
    { name: "Chicken Schezwan Noodles", price: "₹252" },
    { name: "Egg Chicken Chili Garlic Noodles", price: "₹294" },
    { name: "Egg Chicken Hakka Noodles", price: "₹252" },
    { name: "Egg Chicken Schezwan Noodles", price: "₹308" },
    { name: "Egg Chili Garlic Noodles", price: "₹210" },
    { name: "Egg Hakka Noodles", price: "₹196" },
    { name: "Egg Schezwan Noodles", price: "₹224" },
    { name: "Mix Chilli Garlic Noodles", price: "₹350" },
    { name: "Mix Hakka Noodles", price: "₹322" },
    { name: "Mix Schezwan Noodles", price: "₹364" },
    { name: "Non Veg Butter Garlic Noodles", price: "₹350" },
    { name: "Non Veg Cantonese Noodles", price: "₹350" },
    { name: "Non Veg Korean Noodles", price: "₹350" },
    { name: "Non Veg Pan Fried Noodles", price: "₹350" },
    { name: "Non Veg Singapori Noodles", price: "₹350" },
    { name: "Veg Butter Garlic Noodles", price: "₹308" },
    { name: "Veg Cantonese Noodles", price: "₹308" },
    { name: "Veg Chili Garlic Noodles", price: "₹182" },
    { name: "Veg Hakka Noodles", price: "₹168" },
    { name: "Veg Korean Noodles", price: "₹308" },
    { name: "Veg Manchurian Noodles", price: "₹308" },
    { name: "Veg Pan Fried Noodles", price: "₹308" },
    { name: "Veg Schezwan Noodles", price: "₹196" },
    { name: "Veg Singapori Noodles", price: "₹308" },
  ],
  "Fried Rice": [
    { name: "Chicken Chili Garlic Rice", price: "₹238" },
    { name: "Chicken Fried Rice", price: "₹224" },
    { name: "Chicken Manchurian Rice", price: "₹364" },
    { name: "Chicken Schezwan Rice", price: "₹252" },
    { name: "Egg Chicken Chili Garlic Rice", price: "₹294" },
    { name: "Egg Chicken Fried Rice", price: "₹252" },
    { name: "Egg Chicken Schezwan Rice", price: "₹308" },
    { name: "Egg Chili Garlic Rice", price: "₹210" },
    { name: "Egg Fried Rice", price: "₹196" },
    { name: "Egg Schezwan Rice", price: "₹224" },
    { name: "Mix Chilli Garlic Rice", price: "₹350" },
    { name: "Mix Fried Rice", price: "₹322" },
    { name: "Mix Schezwan Rice", price: "₹350" },
    { name: "Non Veg Butter Garlic Rice", price: "₹350" },
    { name: "Non Veg Korean Rice", price: "₹350" },
    { name: "Non Veg Singapori Rice", price: "₹364" },
    { name: "Veg Butter Garlic Rice", price: "₹294" },
    { name: "Veg Chilli Garlic Rice", price: "₹182" },
    { name: "Veg Fried Rice", price: "₹168" },
    { name: "Veg Korean Rice", price: "₹294" },
    { name: "Veg Manchurian Rice", price: "₹308" },
    { name: "Veg Schezwan Rice", price: "₹196" },
    { name: "Veg Singapori Rice", price: "₹308" },
  ],
  "Indian Rice": [
    { name: "Appetoria Spcl. Nawabi Murg Pulao", price: "₹490" },
    { name: "Basmati Pulao", price: "₹224" },
    { name: "Chicken Tawa Pulao", price: "₹364" },
    { name: "Jeera Rice", price: "₹154" },
    { name: "Kashmiri Pulao", price: "₹308" },
    { name: "Peas Pulao", price: "₹182" },
    { name: "Steam Rice", price: "₹112" },
    { name: "Veg Tawa Pulao", price: "₹308" },
  ],
  "Continental": [
    { name: "Baked Fish", price: "₹532" },
    { name: "Basil Chicken Delight", price: "₹392" },
    { name: "Chicken Ala Kiev", price: "₹490" },
    { name: "Chicken Stroganoff", price: "₹476" },
    { name: "Creamy Chicken Lolypop", price: "₹392" },
    { name: "Crispy Chicken Roulade", price: "₹364" },
    { name: "Devil's Chicken", price: "₹336" },
    { name: "Grilled Chicken in Pesto Sauce", price: "₹490" },
    { name: "Grilled Chicken in Creamy Mushroom Sauce with Herb Rice", price: "₹532" },
    { name: "Grilled Fish with Herb Rice", price: "₹588" },
    { name: "Paneer in Mushroom Sauce with Herb Rice", price: "₹448" },
    { name: "Paneer Stroganoff", price: "₹392" },
  ],
  "Pasta": [
    { name: "Meatball Spaghetti", price: "₹490" },
    { name: "Non Veg Alfredo Pasta", price: "₹434" },
    { name: "Non Veg Aglio Olio", price: "₹462" },
    { name: "Non Veg Arrabiata Pasta", price: "₹434" },
    { name: "Non Veg Baked Pasta", price: "₹490" },
    { name: "Non Veg Lasagna", price: "₹532" },
    { name: "Non Veg Pink Sauce Pasta", price: "₹434" },
    { name: "Veg Alfredo Pasta", price: "₹350" },
    { name: "Veg Aglio Olio", price: "₹392" },
    { name: "Veg Arrabiata Pasta", price: "₹350" },
    { name: "Veg Baked Pasta", price: "₹434" },
    { name: "Veg Lasagna", price: "₹448" },
    { name: "Veg Pink Sauce Pasta", price: "₹364" },
  ],
  "Pizza (10\")": [
    { name: "BBQ Chicken Pizza", price: "₹488.60" },
    { name: "Chicken Overload Pizza", price: "₹530.60" },
    { name: "Chicken Tikka Pizza", price: "₹488.40" },
    { name: "Corn Chicken Pizza", price: "₹474.60" },
    { name: "Margarita Pizza", price: "₹278.60" },
    { name: "Paneer BBQ Pizza", price: "₹418.60" },
    { name: "Paneer Tikka Pizza", price: "₹418.60" },
    { name: "Veggies Paradise Pizza", price: "₹348.60" },
  ],
  "Sandwich": [
    { name: "Bar BQ Chicken Sandwich", price: "₹266" },
    { name: "Cheesy Chicken Sandwich", price: "₹266" },
    { name: "Cheesy Golden Corn Sandwich", price: "₹182" },
    { name: "Chicken Tikka Sandwich", price: "₹252" },
    { name: "Corn & Chicken Sandwich", price: "₹224" },
    { name: "Golden Corn & Paneer Sandwich", price: "₹252" },
    { name: "Grilled Chicken Sandwich", price: "₹210" },
    { name: "Non Veg Appetoria Spcl. Club Sandwich", price: "₹336" },
    { name: "Paneer Tikka Sandwich", price: "₹238" },
    { name: "Veg Appetoria Spcl. Club Sandwich", price: "₹252" },
    { name: "Veg Delight Sandwich", price: "₹154" },
  ],
  "Naanza": [
    { name: "Butter Chicken Naanza", price: "₹448" },
    { name: "Butter Paneer Naanza", price: "₹406" },
    { name: "Chicken Tikka Naanza", price: "₹448" },
    { name: "Paneer Tikka Naanza", price: "₹406" },
    { name: "Veg Garden Naanza", price: "₹392" },
  ],
  "Bread": [
    { name: "Butter Naan", price: "₹84" },
    { name: "Butter Tandoori Roti", price: "₹49" },
    { name: "Butter Tawa Roti", price: "₹21" },
    { name: "Cheese Naan", price: "₹140" },
    { name: "Chicken Keema Naan", price: "₹210" },
    { name: "Garlic Naan", price: "₹98" },
    { name: "Laccha Paratha", price: "₹70" },
    { name: "Masala Kulcha", price: "₹140" },
    { name: "Paneer Paratha", price: "₹168" },
    { name: "Plain Naan", price: "₹70" },
    { name: "Tandoori Roti", price: "₹42" },
  ],
  "Thai Dish": [
    { name: "Non Veg Thai Green Curry", price: "₹504" },
    { name: "Non Veg Thai Red Curry", price: "₹504" },
    { name: "Veg Thai Green Curry", price: "₹448" },
    { name: "Veg Thai Red Curry", price: "₹448" },
  ],
  "Momo": [
    { name: "Darjeeling Fried Momo", price: "₹154" },
    { name: "Darjeeling Pan Fried Momo", price: "₹196" },
    { name: "Darjeeling Steam Momo", price: "₹138.60" },
  ],
  "Sizzler": [
    { name: "Chicken Sizzler Platter", price: "₹532" },
    { name: "Chinese Non Veg Sizzler", price: "₹462" },
    { name: "Chinese Veg Sizzler", price: "₹392" },
    { name: "Veg Sizzler Platter", price: "₹448" },
  ],
  "Combo": [
    { name: "Chinese Non Veg Combo (Chicken pakora + veg rice + chilli chicken + salad)", price: "₹322" },
    { name: "Chinese Veg Combo (French fries + veg rice/noodles + chilli paneer + salad)", price: "₹238" },
    { name: "Indian Non Veg Combo (Tandoori roti + zeera rice + masala chicken + gulab jamun + salad)", price: "₹392" },
    { name: "Indian Veg Combo (Tandoori roti + zeera rice + masala paneer + gulab jamun + salad)", price: "₹336" },
  ],
  "Wrap & Roll": [
    { name: "Chicken Cheese Roll", price: "₹252" },
    { name: "Chicken Roll", price: "₹154" },
    { name: "Double Chicken Roll", price: "₹224" },
    { name: "Double Egg Roll", price: "₹112" },
    { name: "Egg Chicken Roll", price: "₹182" },
    { name: "Egg Roll", price: "₹98" },
    { name: "Paneer Roll", price: "₹126" },
  ],
  "Salad": [
    { name: "Chicken Grilled Salad", price: "₹448" },
    { name: "Chicken Tikka Salad", price: "₹448" },
    { name: "Green Salad", price: "₹126" },
    { name: "Grilled Paneer Salad", price: "₹392" },
    { name: "Lemon Herb Chicken Salad", price: "₹448" },
    { name: "Non Veg Caesar Salad", price: "₹448" },
    { name: "Onion Salad", price: "₹98" },
    { name: "Paneer Tikka Salad", price: "₹392" },
    { name: "Russian Salad", price: "₹406" },
    { name: "Veg Caesar Salad", price: "₹392" },
  ],
  "Dessert": [
    { name: "Brownie with Ice Cream", price: "₹308" },
    { name: "Gulab Jamun (2 Pcs)", price: "₹70" },
    { name: "Hot Gulab Jamun with Ice Cream", price: "₹112" },
    { name: "As You Like It (3 scoops with dry fruits)", price: "₹350" },
    { name: "Butter Scotch Ice Cream", price: "₹166.60" },
    { name: "Choco Brownie Sundae", price: "₹378" },
    { name: "Chocolate Ice Cream", price: "₹138.60" },
    { name: "Oreo Kitkat Sundae", price: "₹378" },
    { name: "Strawberry Ice Cream", price: "₹138.60" },
    { name: "Vanilla Ice Cream", price: "₹124.60" },
  ],
  "Shakes": [
    { name: "Butterscotch Bliss", price: "₹306.60" },
    { name: "Choco Coffee Shake", price: "₹334.60" },
    { name: "Choco Craze", price: "₹264.60" },
    { name: "Kitkat Krush", price: "₹264.60" },
    { name: "Mango Magic", price: "₹222.60" },
    { name: "Oreo Overload", price: "₹250.60" },
    { name: "Pink Paradise", price: "₹250.60" },
    { name: "Vanilla Velvet", price: "₹194.60" },
  ],
  "Refreshers & Mocktails": [
    { name: "Blue Berry Mojito", price: "₹194.60" },
    { name: "Blue Lagoon", price: "₹180.60" },
    { name: "Coco Mango", price: "₹208.60" },
    { name: "Cold Drink", price: "₹56" },
    { name: "Fresh Lime Soda", price: "₹124.60" },
    { name: "Kiwi Bliss", price: "₹194.60" },
    { name: "Mango Mojito", price: "₹180.60" },
    { name: "Masala Cold Drink", price: "₹298" },
    { name: "Merry Berry", price: "₹208.60" },
    { name: "Orange Blast", price: "₹180.60" },
    { name: "Pina Colada", price: "₹222.60" },
    { name: "Soda Sikanji", price: "₹138.60" },
    { name: "Strawberry Mango", price: "₹222.60" },
    { name: "Virgin Mojito", price: "₹166.60" },
    { name: "Water", price: "₹28" },
  ],
  "Café": [
    { name: "Cappuccino", price: "₹154" },
    { name: "Cold Coffee", price: "₹252" },
    { name: "Darjeeling Tea", price: "₹84" },
    { name: "Espresso", price: "₹84" },
    { name: "Green Tea", price: "₹84" },
    { name: "Milk Masala Tea", price: "₹112" },
  ],
};

// Category icon mapping
const catIcons = {
  "Veg Soup": "🍲", "Non Veg Soup": "🍜", "Veg Starter": "🥦",
  "Non Veg Starter": "🍗", "Veg Kabab": "🧀", "Non Veg Kabab": "🔥",
  "Biryani": "🍚", "Indian Veg Gravy": "🫕", "Indian Chicken Gravy": "🍛",
  "Indian Fish Gravy": "🐟", "Indian Prawn": "🦐", "Chinese Veg Side": "🥬",
  "Chinese Non Veg Side": "🥢", "Prawn (Chinese)": "🦐", "Fish (Chinese)": "🐠",
  "Noodles": "🍝", "Fried Rice": "🍳", "Indian Rice": "🌾",
  "Continental": "🍽️", "Pasta": "🍝", "Pizza (10\")": "🍕",
  "Sandwich": "🥪", "Naanza": "🫓", "Bread": "🫓",
  "Thai Dish": "🌿", "Momo": "🥟", "Sizzler": "♨️",
  "Combo": "🎁", "Wrap & Roll": "🌯", "Salad": "🥗",
  "Dessert": "🍨", "Shakes": "🥤", "Refreshers & Mocktails": "🍹",
  "Café": "☕",
};

// Filter mapping
const catToFilter = {
  "all": "all",
  "Soup": ["Veg Soup", "Non Veg Soup"],
  "Starter": ["Veg Starter", "Non Veg Starter"],
  "Kabab": ["Veg Kabab", "Non Veg Kabab"],
  "Biryani": ["Biryani"],
  "Indian Gravy": ["Indian Veg Gravy", "Indian Chicken Gravy", "Indian Fish Gravy", "Indian Prawn"],
  "Chinese": ["Chinese Veg Side", "Chinese Non Veg Side", "Prawn (Chinese)", "Fish (Chinese)"],
  "Noodles": ["Noodles"],
  "Fried Rice": ["Fried Rice"],
  "Continental": ["Continental"],
  "Pasta": ["Pasta"],
  "Pizza": ["Pizza (10\")"],
  "Sandwich": ["Sandwich"],
  "Sizzler": ["Sizzler"],
  "Naanza": ["Naanza"],
  "Bread": ["Bread"],
  "Thai": ["Thai Dish"],
  "Momo": ["Momo"],
  "Dessert": ["Dessert", "Shakes", "Refreshers & Mocktails", "Café"],
  "Drinks": ["Shakes", "Refreshers & Mocktails", "Café"],
};

// ---- RENDER MENU ----
function renderMenu(filterCat = "all", searchQuery = "") {
  const container = document.getElementById('menuContainer');
  container.innerHTML = '';

  let catsToShow = Object.keys(menuData);
  if (filterCat !== "all" && catToFilter[filterCat]) {
    catsToShow = catToFilter[filterCat];
  }

  let anyResult = false;
  const query = searchQuery.trim().toLowerCase();

  catsToShow.forEach(cat => {
    const items = menuData[cat];
    if (!items) return;

    const filtered = query
      ? items.filter(i => i.name.toLowerCase().includes(query))
      : items;
    if (filtered.length === 0) return;

    anyResult = true;
    const catDiv = document.createElement('div');
    catDiv.className = 'menu-category';
    catDiv.innerHTML = `
      <div class="menu-cat-header">
        <div class="menu-cat-icon">${catIcons[cat] || '✦'}</div>
        <span class="menu-cat-title">${cat}</span>
        <span class="menu-cat-count">${filtered.length} items</span>
      </div>
      <div class="menu-items-list">
        ${filtered.map(item => `
          <div class="menu-item">
            <span class="menu-item-name">${item.name}</span>
            <div class="menu-item-dots"></div>
            <span class="menu-item-price">${item.price}</span>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(catDiv);
  });

  if (!anyResult) {
    container.innerHTML = '<p class="no-results">No dishes found. Try a different search.</p>';
  }
}

// Init menu
renderMenu();

// Filter buttons
let activeFilter = "all";
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    renderMenu(activeFilter, document.getElementById('menuSearch').value);
  });
});

// Search
document.getElementById('menuSearch').addEventListener('input', e => {
  renderMenu(activeFilter, e.target.value);
});

// ---- RESERVE TABLE ----
const reserveForm = document.getElementById('reserveForm');
const reserveSuccess = document.getElementById('reserveSuccess');

// Set min date to today
const dateInput = document.getElementById('resDate');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const booking = {
    id: Date.now(),
    name: document.getElementById('resName').value.trim(),
    mobile: document.getElementById('resMobile').value.trim(),
    date: document.getElementById('resDate').value,
    time: document.getElementById('resTime').value,
    guests: document.getElementById('resGuests').value,
    request: document.getElementById('resRequest').value.trim() || 'None',
    status: 'pending',
    createdAt: new Date().toLocaleString('en-IN'),
  };

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem('appetoria_bookings') || '[]');
  existing.push(booking);
  localStorage.setItem('appetoria_bookings', JSON.stringify(existing));

  // Show success
  reserveForm.style.display = 'none';
  reserveSuccess.style.display = 'block';

  // Reset form
  reserveForm.reset();
});

// ---- ADMIN PORTAL ----
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'appetoria2026';

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadReservations();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
});

function logoutAdmin() {
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminUser').value = '';
  document.getElementById('adminPass').value = '';
}

function loadReservations() {
  const bookings = JSON.parse(localStorage.getItem('appetoria_bookings') || '[]');
  const list = document.getElementById('reservationsList');

  // Stats
  const total = bookings.length;
  const confirmed = bookings.filter(b => b.status === 'confirmed').length;
  const pending = bookings.filter(b => b.status === 'pending').length;
  const cancelled = bookings.filter(b => b.status === 'cancelled').length;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statConfirmed').textContent = confirmed;
  document.getElementById('statPending').textContent = pending;
  document.getElementById('statCancelled').textContent = cancelled;
  document.getElementById('resCount').textContent = `${total} booking${total !== 1 ? 's' : ''}`;

  if (bookings.length === 0) {
    list.innerHTML = '<p class="no-bookings">No reservations yet. They will appear here when customers book a table.</p>';
    return;
  }

  // Sort newest first
  const sorted = [...bookings].reverse();

  list.innerHTML = sorted.map(b => `
    <div class="booking-card ${b.status}" id="card-${b.id}">
      <div class="booking-info">
        <h4>${b.name}</h4>
        <div class="booking-meta">
          <span><i class="fas fa-phone"></i> ${b.mobile}</span>
          <span><i class="fas fa-calendar"></i> ${b.date}</span>
          <span><i class="fas fa-clock"></i> ${b.time}</span>
          <span><i class="fas fa-users"></i> ${b.guests}</span>
          <span><i class="fas fa-info-circle"></i> Booked: ${b.createdAt}</span>
        </div>
        ${b.request && b.request !== 'None' ? `<p class="booking-request">💬 "${b.request}"</p>` : ''}
      </div>
      <div class="booking-actions">
        <span class="status-badge ${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span>
        <div class="booking-btns">
          <button class="btn-confirm" onclick="updateStatus(${b.id}, 'confirmed')">✓ Confirm</button>
          <button class="btn-cancel" onclick="updateStatus(${b.id}, 'cancelled')">✗ Cancel</button>
          <button class="btn-delete" onclick="deleteBooking(${b.id})">🗑 Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateStatus(id, newStatus) {
  const bookings = JSON.parse(localStorage.getItem('appetoria_bookings') || '[]');
  const idx = bookings.findIndex(b => b.id === id);
  if (idx !== -1) {
    bookings[idx].status = newStatus;
    localStorage.setItem('appetoria_bookings', JSON.stringify(bookings));
    loadReservations();
  }
}

function deleteBooking(id) {
  if (!confirm('Delete this booking?')) return;
  const bookings = JSON.parse(localStorage.getItem('appetoria_bookings') || '[]');
  const updated = bookings.filter(b => b.id !== id);
  localStorage.setItem('appetoria_bookings', JSON.stringify(updated));
  loadReservations();
}

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- INTERSECTION OBSERVER for animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.dish-card').forEach(card => {
  observer.observe(card);
});
