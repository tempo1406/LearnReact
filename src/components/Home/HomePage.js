import videoHomePage from '../../assets/video-homepage.mp4'

const HomPage = (props) => {
    return (
        <div className="homepage-container row">
            <video className='col-md-6' width='630px' height='570px ' autoPlay muted loop>
                <source 
                    src={videoHomePage}
                    type='video/mp4'
                />
            </video>
            <div className='homepage-content col-md-6'>
                <h1>Make forms worth filling out</h1>
                <p> Get more data—like signups, feedback, and anything else
                    —with forms designed to 
                    <strong> be refreshingly different.</strong>
                </p>
                <button className='btn-started'>Get started—it's free</button>
            </div>
        </div>
    )
}

export default HomPage;