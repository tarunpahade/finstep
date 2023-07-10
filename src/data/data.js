//Total Children
const childData = [
  {
    amount: "4020",
    name: "Laila",
    icon: require("../../assets/images/kemal.jpg"),
    click: addMoney,
    showProfile: showProfile,
  },

  {
    amount: "7672",
    name: "Aman",
    icon: require("../../assets/images/kemal.jpg"),
    click: addMoney,
    showProfile: showProfile,
  },
];

//Income Expense
const Expense = [
  {
    key: "1",
    userName: "Food",
    iconName: "fastfood",
    amount: "$350",
  }, //   movie
  {
    key: "2",
    userName: "Shopping",
    transactionDate: "16 April 20",
    amount: "$150",
    iconName: "shopping-bag",

    credit: false,
  },
  {
    key: "3",
    iconName: "movie",
    userName: "Movie",
    transactionDate: "05 April 20",
    amount: "$364",
    credit: false,
  },
  {
    key: "4",
    iconName: "cleaning-services",
    userName: "Fixing",
    transactionDate: "28 March 20",
    amount: "$100",
    credit: true,
  },
  {
    key: "5",
    iconName: "",
    userName: "Food",
    transactionDate: "14 March 20",
    amount: "$450",
    credit: true,
  },
  {
    key: "6",
    iconName: "",
    userName: "Food",
    transactionDate: "05 March 20",
    amount: "$288",
    credit: true,
  },
  {
    key: "7",
    iconName: "",
    userName: "Food",
    transactionDate: "03 March 20",
    amount: "$350",
    credit: false,
  },
  {
    key: "8",
    iconName: "",
    userName: "Food",
    transactionDate: "01 March 20",
    amount: "$350",
    credit: true,
  },
];
const Income = [
  {
    key: "1",
    userName: "Dad",
    iconName: "family-restroom",
    amount: "$250",
    credit: true,
  }, //   movie
  {
    key: "2",
    userName: "Monthly Allowance",
    transactionDate: "16 April 20",
    amount: "150",
    iconName: "attach-money",

    credit: true,
  },
  {
    key: "3",
    iconName: "money",
    userName: "Relatives",
    transactionDate: "05 April 20",
    amount: "$364",
    credit: true,
  },
  {
    key: "4",
    iconName: "cleaning-services",
    userName: "Fixing",
    transactionDate: "28 March 20",
    amount: "$100",
    credit: true,
  },
];

//Courses
const Courses = [
  {
    amount: "$42",
    name: "Chapter 1",
    date: "Apil 17 2023",
    icon: "done",
    done: true,
    image: require("../assets/images/course2.png"),
  },
  {
    amount: "$22",
    name: "Chapter 2",
    date: "May 16 2023",
    icon: "done",
    done: false,

    style: styles.icondone,
    image: require("../assets/images/course3.png"),
  },
  {
    amount: "$43",
    name: "Chapter 3",
    date: "June 22 2023",
    icon: "timer",
    style: styles.iconremaining,
    image: require("../assets/images/course1.png"),
    done: false,
  },
  {
    amount: "$72",
    name: "Chapter 4",
    date: "July 12 2023",
    icon: "timer",
    style: styles.iconremaining,
    image: require("../assets/images/course4.png"),
    done: false,
  },
];

//tasks
const Task = [
  {
    "amount": "₹ 42",
    "name": "Clean Room",
    "date": "Apil 17 2023",
},
  {
    "amount": "₹ 22",
    "name": "Make Lunch",
    "date": "May 16 2023",
  },
  {
    "amount": "₹ 43",
    "name": "Get Grocery",
    "date": "June 22 2023",
  
  },
  //  {amount:'₹ 72', name:'Clean clothes',    date:'July 12 2023',icon:'money',status:pagestyles.recieved,icon:'timer'},
];
//Posts
export const SavingPots = [
  { savedAmount: 3000, name: "Jeans", totalAmt: 3300 },
  { savedAmount: 2020, name: "Ps5", icon: "music-note", totalAmt: 4003 },
  { savedAmount: 20200, name: "Rocket", icon: "music-note", totalAmt: 83000 },
];
