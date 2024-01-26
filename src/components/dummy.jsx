import dayjs from "dayjs";
import { FiUser, FiCreditCard } from 'react-icons/fi';
import { TbMoneybag } from 'react-icons/tb';
import Logo from '../assets/Logo';
import Dashboard from '../assets/Dashboard';
import TrendUp from '../assets/TrendUp';
import User from '../assets/User';
import Box from '../assets/Box';
import Discount from '../assets/Discount';
import InfoBox from '../assets/Info';

const presentDate =  dayjs().format('MMMM D, YYYY');

export const bottomLinks = [
  {
    id: 1,
    name: "arrow",
    src: "/arrow-right.svg"
  },
  {
    id: 2,
    src: "/logout.svg"
  },
];

export const topLinks = [
  {
    id: 0,
    src: <Logo />,
    name: "home",
  },
  {
    id: 1,
    name: "home",
    src: <Dashboard />
  },
  {
    id: 2,
    name: "trend",
    src: <TrendUp />
  },
  {
    id: 3,
    name: "user",
    src:<User />
  },
  {
    id: 4,
    name: "box",
    src: <Box />
  },
  {
    id: 5,
    name: "discount",
    src: <Discount />
  },
  {
    id: 6,
    name: "info",
    src: <InfoBox />
  }
];

export const BarExpenseChart = [
  { month: 'Jan', sales: 14000 },
  { month: 'Feb', sales: 18000 },
  { month: 'Mar', sales: 12000 },
  { month: 'Apr', sales: 28000 },
  { month: 'May', sales: 16000 },
  { month: 'Jun', sales: 45000 },
  { month: 'Jul', sales: 30000 },
  { month: 'Aug', sales: 19000 },
  { month: 'Sep', sales: 33000 },
  { month: 'Oct', sales: 19000 },
  { month: 'Nov', sales: 30000 },
  { month: 'Dec', sales: 22000 },
];

export const OrdersData = [
  {
    imgSrc: "/img-one.png",
    name: "Marcus Bergson",
    date: presentDate,
    amount: "$80,000",
    status: "paid",
  },
  {
    imgSrc: "/img-two.png",
    name: "Jaydon Vaccaro",
    date: presentDate,
    amount: "$150,000",
    status: "Refund",
  },
  {
    imgSrc: "/img-three.png",
    name: "Corey Schleifer",
    date: presentDate,
    amount: "$87,000",
    status: "paid",
  },
  {
    imgSrc: "/img-four.png",
    name: "Cooper Press",
    date: presentDate,
    amount: "$100,000",
    status: "Refund",
  },
  {
    imgSrc: "/img-five.png",
    name: "Phillip Lubin",
    date: presentDate,
    amount: "$78,000",
    status: "paid",
  },
  {
    imgSrc: "/profile.png",
    name: "Marthin king",
    date: presentDate,
    amount: "$75,000",
    status: "Refund",
  }
];

export const cardsData = [
  {
    icon: "/box-green.svg",
    chart: "/increase.svg",
    header: "Total Order",
    amount: "350",
    status: "increase",
    increaseBy: "23.5%",
    arrow: "/arrow-chart.svg"
  },
  {
    icon: "/rotate.svg",
    chart: "/decrease.svg",
    header: "Total Refund",
    amount: "270",
    status: "decrease",
    increaseBy: "23.5%",
    arrow: "/arrow-chart-down.svg"
  },
  {
    icon: "/shopping-cart.svg",
    chart: "/decrease.svg",
    header: "Average Sales",
    amount: "1567",
    status: "decrease",
    increaseBy: "23.5%",
    arrow: "/arrow-chart-down.svg"
  },
  {
    icon: "/coin.svg",
    chart: "/increase.svg",
    header: "Total Income",
    amount: "$350.000",
    status: "increase",
    increaseBy: "23.5%",
    arrow: "/arrow-chart.svg"
  }
];

export const platformData = [
  {
    header: "Book Bazaar",
    amount: " $2,500,000",
    stat: "+15%",
    color: "bg-[#6160DC]",
    percent: "w-[60%]"
  },
  {
    header: "Artisan Aisle",
    amount: "$1,800,000",
    stat: "+10%",
    color: "bg-[#54C5EB]",
    percent: "w-[50%]"
  },
  {
    header: "Toy Troop",
    amount: "$1,200,000",
    stat: "+5%",
    color: "bg-[#FFB74A]",
    percent: "w-[30%]"
  },
  {
    header: "XStore",
    amount: "$1,250,000",
    stat: "+5%",
    color: "bg-[#FF4A55]",
    percent: "w-[30%]"
  }
];

export const userProfileData = [
  {
    icon: <FiUser />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    url: "/settings",
  },
  {
    icon: <TbMoneybag />,
    title: 'Teams',
    desc: 'View my Teams',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    url: "/expense",
  },
  {
    icon: <FiCreditCard />,
    title: 'Subscription',
    desc: 'View my Subscriptions',
    iconColor: '#ED544E',
    iconBg: 'rgba(237, 84, 78, 0.12)',
    url: "/history",
  },
];