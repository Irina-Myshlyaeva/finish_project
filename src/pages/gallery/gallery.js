import "./gallery.css"
function Gallery() {
    return (
        <div className='gallery-container'>
            <div className="gallery-content">
                <div className="gallery-item">
                <img src={require("../../img/calc.png")}/>
                </div>
                <div className="gallery-item">
                <img src={require("../../img/figma.png")}/>
                </div>
                <div className="gallery-item">
                <img src={require("../../img/test.png")}/>
                </div>
                <div className="gallery-item">
                <img src={require("../../img/site_new_project.png")}/>
                </div>
                <div className="gallery-item">
                <img src={require("../../img/front.jpg")}/>
                </div>
                <div className="gallery-item">
                <img src={require("../../img/front1.jpg")}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;