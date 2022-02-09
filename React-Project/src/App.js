import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Side from './components/Side';



function App() {
  return (
    <div>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='container'>

        <div className='cards'>
        <Cards title="HOODIE" price="$15" des="Jones Wears Marshemello Printed Hoodie Black"  />
        <Cards title="sneakers/canvas" price="$3" des="Smart fashion Breathable Unisex Sneakers white"/>
        <Cards title="Wireless Mouse" price="$5" des="Wireless Rechargeable Mouse Black"/>
        <Cards title="hair Wig" price="$50" des="Hair Wig Soft And Short Hair Wig (Natural Colour)"/>
        <Cards title="Bracelet" price="$15" des="Feng Shui Black Obasidian Wealth Bracelet"/>
        <Cards title="BackPack" price="$20" des="GATWIGA Black Causal Bag Business Laptop Backpack"/>
        </div>

        <div className='side_container_layout'>
          <Side title="ONLINE SHOPPING" des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam dolorum, praesentium voluptas officiis sunt
						eius id repudiandae ducimus aut et iure libero beatae
						debitis ullam corrupti pariatur. Doloremque,
						exercitationem totam!"/>
             <Side title="FREE Delivery " des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam dolorum, praesentium voluptas officiis sunt
						eius id repudiandae ducimus aut et iure libero beatae
						debitis ullam corrupti pariatur. Doloremque,
						exercitationem totam!"/>

        </div>
      

      </div>
    

    </div>
  );
}

export default App;
