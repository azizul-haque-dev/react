

function useDebounce (cb,dealy){
    const timeooutRef = useRef(null)
    useEffect(() => {
   
    
      return () => {
        if(timeooutRef.current) clearTimeout(timeooutRef.current)
      }
    }, [])
    
    const debounceCallback =(...arg)=>{
        if(timeooutRef.current){
            clearTimeout(timeooutRef.current)
        }
        setTimeout(() => {
            cb(...arg)
        }, dealy);

    }
    return debounceCallback
}