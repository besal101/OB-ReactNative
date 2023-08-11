const onboarding_screens: OnBoardingScreen[] = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01_01.png"),
    bannerImage: require("../assets/images/car.png"),
    title: "Welcome to Open Bonnet!",
    description:
      "Get ready to experience hassle-free car repairs and maintenance right at your fingertips.",
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_01_02.png"),
    bannerImage: require("../assets/images/man.png"),
    title: "Say goodbye to troubles!",
    description:
      "With OpenBonnet, you're just a few taps away from expert mechanics and reliable service.",
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01_01.png"),
    bannerImage: require("../assets/images/toolbox.png"),
    title: "Introducing your new friend",
    description:
      "OpenBonnet brings you top-notch repairs and maintenance to keep your vehicle running smoothly on every journey.",
  },
];

export const car_types: CarTypeProps[] = [
  {
    id: 1,
    name: "Audi",
    image: require("../assets/images/cars/audi.png"),
  },
  {
    id: 2,
    name: "BMW",
    image: require("../assets/images/cars/bmw.png"),
  },
  {
    id: 3,
    name: "baic",
    image: require("../assets/images/cars/baic.png"),
  },
  {
    id: 4,
    name: "bently",
    image: require("../assets/images/cars/bently.png"),
  },
  {
    id: 5,
    name: "byd",
    image: require("../assets/images/cars/byd.png"),
  },
];

export default onboarding_screens;
