import { useEffect, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data:[],
    isLoading: true,
    hasError: null,
  })

    const getFetch = async()=>{

      //para cuando cambie de url
      setState({
        ...state,
        isLoading:true
      })

        const resp = await fetch(url);
        const data = await resp.json();
        
        //después de obtener los datos
        setState({
          data:data,
          isLoading:false,
          hasError: null,
        })
    }

    //cada que cambie la url, se llama a getFetch
    useEffect(() => {
      getFetch();
    }, [url])
    
  return {
    data: state.data,
    isLoading:state.isLoading,
    hasError:state.hasError
  };
}
