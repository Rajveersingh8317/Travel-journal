

import './App.css'
import Navbar from "./component/Navbar"
import Card from "./component/Card"

function App() {
  

  return (
    <>
      <Navbar/>
      <Card
       img="mountfuji.png"
       img1="location.png"
       country="JAPAN"
       title="Mount Fuji"
       location="view on google Map"
       date="12 Jan,2021 - 24 Jan,2021"
       about="Mount Fuji is the taliest mountain in Japan, standing at 3,776
       meters (12,380feet).Mount Fuji is the single most popular toueist
       site in Japan , for both Japanese and foreign tourists.Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) 
       near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) 
       of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama
        metropolitan area."
       />
       <Card
       img="sydenyopera house.png"
       img1="location.png"
       country="AUSTRALIA"
       title="Sydney Opera House"
       location="view on google Map"
       date="27 May,2021 - 8 Jan,2021"
       about="Sydney Opera House was added to UNESCO's World Heritage List in 2007. 
       There are more than 1 million roof tiles covering approximately 1.62 hectares sitting over the structure. 
       They were made in Sweden. Seven A380s could sit wing-to-wing on the site."
   />
    <Card
       img="images.png"
       img1="location.png"
       country="NORWAY"
       title="Geirangerfjord"
       location="view on google Map"
       date="01 oct,2021 - 18 Nov,2021"
       about="Geiranger Fjord is a fjord, or sea inlet surrounded by cliffs, located in the county of Møre og Romsdal in Norway, Europe, that was created by a glacier.
       ‘Geiranger Fjord’ is also known as ‘Geirangerfjord’, and is called ‘Geirangerfjorden’ in Norwegian.
       In 2005, the UNESCO World Heritage Convention listed Geiranger Fjord as a World Heritage Site, along with Nærøyfjord, as part of the West Norwegian Fjords listing."
   />
      
    </>
  )
}

export default App
