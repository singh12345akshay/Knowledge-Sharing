import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="border-4 w-200 h-400 ">
        <div className="border-2 bg-red w-100 h-[500px] float-left">
          <Image
            width={200}
            height={300}
            alt="image"
            src="https://www.pixelstalk.net/wp-content/uploads/images8/Elsa-Frozen-Background-Free-Download.jpg"
          />
        </div>
        <div className="border-2 bg-green w-100 h-200 float-right">
          <Image
            width={200}
            height={400}
            alt="image"
            src="https://www.pixelstalk.net/wp-content/uploads/images8/HD-disney-frozen-wallpapers-for-mobile-phone-1080x1920-1.jpg"
          />
        </div>
        <p className='clear-none hover:clear-left'>
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </div>

      {/* <div className="border-4 w-200 h-200 flex-inline">
        <div className="border-2 bg-red w-100 h-200"></div>
        <div className="border-2 bg-green w-100 h-200"></div>
      </div>
      <p>
        Maybe we can live without libraries, people like you and me. Maybe.
        Sure, we're too old to change the world, but what about that kid,
        sitting down, opening a book, right now, in a branch at the local
        library and finding drawings of pee-pees and wee-wees on the Cat in the
        Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If
        you think this is about overdue fines and missing books, you'd better
        think again. This is about that kid's right to read a book without
        getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe
        that's how y'get your kicks. You and your good-time buddies.
      </p> */}
    </>
  );
}
