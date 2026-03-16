import { useEffect, useState } from "react"
import { dummyPostsData } from "../assets/assets"
import Loading from "../components/Loading"

const Feed = () => {
  const [feed,setfeeds] = useState([])
  const [loading,setLoading] = useState(true)
  const fetchFeeds = async() => {
    setfeeds(dummyPostsData)
  }
  useEffect(()=>{
    fetchFeeds()
  },[])
  return !loading ?(
    <>
      <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
        {/* Stories and Post list  */}
        <div>
          <h1>Stories</h1>
        </div>
        {/* Right Sidebar  */}
        <div className="p-4 space-y-6">
          List of Posts
        </div>
      </div>
    </>
  ): <Loading />
}

export default Feed