import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChat from './LiveChat'
import Comments from "./Comments"


const WatchVideo = () => {
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get("v"))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <>
      <div className="pl-8 w-3/4">
        {
          <iframe
            height="500"
            className="rounded-2xl w-[70vw]"
            src={"https://www.youtube.com/embed/"+searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        }

        <div className="mt-4 overflow-x-scroll">

        <CommentsContainer/>
        </div>
      </div>
     <LiveChat name={"Syed Ahad"} message={"Hii! testingg"}/>
     
    </>
  )
}

export default WatchVideo
