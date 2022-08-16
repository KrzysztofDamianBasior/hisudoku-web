import {useState, useEffect, useRef, useCallback}  from 'react'
import {useInView} from 'react-intersection-observer'

export const useScrollButtons = (threshold = 0.2) => {

    const {ref: topLeftRef, inView: topLeftInView} = useInView({threshold})
    const {ref: bottomLeftRef, inView: bottomLeftInView} = useInView({threshold})
    const {ref: topRightRef, inView: topRightInView} = useInView({threshold})
    const {ref: bottomRightRef, inView: bottomRightInView} = useInView({threshold})

    const [topLeft, bottomLeft, topRight, bottomRight] = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
      ];
    
      const setRefsTopLeft = useCallback(
        (node) => {
          topLeft.current = node;
          topLeftRef(node);
        },
        [topLeftRef]
      );

      const setRefsBottomLeft = useCallback(
        (node) => {
          bottomLeft.current = node;
          bottomLeftRef(node);
        },
        [bottomLeftRef]
      );

      const setRefsTopRight = useCallback(
        (node) => {
          topRight.current = node;
          topRightRef(node);
        },
        [topRightRef]
      );

      const setRefsBottomRight = useCallback(
        (node) => {
          bottomRight.current = node;
          bottomRightRef(node);
        },
        [bottomRight]
      );

    type visibleButtonsUnion = 'tr' | 'tl' | 'br' | 'bl'
    const [visibleButtons, setVisibleButtons] = useState<visibleButtonsUnion>('br') 
 
    useEffect(()=>{
        if(topLeftInView){
            setVisibleButtons('br')
        }
        if(bottomLeftInView){
            setVisibleButtons('tr')
        }
        if(topRightInView){
            setVisibleButtons('bl')
        }
        if(bottomRightInView){
            setVisibleButtons('tl')
        }
    }, [topLeftInView, topRightInView, bottomLeftInView, bottomRightInView]) 
    
    return {visibleButtons, topLeft, topRight, bottomLeft, bottomRight, setRefsTopLeft, setRefsTopRight, setRefsBottomLeft, setRefsBottomRight}
}
