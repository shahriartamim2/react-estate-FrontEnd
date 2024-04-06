import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Lorem ipsum dolor sit amet consectetur </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere similique laborum accusamus sequi non error hic. Asperiores doloribus quos quia.</p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200+</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Years of Experience</h2>
                </div>
            </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
