import React, { useState,useEffect } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    email: '',
    homeAddress: '',
    adultsCount: '',
    kidsCount: '',
    vegetarianCount: '',
    nonVegetarianCount: '',
    cateringDate: '',
    cateringTime: '',
    mealType: '',
    spiceLevel: '',
    delivery: '',
    noteText: ''
  });


  
  const categories = [
    { 
      name: "Breakfast", 
      image: "/image3.png",  // Image for the category
      items: [
          { id: 1, name: "Idly", description: "Soft, fluffy, and healthy South Indian steamed rice cakes." ,image: "idly.png" },
      { id: 2, name: "Upma", description: "Savory and wholesome semolina dish with mild spices.",image: "upma.png" },
      { id: 3, name: "Hot Pongal", description: "Comforting rice-lentil dish with a touch of ghee.",image:"pongal.png" },
      { id: 4, name: "Vada for Breakfast", description: "Crispy, golden lentil fritters with a soft bite.",image:"vada.png" },
      { id: 5, name: "Tea", description: "Aromatic, refreshing Indian chai with a soothing taste." ,image:"tea.png"},
      { id: 6, name: "Coffee", description: "Strong and flavorful South Indian filter coffee.",image:"coffee.png" },
      { id: 7, name: "Mysore Bonda for Breakfast", description: "Crispy outside, fluffy inside, deep-fried delight." ,image:"vada.png"},
      { id: 8, name: "Poori for Breakfast", description: "Puffy, golden fried bread with an airy texture." ,image:"poori.png"}
      ]
    },
	
	 { 
      name: "Appetizers", 
      image: "/Rectangle 23.png",  // Image for the category
      items: [
	  
	 { id: 9, name: "Punugulu", description: "Crispy deep-fried dumplings with a soft, airy center.",image:'c1.png' },
      { id: 10, name: "Cut Mirchi", description: "Spicy deep-fried chili fritters, crunchy and flavorful." ,image:'c2.png'},
      { id: 11, name: "Mirchi Bajji", description: "Stuffed, battered, and fried green chili snack.",image:'2.png' },
      { id: 12, name: "Aloo Bajji", description: "Crispy potato slices dipped in seasoned gram batter.",image:"aalo.png" },
      { id: 13, name: "Aratikaya Bajji", description: "Crunchy plantain fritters with a golden crust." ,image:'bonda.png'},
      { id: 14, name: "Garelu", description: "Crispy lentil donuts with a soft and chewy center.",image:'c3.png' },
      { id: 15, name: "Onion Pakoda", description: "Spiced onion fritters, crispy and golden brown." ,image:'c4.png'},
      { id: 16, name: "Mixed Veg Pakoda", description: "Assorted vegetable fritters with a spicy crunch." ,image:'c5.png'},
      { id: 17, name: "Mysore Bonda", description: "Light and crispy deep-fried snack with mild spice." ,image:'3.png'},
      { id: 18, name: "Masala Vada", description: "Crunchy, spiced lentil fritters with a nutty flavor.",image:'1.png' },
      { id: 19, name: "Big Onion Samosa", description: "Crispy samosa with spiced onion filling inside." ,image:'5.png'},
      { id: 20, name: "Big Aloo Samosa", description: "Golden pastry pockets stuffed with spicy potato." ,image:'7.png'},
      { id: 21, name: "Gobi Manchurian", description: "Indo-Chinese crispy cauliflower tossed in sauce.",image:'b1.png' },
      { id: 22, name: "Gobi 65 (Dry)", description: "Spicy, deep-fried cauliflower with bold seasoning." ,image:'b2.png'},
      { id: 23, name: "Baby Corn Manchurian", description: "Fiery baby corn tossed in a spicy Manchurian sauce.",image:'1.png' },
      { id: 24, name: "Dahiwada", description: "Soft lentil dumplings soaked in spiced yogurt.",image:'2.png' },
      { id: 25, name: "Mini Onion Samosa", description: "Mini crispy onion samosas bursting with flavor." ,image:'3.png'},
      { id: 26, name: "Chilli Paneer", description: "Fiery, saucy, stir-fried paneer with bold spices.",image:'4.png' }
	 ] 
    },
	 { 
    name: "Non-Vegetarian Appetizers", 
    image: "/2.png", 
    items: [
      { id: 27, name: "Chilli Chicken", description: "Spicy, crispy chicken tossed in tangy sauce.",image:'1.png' },
      { id: 28, name: "Chicken 65", description: "Deep-fried, marinated chicken with fiery masala.",image:'c1.png'},
      { id: 29, name: "Chicken Pakoda (Dry)", description: "Crispy, spicy chicken fritters packed with flavor." ,image:'c7.png'},
      { id: 30, name: "Fish 555", description: "Fiery, fried fish tossed in spicy aromatic masala.",image:'5.png' },
      { id: 31, name: "Chicken Manchuria", description: "Indo-Chinese chicken tossed in spicy sauce." ,image:'b1.png'},
      { id: 32, name: "Curry Leaf Chicken", description: "South Indian spiced chicken with curry leaves.",image:'4.png' },
      { id: 33, name: "Kodi Vepudu (Bone-in Chicken)", description: "Spicy Andhra-style stir-fried chicken dish." ,image:'b2.png'}
    ]
  },
  { 
    name: "Vegetarian Curries", 
    image: "/1.png", 
    items: [
      { id: 34, name: "Gutti Vankaya Masala Curry", description: "Stuffed brinjals in a rich Andhra-style gravy.",image:'1.png' },
      { id: 35, name: "Cashew Drumstick Curry", description: "Creamy cashew-based curry with tender drumsticks.",image:'2.png' },
      { id: 36, name: "Chole (Channa Masala) Curry", description: "Spiced chickpea curry with rich tomato gravy." ,image:'3.png'},
      { id: 37, name: "Vankaya Drumstick Curry", description: "Eggplant-drumstick curry with bold Andhra spices.",image:'4.png' },
      { id: 38, name: "Dosakaya Tomato Curry", description: "Tangy cucumber tomato curry with mild spices.",image:'5.png' },
      { id: 39, name: "Beerakaya Channa Dal Curry", description: "Ridge gourd and channa dal in aromatic gravy." ,image:'7.png'},
      { id: 40, name: "Pesarattu Curry", description: "Green gram pancakes served with spicy curry." ,image:'1.png'},
      { id: 41, name: "Malai Kofta Curry", description: "Soft cottage cheese dumplings in creamy gravy." ,image:'2.png'},
      { id: 42, name: "Paneer Butter Masala Curry", description: "Rich, buttery paneer curry with mild spice." ,image:'3.png'},
      { id: 43, name: "Aloo Gobi Curry", description: "Potato-cauliflower curry cooked with mild spices.",image:'4.png' },
      { id: 44, name: "Aloo Korma", description: "Creamy, cashew-based potato curry with rich flavor." ,image:'5.png'},
      { id: 45, name: "Navratan Korma", description: "Royal mixed veg curry with nuts and cream.",image:'7.png'},
      { id: 46, name: "Cashew Capsicum Phool Makhani", description: "Nutty capsicum curry in a creamy sauce.",image:'1.png' },
      { id: 47, name: "Cashew Paneer Masala Curry", description: "Creamy paneer curry with cashew goodness.",image:'2.png' },
      { id: 48, name: "Cashew Potato Masala", description: "Rich potato curry with cashew-based gravy." ,image:'3.png'},
      { id: 49, name: "Roti Pachadi", description: "A rustic Andhra chutney, stone-ground for bold flavors.",image:'7.png' }
    ]
  },
  { 
    name: "Non-Vegetarian Curries", 
    image: "/image2.png", 
    items: [
      { id: 50, name: "Chicken Curry", description: "Classic home-style chicken curry with spices.",image:'c1.png' },
      { id: 51, name: "Spicy Andhra Chicken Curry", description: "Fiery, bold Andhra-style chicken curry.",image:'c2.png' },
      { id: 52, name: "Gongura Chicken Curry", description: "Tangy, spicy curry with gongura leaves." ,image:'c3.png'},
      { id: 53, name: "Methi Chicken Curry", description: "Fragrant chicken curry with fresh fenugreek leaves.",image:'/c4.png' },
      { id: 54, name: "Boneless Chicken Fry", description: "Crispy and spicy deep-fried boneless chicken." ,image:'/c5.png'},
      { id: 55, name: "Pepper Chicken Fry", description: "Spicy black pepper-infused chicken fry.",image:'/c1.png' },
      { id: 56, name: "Mutton Curry", description: "Slow-cooked, rich, and spicy Andhra mutton curry." ,image:'/c2.png'},
      { id: 57, name: "Gongura Mutton Curry", description: "Tangy gongura-infused mutton curry delight.",image:'/c3.png' },
      { id: 58, name: "Fish Pulusu", description: "Spicy tamarind-based Andhra-style fish curry." ,image:'/c4.png'},
      { id: 59, name: "Fish Fry", description: "Crispy fried fish with bold coastal flavors.",image:'/c5.png' },
      { id: 60, name: "Shrimp Fry", description: "Spicy, crispy shrimp fry with bold masala." ,image:'/c1.png'},
      { id: 61, name: "Shrimp Curry", description: "Juicy shrimp cooked in a rich Andhra-style gravy.",image:'/c2.png' },
      { id: 62, name: "Ankapur Chicken Curry", description: "Signature village-style spicy chicken curry.",image:'/c3.png' }
    ]
  },
      { 
    name: "Vegetarian Rice Dishes", 
    image: "/3.png", 
    items: [
      { id: 63, name: "White Rice", description: "Simple, fluffy steamed rice, perfect with curries.",image:"veg.png" },
      { id: 64, name: "Curd", description: "Cool, creamy curd to pair with spicy Andhra meals." ,image:"6.png"},
      { id: 65, name: "Tamarind Pulihora", description: "Tangy, spiced tamarind rice with a bold taste." ,image:"pulav.png"},
      { id: 66, name: "Curd Rice", description: "Cooling curd rice with a hint of seasoning.",image:"paneer.png" },
      { id: 67, name: "Veg Pulao", description: "Fragrant basmati rice cooked with fresh vegetables." ,image:"pulav.png"},
      { id: 68, name: "Bagara Rice", description: "Mildly spiced Hyderabadi-style flavored rice.",image:"paneer.png" },
      { id: 69, name: "Veg Biryani", description: "Aromatic rice with spiced vegetables and herbs." ,image:"veg.png"},
      { id: 70, name: "Tomato Rice", description: "Tangy tomato-flavored rice with a spicy kick." ,image:"paneer.png"},
      { id: 71, name: "Raju Gari Veg Pulao (Spicy)", description: "Fiery and aromatic spicy vegetable pulao." ,image:"pulav.png"},
      { id: 72, name: "Bismillah Bath (Sambar Rice)", description: "Hearty South Indian rice soaked in sambar.",image:"paneer.png" },
      { id: 73, name: "Veg Noodles", description: "Stir-fried noodles loaded with fresh vegetables.",image:"veg.png" },
      { id: 74, name: "Lemon Rice", description: "Zesty and refreshing South Indian lemon-infused rice." ,image:"paneer.png"},
      { id: 75, name: "Paneer Biryani", description: "Flavorful biryani with soft, spiced paneer cubes.",image:"paneer.png" },
      { id: 76, name: "Gongura Paneer Biryani", description: "Tangy, spicy paneer biryani with gongura." ,image:"paneer.png"},
      { id: 77, name: "Gongura Veg Biryani", description: "Aromatic vegetable biryani with gongura.",image:"veg.png" },
      { id: 78, name: "Jackfruit Pulao (Spicy)", description: "Bold and flavorful jackfruit-infused pulao.",image:"pulav.png" }
    ]
  },
  {
    name: "Non-Vegetarian Rice Dishes",
    image: "/4.png",  // E4xample image
    items: [
      { id: 79, name: "Chicken Biryani", description: "Fragrant basmati rice cooked with spiced chicken.",image:"b1.png" },
      { id: 80, name: "Gongura Chicken Biryani", description: "Tangy gongura blends with spiced chicken biryani.",image:"b2.png" },
      { id: 81, name: "Vijayawada Spl Boneless Chicken Biryani", description: "Authentic Vijayawada biryani with tender boneless chicken." ,image:"b2.png"},
      { id: 82, name: "Mutton Biryani", description: "Slow-cooked mutton in aromatic spices and fluffy rice.",image:"b1.png" },
      { id: 84, name: "Mutton Keema Biryani", description: "Flavorful minced mutton layered with fragrant biryani rice." ,image:"b1.png"},
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 85, name: "Raju Gari Chicken Pulao (Spicy)", description: "Spicy royal-style chicken pulao bursting with flavors.",image:"b1.png" },
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 86, name: "Raju Gari Chicken Biryani (Spicy)", description: "Fiery biryani with succulent chicken and bold spices." ,image:"b1.png"},
      { id: 87, name: "Chicken Pulao", description: "Light, aromatic pulao cooked with tender chicken pieces.",image:"b1.png" },
      { id: 88, name: "Raju Gari Shrimp Pulao (Spicy)", description: "Spicy and rich prawn pulao with royal Andhra flavors.",image:"b1.png" },
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 89, name: "Gongura Shrimp Pulao", description: "Gongura-infused shrimp pulao with a tangy, spicy kick." ,image:"b1.png"},
      { id: 90, name: "Shrimp Biryani", description: "Juicy shrimp cooked in fragrant biryani rice and spices." ,image:"b1.png"},
      { id: 91, name: "Raju Gari Mutton Pulao (Spicy)", description: "Fiery mutton pulao with deep, rich Andhra flavors.",image:"b1.png" },
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 92, name: "Egg Biryani", description: "Fluffy basmati rice and boiled eggs cooked with spices.",image:"b1.png" },
      { id: 93, name: "Raju Gari Mutton Fry Biryani (Spicy)", description: "Spicy fried mutton layered with aromatic biryani rice.",image:"b1.png" },
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 94, name: "Chicken Noodles", description: "Stir-fried noodles tossed with juicy chicken and spices." ,image:"b1.png"},
      { id: 95, name: "Egg Noodles", description: "Flavored noodles with scrambled eggs and aromatic seasonings." ,image:"b1.png"},
      { id: 83, name: "Gongura Mutton Biryani", description: "Gongura leaves add a tangy twist to mutton biryani.",image:"b2.png" },
      { id: 96, name: "Mixed Non-Veg Pulao (Chicken & Shrimp)", description: "A rich, spicy blend of shrimp and chicken in pulao.",image:"b1.png" }
    ]
  },
  {
    name: "Vegetarian Pulusu",
    image: "/1.png",  // Example image
    items: [
      { id: 97, name: "Tomato Rasam", description: "Tangy, spiced tomato broth with aromatic South Indian flavors.",image:"s1.png" },
      { id: 98, name: "Sambar", description: "Lentil stew with vegetables, tamarind, and fragrant spices.",image:"s2.png" },
      { id: 99, name: "Dappalam (Mukkala Pulusu)", description: "A sweet, tangy Andhra stew with mixed vegetables.",image:"s1.png" }
    ]
  },
  {
    name: "Special Desserts",
    image: "/image2.png",  // Example image
    items: [
      { id: 100, name: "Bobbatlu", description: "Sweet lentil-stuffed flatbread, golden and buttery.",image:'c1.png' },
      { id: 101, name: "Gulab Jamun", description: "Soft, deep-fried milk dumplings soaked in syrup.",image:'b1.png' },
      { id: 102, name: "Rasmalai", description: "Spongy paneer soaked in creamy saffron milk." ,image:'c2.png'},
      { id: 103, name: "Kaddu Ki Kheer", description: "Rich, slow-cooked bottle gourd pudding with nuts.",image:'b2.png' },
      { id: 104, name: "Khubani Ka Meetha", description: "Sweet, stewed apricots served with fresh cream.",image:'1.png' },
      { id: 105, name: "Mango Kesari", description: "Silky semolina dessert infused with ripe mango flavor.",image:'2.png' },
      { id: 106, name: "Chakkara Pongal", description: "Sweet jaggery rice pudding with ghee and cashews.",image:'poori.png' },
      { id: 107, name: "Junnu", description: "Traditional steamed colostrum milk pudding, rich and soft." ,image:'pongal.png'},
      { id: 108, name: "Badam Barfi", description: "Almond-based fudge, delicately flavored with saffron." ,image:'bonda.png'},
      { id: 109, name: "Semiya Kesari", description: "Sweet vermicelli pudding with ghee and cardamom.",image:'3.png' },
      { id: 110, name: "Paan", description: "Refreshing betel leaf with sweet and aromatic fillings." ,image:'c1.png'}
    ]
  },
  {
    name: "Desserts",
    image: "/image3.png",  // Example image
    items: [
      { id: 111, name: "Boondi Laddu", description: "Golden, sweet gram flour pearls bound with ghee.",image:"l1.png" },
      { id: 112, name: "Ravva Laddu", description: "Soft semolina balls flavored with cardamom and ghee." ,image:"r1.png"},
      { id: 113, name: "Badusha", description: "Flaky, deep-fried dessert soaked in sugar syrup." ,image:"r1.png" },
      { id: 114, name: "Carrot Halwa", description: "Slow-cooked grated carrots with milk, ghee, and nuts." ,image:"r1.png" },
      { id: 115, name: "Madatha Kaja", description: "Crispy, layered sweet soaked in sugar syrup.",image:"l1.png" },
      { id: 116, name: "Double Ka Meetha", description: "Hyderabadi bread pudding with rich saffron milk." ,image:"r1.png" },
      { id: 117, name: "Rava Kesari", description: "Silky semolina sweet infused with saffron and ghee." ,image:"r1.png" },
      { id: 118, name: "Semiya Payasam", description: "Sweet vermicelli kheer cooked in creamy milk.",image:"l1.png" },
      { id: 119, name: "Rice Payasam", description: "Traditional rice pudding with jaggery and cardamom." ,image:"r1.png" },
      { id: 120, name: "Mysore Pak", description: "Melt-in-mouth gram flour fudge rich with ghee.",image:"l1.png" }
    ]
  },
  {
    name: "Breads",
    image: "/5.png",  // Example image
    items: [
      { id: 121, name: "Chapati", description: "Soft whole wheat flatbread, light and nutritious.",image:"poori.png" },
      { id: 122, name: "Poori", description: "Fluffy, deep-fried golden bread with a crispy bite.",image:"poori.png" }
    ]
  },
  {
    name: "Dals",
    image: "/6.png",  // Example image
    items: [
      { id: 123, name: "Tomato Dal", description: "Tangy lentil curry with tomatoes, garlic, and spices.",image:'1.png' },
      { id: 124, name: "Dal", description: "Simple yet flavorful lentil stew with tempered spices.",image:'b2.png' }
    ]
  },{ 
      name: "Breakfast", 
      image: "/image3.png",  // Image for the category
      items: [
          { id: 1, name: "Idly", description: "Soft, fluffy, and healthy South Indian steamed rice cakes." },
      { id: 2, name: "Upma", description: "Savory and wholesome semolina dish with mild spices." },
      { id: 3, name: "Hot Pongal", description: "Comforting rice-lentil dish with a touch of ghee." },
      { id: 4, name: "Vada for Breakfast", description: "Crispy, golden lentil fritters with a soft bite." },
      { id: 5, name: "Tea", description: "Aromatic, refreshing Indian chai with a soothing taste." },
      { id: 6, name: "Coffee", description: "Strong and flavorful South Indian filter coffee." },
      { id: 7, name: "Mysore Bonda for Breakfast", description: "Crispy outside, fluffy inside, deep-fried delight." },
      { id: 8, name: "Poori for Breakfast", description: "Puffy, golden fried bread with an airy texture." }
      ]
    },

  ];

   const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Rice Items');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);
  const [isDeliveryNoteVisible, setIsDeliveryNoteVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);  
  const categoriesPerPage = 12;
  const [message, setMessage] = useState(''); 
   const [similarItemAdded, setSimilarItemAdded] = useState(null);
 const [isMobile, setIsMobile] = useState(false);
 const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
  if (selectedItems.length === 0) {
    alert("Your cart is empty. Please add products before submitting.");
  } else {
    setIsConfirmationVisible(true);
  }
};
const handleCloseConfirmation = () => {
  setIsConfirmationVisible(false);
};
const handleConfirmOrder = () => {
  setIsConfirmationVisible(false);
  // Submit the form or perform the desired action here
  alert("Your order has been placed successfully!");
};



  useEffect(() => {
    // Check screen width on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Initial check for window width
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
	const ItemModal = ({ isModalOpen, selectedItem, selectedCategory, handleCloseModal }) => {
  const [selectedItems, setSelectedItems] = useState([selectedItem]); // Initially only the first item is selected

  // Function to handle adding a similar item to the selected items
  
  };
	const selectedCategory = categories.find(cat => 
    cat.items.some(item => item.id === selectedItem?.id)
  );

 const handleRemoveItem = (indexToRemove) => {
  setSelectedItems((prevItems) =>
    prevItems.filter((_, index) => index !== indexToRemove)
  );
};


 const handleItemClick = (item) => {
  setSelectedItem(item);
};


  const getVisibleCategories = () => {
    if (currentIndex + categoriesPerPage > categories.length) {
      return [
        ...categories.slice(currentIndex),
        ...categories.slice(0, (currentIndex + categoriesPerPage) % categories.length)
      ];
    }
    return categories.slice(currentIndex, currentIndex + categoriesPerPage);
  };

  const nextCategories = () => {
    setCurrentIndex((prevIndex) => (prevIndex + categoriesPerPage) % categories.length);
  };

  const prevCategories = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - categoriesPerPage + categories.length) % categories.length
    );
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? '' : category);
    setScrollIndex(0);
  };

  const handleScroll = (direction) => {
    const totalItems = categories.find((cat) => cat.name === activeCategory).items.length;
    if (direction === 'left' && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 2);
    } else if (direction === 'right') {
      setScrollIndex(scrollIndex + 3 >= totalItems ? 0 : scrollIndex + 3);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const handleAddToCart = (item) => {
    setSelectedItem({ ...item, quantity: 1 });
    setIsModalOpen(true);
  };
  
  
 // Function to handle quantity change for a specific item

const handleQuantityChange = (itemId, change) => {
  const updatedItems = selectedItems.map((item) => {
    if (item.id === itemId) {
      return { ...item, quantity: (item.quantity || 1) + change };
    }
    return item;
  });
  setSelectedItems(updatedItems);
};




  
  const scrollLeft = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    ); // Circular scroll left
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    ); // Circular scroll right
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
	 setSimilarItemAdded(null);
  };

