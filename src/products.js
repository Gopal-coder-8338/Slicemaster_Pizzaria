
const Meals = [
    {
      id: 1,
      name: "Baked salmon with fennel & tomatoes",
      desc: "Tamato, Lemon, raw pepper",
      img: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      price: 160
    },
    {
      id: 2,
      name: "Cajun spiced fish tacos",
      desc: "Tamato, mozzarella, spice, fish", 
      img: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      price: 140
    },
    {
      id: 3,
      name: "Escovitch Fish",
      desc: "Tamato, mozzarella, onion",
      img: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      price: 100
    },
    {
      id: 4,
      name: "Fish fofos",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      price: 90
    },
    {
      id: 5,
      name: "Fish pie",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      price: 130
    },
    {
      id: 6,
      name: "Fish Soup (Ukha)",
      desc: "Tamato, patato, basil",
      img: "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
      price: 120
    },
    {
      id: 7,
      name: "Fish Stew with Rouille",
      desc: "Tamato, mozzarella, onion",
      img: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      price: 120
    },
    {
      id: 8,
      name: "Garides Saganaki",
      desc: "Tamato, mozzarella, butter",
      img: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      price: 110
    },
    {
      id: 9,
      name: "Grilled Portuguese sardines",
      desc: "Lemon, chili, basil",
      img: "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      price: 80
    },
    {
      id: 10,
      name: "Honey Teriyaki Salmon",
      desc: "Honey, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      price: 160
    },
    {
      id: 11,
      name: "Kedgeree",
      desc: "Egg, rice, basil",
      img: "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
      price: 120
    },
    {
      id: 12,
      name: "Kung Po Prawns",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
      price: 190
    },
    {
      id: 13,
      name: "Laksa King Prawn Noodles",
      desc: "Tamato, lemon, basil",
      img: "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
      price: 130
    },
    {
      id: 14,
      name: "Mediterranean Pasta Salad",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
      price: 140
    },
    {
      id: 15,
      name: "Mee goreng mamak",
      desc: "Tamato, lemon, basil",
      img: "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
      price: 110
    },
    {
      id: 16,
      name: "Nasi lemak",
      desc: "Tamato, rice, basil",
      img: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      price: 120
    },
    {
      id: 17,
      name: "Portuguese fish stew (Caldeirada de peixe)",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
      price: 150
    },
    {
      id: 19,
      name: "Recheado Masala Fish",
      desc: "Cucumber, carriet, basil",
      img: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
      price: 160
    },
    {
      id: 20,
      name: "Salmon Avocado Salad",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      price: 180
    },
    {
      id: 21,
      name: "Salmon Prawn Risotto",
      desc: "Tamato, rice, basil",
      img: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
      price: 145
    },
    {
      id: 22,
      name: "Saltfish and Ackee",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
      price: 135
    },
    {
      id: 23,
      name: "Seafood fideuà",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
      price: 175
    },
    {
      id: 24,
      name: "Shrimp Chow Fun",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/1529445434.jpg",
      price: 140
    },
    {
      id: 25,
      name: "Sledz w Oleju (Polish Herrings)",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
      price: 90
    },
    {
      id: 27,
      name: "Spring onion and prawn empanadas",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
      price: 80
    },
    {
      id: 28,
      name: "Sushi",
      desc: "Sweet, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      price: 100
    },
    {
      id: 29,
      name: "Three Fish Pie",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
      price: 120
    },
    {
      id: 30,
      name: "Tuna and Egg Briks",
      desc: "Tamato, mozzarella, basil",
      img: "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
      price: 110
    },
    {
      id: 31,
      name: "Tuna Nicoise",
      desc: "Tamato, egg, basil",
      img: "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
      price: 180
    }
    
  ];
  export default Meals;
