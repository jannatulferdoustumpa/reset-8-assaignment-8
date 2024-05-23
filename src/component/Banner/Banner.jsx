import img from '../../assets/Screenshot (674).png'

const Banner = () => {
    return (
        <div className=' w-10/12 mx-auto'>
            <div>
            <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse  justify-around">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up<br></br>
your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A] mt-10">View the List</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Banner;