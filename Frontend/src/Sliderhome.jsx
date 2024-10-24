const Sliderhome = () => {
   
    const Array = [
      { src: 'http://localhost:1234/Prodimg/pimg-1729735065290-682742010.jpeg' },
      { src: 'http://localhost:1234/Prodimg/pimg-1729734751555-30655823.jpeg' },
      { src: 'http://localhost:1234/Prodimg/pimg-1729735384561-611081396.jpeg' },
      { src: 'http://localhost:1234/Prodimg/pimg-1729735211332-484323909.jpeg'},
      { src:'http://localhost:1234/Prodimg/pimg-1729733809941-866267107.jpeg ' },

    ]
   
  
    return (
      <div>

        <div className="slidewrapper">

          {Array.map((image, index) => (
            <div key={index}>
              <img src={image.src} />
            </div>
          ))}

        </div>
       

      </div>
    );
  }
  
  export default Sliderhome;
  