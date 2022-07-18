import {useEffect, useRef} from "react";

export const useObserver = (ref: any, isLoading: boolean, callback: any) => {
  const observer = useRef()

  useEffect(() => {
    if (isLoading) return
    if (observer.current) { // @ts-ignore
      observer.current?.disconnect()
    }
    const cb = function (entries: any, observer: any) {
      if (entries[0].isIntersecting) {
        callback()
      }
    }
    // @ts-ignore
    observer.current = new IntersectionObserver(cb)
    if (ref.current) {
      // @ts-ignore
      observer.current?.observe(ref.current)
    }
  }, [isLoading])
}