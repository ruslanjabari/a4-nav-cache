
export default function SongDetails() {
  return (
    <div className="song-details">
      <div className="banner"> 
        <div className="logo">
          <img width={'45%'} src={'/logo.png'} alt="banner" />
        </div>
        <div className="warning-div">
          <h3 className="warning">This is a cached example</h3>
        </div>
      </div>
      <div className="song-cover">
        <img src={'/cover'} />
      </div>
      <div className="song-info">
        <div className="s">
          <h3 className="p">Song</h3>
        </div>
        <h1 style={{ color: 'white' }}>Pretty Girl</h1>
        <div className="artist-info">
          <h4 className="p">Clairo</h4>
          <h4 className="p">·</h4>
          <h4 className="p">2017</h4>
          <h4 className="p">·</h4>
          <h4 className="p">2:58</h4>
        </div>
      </div>
      <div className="song-mid">
        <div className="heart">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 150 150" fill="none">
              <path d="M125.784 35.0369C113.039 22.2916 92.9859 21.3682 79.1227 32.8994C79.1062 32.9135 77.318 34.3807 75 34.3807C72.6234 34.3807 70.9266 32.9416 70.8609 32.8853C57.0141 21.3682 36.9609 22.2916 24.2156 35.0369C17.6695 41.583 14.0625 50.2877 14.0625 59.5478C14.0625 68.808 17.6695 77.5127 24.0914 83.9228L64.3078 131.006C66.9844 134.14 70.882 135.938 75 135.938C79.1203 135.938 83.0156 134.14 85.6922 131.009L125.782 84.0611C139.301 70.5447 139.301 48.5533 125.784 35.0369ZM122.346 80.8807L82.1297 127.964C80.3461 130.05 77.7469 131.25 75 131.25C72.2531 131.25 69.6562 130.053 67.8703 127.964L27.532 80.7447C21.8695 75.0822 18.75 67.5541 18.75 59.5478C18.75 51.5392 21.8695 44.0135 27.5297 38.351C33.3961 32.4822 41.0555 29.5127 48.7336 29.5127C55.4742 29.5127 62.2289 31.8025 67.7977 36.4338C68.0977 36.7033 70.8586 39.0682 75 39.0682C79.0266 39.0682 81.8578 36.7314 82.1367 36.49C94.1109 26.5291 111.45 27.3307 122.47 38.351C134.159 50.0393 134.159 69.0564 122.346 80.8807Z" fill="#535353"/>
          </svg>
        </div>
        <div style={{ color: 'white' }}>···</div>
      </div>
      <div className="artist">
        <div style={{ paddingRight: '20px'}}>
          <img style={{ borderRadius: '100%' }} width={85} src={'/artist'} />
        </div>
        <div className="artist-name">
          <div style={{ marginBottom: "25px"}}>
            <h5 style={{ fontWeight: '400' }}>ARTIST</h5>
          </div>
          <div style={{ marginTop: "-25px" }}>
            <h2 style={{ marginTop: "-15px" }} >Clairo</h2>
          </div>
        </div>
      </div>
    </div>
  );
}