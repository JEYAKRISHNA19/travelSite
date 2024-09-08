
import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Heading from './Heading';
import LoginRegister from './LoginRegister';
import Detailmap from './Components/Main/detailmap';
import Contactform from './Components/Navbar/contactform'
import GooglePayButton from './Components/Home/GooglePayButton';


const App = () => {
  const destinations = [
    {
      id: 1,
      imgSrc: './Assesttour/img1.jpg',
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of the romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.',
      details: {
        bg: '/image/borabora.webp',
        bg2: '/image/borabora2.jpeg',
        names: 'Bora Bora',
        context: 'Jewel of the South Seas. Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesia leading lady. Her beauty is unrivaled and her fame, unwavering. Bora Bora is one of the few places on earth that everyone hopes to witness in their lifetime and once you see it, you are forever enamored. The Allure: More than just a romantic ideal, Bora Bora is a romantic reality. It comes as no surprise that the island is an internationally acclaimed honeymoon destination. Our newlyweds who decide on a Bora Bora honeymoon often feel as though they have escaped to a private oasis tailored entirely to their special moment of marital bliss—and anyone in the midst of planning a wedding can relate to just how enticing that sounds. The Locale:Bora Bora may feel worlds away, but this South Seas splendor is well within reach. Where is Bora Bora, exactly? The island lies just northwest of Tahiti, less than an hour away by plane from Papeete. The airport is located on a small, separate part of the island known as, Motu Mete. Upon arrival, you will be greeted with a warm smile and fragrant flower lei and transferred by boat to your Bora Bora resort, meaning you hardly have to wait for your first encounter with the island famously translucent lagoon. The inevitable love affair with this island begins right before you touch down. The view from the plane window is a moment you will not soon forget. Have your camera in hand as you begin your descent and prepare for the moment when iconic Mount Otemanu comes into view. From that point on, each experience will only continue to exceed even your highest expectations.',
      },
    },
    {
      id: 2,
      imgSrc: './Assesttour/img2.jpg',
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayana Machu Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost city of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.',
      details: {
        bg: '/image/machupicchu.webp',
        bg2: '/image/machupicchu2.jpeg',
        names: 'Machu Picchu',
        context: 'Historic Sanctuary of Machu Picchu: Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna',
      },
    },
    {
        id: 3,
        imgSrc: './Assesttour/img3.jpg',
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. the Hallmark of this place is lavish and beauty. Always interesting to be in this place.',
        details: {
          bg: '/image/gbr.webp',
          bg2: '/image/gbr2.jpeg',
          names: 'Great Barrier Reef',
          context: 'One of Australia most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the worlds largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches. Because of its natural beauty, the Great Barrier Reef has become one of the worlds most sought after tourist destinations.The Great Barrier Reef consists of about 3,000 individual reefs of coral, and the biodiversity they contain is remarkable. There are animals you would probably recognize, such as dolphins, turtles, crocodiles, and sharks. There are also venomous sea snakes, brightly colored worms, and large algae. These species interact to form a complex and delicate ecosystem dependent on the coral reef for survival. Yet today the coral—and therefore all the organisms that depend on it—is gravely at risk.'
        }
      },
      {
        id: 4,
        imgSrc: './Assesttour/img4.jpg',
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the World Tourism Ranking, 45 Million People visit Turkey every year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.',
        details: {
          bg: '/image/cappadocia.jpg',
          bg2: '/image/cappadocia2.jpg',
          names: 'Cappadocia',
          context: 'Göreme National Park and the Rock Sites of Cappadocia.In a spectacular landscape, entirely sculpted by erosion, the Göreme valley and its surroundings contain rock-hewn sanctuaries that provide unique evidence of Byzantine art in the post-Iconoclastic period. Dwellings, troglodyte villages and underground towns, the remains of a traditional human habitat dating back to the 4th century can also be seen there. It is believed that the first signs of monastic activity in Cappadocia date back to the 4th century at which time small anchorite communities, acting on the teachings of Basileios the Great, Bishop of Kayseri, began inhabiting cells hewn in the rock. In later periods, in order to resist Arab invasions, they began banding together into troglodyte villages or subterranean towns such as Kaymakli or Derinkuyu which served as places of refuge.'
        }
      },
      {
        id: 5,
        imgSrc: './Assesttour/img5.jpg',
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanajuato is known fro its  history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always Welcome.',
        details: {
          bg: '/image/guanajuato.jpeg',
          bg2: '/image/guanajuato2.jpg',
          names: 'Guanajuato',
          context: 'Historic Town of Guanajuato and Adjacent Mines.Founded by the Spanish in the early 16th century, Guanajuato became the worlds leading silver-extraction centre in the 18th century. This past can be seen in its subterranean streets and the Boca del Inferno, a mineshaft that plunges a breathtaking 600 m. The town fine Baroque and neoclassical buildings, resulting from the prosperity of the mines, have influenced buildings throughout central Mexico. The churches of La Compañía and La Valenciana are considered to be among the most beautiful examples of Baroque architecture in Central and South America. Guanajuato was also witness to events which changed the history of the country.Guanajuato, estado (state), central Mexico. It is bounded by the states of San Luis Potosí to the north and northeast, Querétaro to the east, Michoacán to the south, and Jalisco to the west. It lies on the Mesa Central at an average elevation of about 6,000 feet (1,800 metres). The city of Guanajuato is the state capital.'
        }
      },
      {
        id: 6,
        imgSrc: './Assesttour/img6.jpg',
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The Vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food.',
        details: {
          bg: '/image/cinqueterre.jpeg',
          bg2: '/image/cinqueterre2.jpeg',
          names: 'Cinque Terre',
          context: 'So pretty that it inspired a Disney movie (Luca), Cinque Terre (five lands) consists of five startlingly photogenic fishing villages on Italys northwest coast, their candy-colored houses stacked down the sides of ravines and on top of cliffs. With sea, great food and wine, jaw-dropping views and photo opportunities at every turn, this is everything people love about Italy.Today, the entire area is a national park that celebrates human ingenuity as well as Mother Nature, with around 120km (75mi) of footpaths allowing you to explore it in the raw. But as well as a place to walk, this is also a place to relax. Watch the waves beat against the rocks from one of the medieval castles scattered along the coast – a hallmark of Liguria, the wider region. Drink a glass of wine cultivated on those very cliffs. Watch the sunset set the sea aflame. And rejoice that you chose more than a day trip.'
        }
      },
      {
        id: 7,
        imgSrc: './Assesttour/img7.jpg',
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkor Wat represents the entire range of khmer art from the 9th to 15th century. This temple is considered as the heart and soul of cambodia. This place is known for its luxurious stays and adventurous activities.',
        details: {
          bg: '/image/angkorwat.jpg',
          bg2: '/image/angkorwat2.webp',
          names: 'Angkor Wat',
          context: 'Angkor: Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century. They include the famous Temple of Angkor Wat and, at Angkor Thom, the Bayon Temple with its countless sculptural decorations. UNESCO has set up a wide-ranging programme to safeguard this symbolic site and its surroundings.Angkor is one of the largest archaeological sites in operation in the world. Tourism represents an enormous economic potential but it can also generate irreparable destructions of the tangible as well as intangible cultural heritage.The management of the Angkor Site, which is inhabited, also takes into consideration the population living in the property by associating them to the tourist economic growth in order to strive for sustainable development and poverty reduction.'
        }
      },
      {
        id: 8,
        imgSrc: './Assesttour/img8.jpg',
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the Monument is breathtakingly beautiful. This place is known for its luxurious stays and exploring adventures.',
        details: {
          bg: '/image/taj.jpeg',
          bg2: '/image/taj2.jpg',
          names: 'Taj Mahal',
          context: 'Taj Mahal: An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the worlds heritage.The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. The uniqueness of Taj Mahal lies in some truly remarkable innovations carried out by the horticulture planners and architects of Shah Jahan.The tomb is further raised on a square platform with the four sides of the octagonal base of the minarets extended beyond the square at the corners.'
        }
      },
      {
        id: 9,
        imgSrc: './Assesttour/img9.jpg',
        destTitle: 'Bali',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.',
        details: {
          bg: '/image/bali.jpeg',
          bg2: '/image/bali2.jpeg',
          names: 'Bali',
          context: 'Land of the Gods: Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers’ paradise! Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples.There are thousands of gift shops in Bali. From Denpasar to Ubud, you will find many things you did like to bring back home. Balinese signature souvenir range from delicious snacks and beverages, to the exquisite handcrafted goods like Tenun Bali.Most of the starred hotels are located near the beach. Some even have their own private spots at certain beaches, where you can splurge on exclusive privilege. You can find them easily at popular spots like Kuta, Sanur, and Seminyak.'
        }
      }
    
  ];

  return (
    <Routes>
      <Route path="/" element={<Heading />} />
      <Route path="/register" element={<LoginRegister />} />
      <Route path="/details/:id" element={<Detailmap destinations={destinations} />} />
      <Route path="/contactform" element={<Contactform/>}/>
      <Route path="/payment" element={<GooglePayButton/>}/>
      
    </Routes>
  );
};

export default App;
