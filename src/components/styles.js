import genStyles from './CustomStyles';

const styles = {
  container: `fixed lg:block hidden w-[7%] border-[1px] border-[#EBECF2] h-screen pl-3 dark:border-white/10 dark:bg-outer_dark bg-home`,
  mobile_container: "block w-[23%] fixed h-screen pl-3 dark:border-white/10 dark:bg-outer_dark bg-home",
  logout: `flex gap-5 items-center absolute bottom-6 left-2 cursor-pointer ml-3 pl-4 py-3 rounded-lg w-[90%] bg-purpleTheme text-white font-semibold hover:opacity-90`,
  link: (url, ln) => `flex gap-5 items-center pl-4 py-3 rounded-lg m-2 my-4 hover:bg-purple-200 ${url === ln && 'bg-purpleTheme text-white hover:bg-purpleTheme'}`,

  // Layout Styles -------------
  pageContainer: `lg:w-[93%] lg:ml-[7%] w-full  min-h-screen lg:mb-0 dark:bg-outer_dark bg-[#FAFAFA] overflow-x-hidden`,
  bodyContainer: 'mb-10 lg:mt-[7%] md:mt-[10%] mt-[20%] md:mx-4 mx-2 pr-4 pl-0 flex lg:flex-row flex-col gap-[1rem] w-full',

  // Navbar Styles -------------
  navCont: 'flex fixed justify-between p-2 dark:bg-outer_dark bg-[#FAFAFA] lg:w-[93%] w-full md:pr-6 md:pl-4 pl-0 pr-2 border-[1px] border-[#E5EAEF] dark:border-white/10 z-30',
  center: `${genStyles.flexCenter}`,
  searchIcon: 'cursor-pointer dark:text-gray-200 absolute left-2 top-3',
  navInput: 'outline-none bg-white dark:bg-outer_dark dark:text-white md:min-w-[300px]  pl-8 px-3 py-2 rounded-full md:text-base text-sm border-[1px] dark:border-white/10 border-[#DADDDD] rounded-[1.5rem]',
  navBtn: 'md:flex items-center gap-3 rounded-md p-2 px-3 bg-grayTheme hover:opacity-80 shadow-sm hidden',
  profileCont: 'flex items-center p-1 inter_font rounded-full hover:opacity-80 gap-2 cursor-pointer border-[#DADDDD] dark:border-white/10 border-[1px]',
  imgCont: 'w-[45px] h-[45px] rounded-full',
  text: 'font-semibold max-w-[150px] md:block hidden',
  imgText: `${genStyles.flexCenter} object-contain rounded-full text-center w-full h-full font-bold text-lg`,
  menu: 'block lg:hidden ml-2 text-purpleTheme',
  circle: 'w-[2.5rem] h-[2.5rem] hover:opacity-80 flex justify-center items-center border-[1px] border-[#DADDDD] dark:border-white/10 rounded-full cursor-pointer',

  // UserProfile Styles --------
  userProfileCont: "nav-item absolute right-1 top-16 bg-white dark:bg-outer_dark p-8 rounded-lg w-96 z-10 h-[500px]",
  avatarCont: "flex gap-5 items-center mt-6 border-color border-b-1 pb-6",
  between: `flex items-center justify-end`,
  textLg: "font-semibold text-lg dark:text-darkText",
  textXl: "font-semibold text-xl dark:text-darkText",
  textSm: "text-gray-500 text-sm dark:text-gray-300",
  textSmB: "text-gray-500 text-sm font-semibold dark:text-darkText",
  barCont: "flex gap-5 border-b-1 border-color p-4 hover:text-gray_600  cursor-pointer",
  profileLogout: 'rounded-md py-4 bg-purpleTheme text-center w-full text-white hover:opacity-90'
};

export default styles;