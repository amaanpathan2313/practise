import { useState } from 'react';
import './Flex.css'

const Flex = () => {
    const [c, setC] = useState("")

      let obj = {
    img1: "https://plus.unsplash.com/premium_photo-1683140766566-3ecdcf5a02e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    img2: "https://pathway-aashu.vercel.app/assets/gallery-2.jpg",
    img3: "https://pathway-aashu.vercel.app/assets/gallery-3.jpg",
    img4: "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww",
    img5: "https://pathway-aashu.vercel.app/assets/trip-2.jpg",
    img6: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    img7: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    img8: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    img9: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    img10: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
  };

    return (
        <>

        <div className='fBox'>

            <div><img src={obj.img1} alt="img1" /></div>
            <div><img src={obj.img2} alt="img2" /></div>
            <div><img src={obj.img3} alt="img3" /></div>
            <div><img src={obj.img4} alt="img4" /></div>
            <div><img src={obj.img5} alt="img5" /></div>
            <div><img src={obj.img6} alt="img6" /></div>
            <div><img src={obj.img7} alt="img7" /></div>
            <div><img src={obj.img8} alt="img8" /></div>
            <div><img src={obj.img9} alt="img9" /></div>
            <div><img src={obj.img10} alt="img10" /></div>

        </div>


        
        </>
    )
};


export default Flex;