// Function to handle adding items to the selected items area (not cart yet)
const handleAddToSelectedItems = (item) => {
    const existingItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);
    
    if (existingItem) {
      // If the item already exists, don't add it again, just increment the quantity
      handleQuantityChange(item.id, 1);
    } else {
      // Otherwise, add the item with quantity initialized to 1
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { ...item, quantity: 1 },
      ]);
    }
  };


const handleDeleteItem = (itemId) => {
  setSelectedItems((prevItems) =>
    prevItems.filter((item) => item.id !== itemId)
  );
};



// Function to handle adding an item to the cart
const handleAddToCartModal = (item) => {
  const isItemAlreadyInCart = selectedItems.some((selectedItem) => selectedItem.id === item.id);

  if (isItemAlreadyInCart) {
    setMessage("Product already added to cart");
  } else {
    setMessage("Product added to cart");

    // Add the item to the cart (implement your cart logic here)
    setSelectedItems((prevItems) => [...prevItems, { ...item, quantity: item.quantity || 1 }]);
  }

  // Clear the message after 2 to 3 seconds
  setTimeout(() => {
    setMessage("");
  }, 3000); // 3000ms = 3 seconds
};


 const initializeSelectedItem = () => {
    if (selectedCategory.items.length > 1) {
      setSelectedItems([selectedCategory.items[1]]); // Set the first item as the initial selected item
    }
  };

  // Call initialize function when modal opens
  if (isModalOpen && selectedCategory.items.length && selectedItems.length === 0) {
    initializeSelectedItem();
  }

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${selectedItem.name}`);
    handleCloseModal();
  };

  const handleViewCart = () => {
    setIsCartVisible(true);
    setIsBackgroundBlurred(true);
	 console.log(selectedItems); 
  };

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const handleViewCartDebounced = debounce(() => {
  setIsCartVisible(true);
}, 200);

  const handleCloseCart = () => {
    setIsCartVisible(false);
    setIsBackgroundBlurred(false);
  };

  const handleToggleDeliveryNote = () => {
    setIsDeliveryNoteVisible(!isDeliveryNoteVisible);
  };


    return (
    <div className={`App ${isBackgroundBlurred ? 'blur' : ''}`}>
      {/* Email and Mobile displayed at the top right */}
  
    <div className="top-right11" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: isMobile ? '5px' : '10px' }}>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          border: '1px solid #ddd',
          padding: '3px',
          borderRadius: '5px',
          backgroundColor: 'white',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <i className="fab fa-whatsapp" style={{ marginRight: '8px', color: 'green', fontSize: isMobile ? '1.5em' : '2em' }}></i>
          <span style={{ color: 'black' }}>Mobile: +1(972)-786-2387</span>
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-envelope" style={{ marginLeft: isMobile ? '0' : '1380px', color: 'red', fontSize: isMobile ? '1.5em' : '2em' }}></i>
          <span style={{ color: 'black' }}>Email</span>
        </span>
      </span>

      <div
  className="view-cart"
  onClick={handleViewCart}
  style={{
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center', // Vertically centers the cart icon
    marginLeft: 'auto', // Pushes the "View Cart" button to the right within its parent container
	fontSize: isMobile ? '1.5em' : '2em',
  }}
>
  <i className="fas fa-shopping-cart"></i> {/* Font Awesome Cart Icon */}
  {cartItemCount > 0 && (
    <span
      className="cart-item-count"
      style={{
        marginLeft: '15px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '0 5px',
      }}
    >
      {cartItemCount}
    </span>
  )}
</div>

    </div>
  
};

 
 <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative' }}>
  <img
    src="/Group 6859.png"
    alt="Group 6859"
    style={{
      height: isMobile ? '50px' : '70px', // Adjust image size for mobile
      width: isMobile ? '150px' : '200px', // Adjust image size for mobile
      position: 'absolute', // Fixed position for both web and mobile
      left: isMobile ? '-20px' : '150px', // Position the image at a fixed location
      top: isMobile ? '-30px' : '20px', // Ensure proper positioning from the top
    }}
  />
  <h1 className="data" style={{
    textAlign: 'center', // Center the text
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: isMobile ? '24px' : '48px', // Adjust font size for mobile view
  }}>
    Catering Form
  </h1>
</div>


 


<form onSubmit={handleSubmit}>
  <div className="form-container">
    {/* Form fields */}
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="customerName">Customer Name*</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile #*</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="homeAddress">Home Address*</label>
        <input
          type="text"
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="adultsCount">Adults Count*</label>
        <input
          type="number"
          id="adultsCount"
          name="adultsCount"
          value={formData.adultsCount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="kidsCount">Kids Count*</label>
        <input
          type="number"
          id="kidsCount"
          name="kidsCount"
          value={formData.kidsCount}
          onChange={handleInputChange}
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="vegetarianCount">Vegetarian Count*</label>
        <input
          type="number"
          id="vegetarianCount"
          name="vegetarianCount"
          value={formData.vegetarianCount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="nonVegetarianCount">Non-Vegetarian Count*</label>
        <input
          type="number"
          id="nonVegetarianCount"
          name="nonVegetarianCount"
          value={formData.nonVegetarianCount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cateringDate">Catering Date*</label>
        <input
          type="date"
          id="cateringDate"
          name="cateringDate"
          value={formData.cateringDate}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <div className="checkbox-row">
          <label htmlFor="cateringTime">Catering Time*:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="cateringTime"
                value="Breakfast"
                checked={formData.cateringTime === 'Breakfast'}
                onChange={handleInputChange}
                required
              />
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                name="cateringTime"
                value="Lunch"
                checked={formData.cateringTime === 'Lunch'}
                onChange={handleInputChange}
                required
              />
              Lunch
            </label>
            <label>
              <input
                type="checkbox"
                name="cateringTime"
                value="Dinner"
                checked={formData.cateringTime === 'Dinner'}
                onChange={handleInputChange}
                required
              />
              Dinner
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="checkbox-row">
          <label htmlFor="spiceLevel">Spice  Level*:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="spiceLevel"
                value="Mild"
                checked={formData.spiceLevel === 'Mild'}
                onChange={handleInputChange}
              />
              Mild
            </label>
            <label>
              <input
                type="checkbox"
                name="spiceLevel"
                value="Medium"
                checked={formData.spiceLevel === 'Medium'}
                onChange={handleInputChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                name="spiceLevel"
                value="Spicy"
                checked={formData.spiceLevel === 'Spicy'}
                onChange={handleInputChange}
              />
              Spicy
            </label>
          </div>
        </div>
      </div>
    </div>

    {/* Note Box */}
    <div className="form-group11">
      <p>
        <strong>Note:</strong> Delivery service is provided by a third-party and the cost is based on the distance of the delivery location.
      </p>
    </div>
  </div>
</form>

<div className="App">
  <h2>Categories</h2>
  <div className="main-container">
    {/* Categories Column */}
    <div className="category-column">
      
      <div className="categories">
        {getVisibleCategories().map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
     
    </div>

    {/* Dishes Column */}
    {activeCategory && (
      <div className="items-container">
       
	   <h3 className="category-title">
  <span className="left-symbol">♦-----------------------</span>
  {activeCategory}
  <span className="right-symbol">-----------------------♦</span>
</h3>

        <div className="items">
          {categories
            .find((cat) => cat.name === activeCategory)
            ?.items.slice(scrollIndex, scrollIndex + 22)
            .map((item) => (
              <div key={item.id} className="item-box">
                {/* Dish Image */}
                <img src={item.image} alt={item.name} className="dish-image" />
                <div className="dish-info">
                  <div className="dish-name">{item.name}</div>
                  <div className="dish-description">{item.description}</div>
                </div>
                <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                  +
                </button>
              </div>
            ))}
        </div>
      </div>
    )}
  </div>
</div>


     

     <div className="form-group1">
  <label htmlFor="noteText">Additional Notes:</label>
  <textarea
    id="noteText"
    name="noteText"
    value={formData.noteText}
    onChange={handleInputChange}
    rows="4"
    placeholder="Add any additional notes here..."
  ></textarea>
</div>

<button type="submit" onClick={handleSubmit}>
  Submit
</button>

{/* Confirmation Modal */}
{isConfirmationVisible && (
  <div className="cart-modal">
    <div className="cart-modal-content">
      <span className="back-arrow" onClick={handleCloseConfirmation}>
        &larr; Back
      </span>
      <h2>Confirm Your Order</h2>
      {selectedItems.length === 0 ? (
        <p>Your cart is empty. Please add products before submitting.</p>
      ) : (
        <>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-description">{item.description}</p>
                    <div className="cart-item-quantity-price">
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="confirm-order-button"
            onClick={handleConfirmOrder}
          >
            Confirm and Place Order
          </button>
        </>
      )}
    </div>
  </div>
)}

   {/* Cart Modal */}
      {isCartVisible && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <span className="back-arrow" onClick={handleCloseCart}>&larr; Back</span>
            <h2>Your Cart</h2>
            {selectedItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-details">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-description">{item.description}</p>
                        <div className="cart-item-quantity-price">
                          <p>Quantity: {item.quantity}</p>
                          
                        </div>
                      </div>
                    </div>
                    <button
                      className="remove-item-button"
                      onClick={() => handleRemoveItem(index)}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}    
	
     
	{/* Selected Item Modal */}
{isModalOpen && selectedCategory?.items.length > 0 && (
  <div className="modal full-screen-modal">
    <div className="modal-content full-screen-content">
      <span className="back-arrow" onClick={handleCloseModal}>
        &larr; Back
      </span>
      <div className="modal-layout">
        {/* Similar Items Section */}
        <div className="similar-items-container">
          <h3>Similar Items</h3>
          {selectedCategory?.items
            .filter(
              (item) =>
                !selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )
            )
            .map((similarItem) => (
              <div key={similarItem.id} className="similar-item">
                <img src={similarItem.image} alt={similarItem.name} />
                <p>{similarItem.name}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal close
                    handleAddToSelectedItems(similarItem); // Add to selected items
                  }}
                >
                  Add to cart
                </button>
              </div>
            ))}
        </div>

     
	 {/* Selected Item Details */}
<div className="selected-item-details">
  {selectedItems.length > 0 && (
    <div className="selected-items-container">
      {selectedItems.map((item) => (
        <div key={item.id} className="selected-item-container">
          {/* Ensure quantity is initialized to 1 if not already set */}
          {item.quantity = item.quantity || 1}

          {/* Image Section */}
          <div className="selected-item-image-wrapper">
            <img
              src={item.image}
              alt={item.name}
              className="selected-item-image"
            />
          </div>
          {/* Details Section */}
          <div className="selected-item-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            {/* Quantity Control */}
            <div className="quantity-control">
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    handleQuantityChange(item.id, -1);
                  }
                }}
              >
                -
              </button>
              {/* Display quantity */}
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
              {/* Delete Button */}
              <button
                className="delete-btn"
                onClick={() => handleDeleteItem(item.id)}
              >
                🗑️ {/* Delete Icon */}
              </button>
            </div>

            {/* Add to Cart button for the selected item */}
            <button
              className="add-to-cart-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal close
                handleAddToCartModal(item); // Add to cart
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
        {/* Show confirmation message */}
        {message && <p className="add-to-cart-message">{message}</p>}

        {/* Checkout Section */}
       
      </div>
    </div>
  </div>
)}

 
    </div>
  );
}

export default App;
