import React, { useEffect } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'




function Carousel() {

  
  return (
<CCarousel controls>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1438012940875-4bf705025a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="slide 3" />
  </CCarouselItem>
</CCarousel>
  );
}

export default Carousel;