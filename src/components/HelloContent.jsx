import React from 'react'

export default function HelloContent() {
  return (
    <>
      <div className="h-full w-full">
        <div>
          <h1 className=" text-9xl font-Nunito font-bold my-64 mx-10">StarWars 
            Library<span className="animate-bounce">.</span></h1>
        </div>
        <div>
          <h3 className=" pt-1 pl-24 pr-24 text-justify text-xs -my-60 min-w-min">The scene is jaw-dropping, as laser beams are fired back and forth, but the look of the spaceships and the showcase of 
            power set the stage for one of the greatest series in motion picture history. It also establishes this as a film franchise full of awesomely designed 
            modes of transportation.The vehicles of Star Wars, whether on land or in space, provided a unique look that influenced future science fiction films and 
            kids of all ages.</h3>
        </div>
      </div>
      <div className="h-full w-3/4">
        <div className="my-48 lg:block">
          <img src="http://24.media.tumblr.com/tumblr_lqnefjgQ411qzkltpo1_400.gif" alt="" />
        </div>
      </div>
    </>
  )
}
