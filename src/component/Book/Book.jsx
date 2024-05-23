



const Book = ({book}) => {
    const {image, name,By,Rating} = book;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} height={20} alt="book" /></figure>
  <div className="card-actions justify-start mt-2 ml-4 gap-3">
      <div className="badge text-[#23BE0A] badge-outline">Young Adult</div> 
      <div className="badge text-[#23BE0A] badge-outline">Identity</div>
    </div>
  <div className="card-body">
    <h2 className="card-title">
     {name}
     
    </h2>
    <p>By  : {By}</p>
    <div className="divider"></div> 
   <div className="flex justify-around">
    <p> Fiction</p>
    <p className="Rating">{Rating} :</p>
   </div>
  </div>
</div>
    );
};

export default Book;