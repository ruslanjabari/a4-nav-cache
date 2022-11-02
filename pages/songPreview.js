
export default function SongPreview() {
  return (
    <div className="song-preview">
    <h1>Song Preview</h1>
    <h2 className="warning">This is a cached version (Spotify might be down)</h2>
    <video width={320} height={240} controls>
      <source src={'/preview'} type="audio/mpeg" />
    </video>
    </div>
  );
}