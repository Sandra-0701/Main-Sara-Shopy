import Banner from './components/Banner'
import CategorySection from './components/CategorySection'
import CardSlider from './components/CardSlider'
import LocationModal from './components/LocationModal'
import ProductSection from './components/ProductSection'
import products from './data/products'
import './index.css'
function App() {
  
  return (
    <div className="">
     
      <LocationModal />

      {/* Banner */}
      <Banner/>

      {/* Categories */}
      <CategorySection/>

      <ProductSection
        title="Dairy, Bread & Eggs"
        products={products["Dairy, Bread & Eggs"]}
      />

      <ProductSection
        title="Snacks & Munchies"
        products={products["Snacks & Munchies"]}
      />

      {/* Carousel */}
      <div className="my-6">
        <CardSlider />
      </div>

      {/* More Products */}
      <ProductSection
        title="Cold Drinks & Juices"
        products={products["Cold Drinks & Juices"]}
      />
   
    </div>
    
  )
}

export default App
