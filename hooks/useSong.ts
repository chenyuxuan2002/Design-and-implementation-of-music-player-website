import {create} from 'zustand'
interface Song {
  id: number;
  title: string;
  mp3Path: string;
  albumUrl: string;
  artist:string
}

interface SongState {
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

const useSong = create<SongState>((set:any) => ({
  currentSong: {
    id: 1,
    title: "Unstoppable",
    mp3Path: "/song-files/Unstoppable.mp3",
    albumUrl: "https://www.v81radio.com/wp-content/uploads/2016/01/Sia-This-Is-Acting-Deluxe-2016.jpg?kuid=e7c735d7-6455-4f67-9a50-9c7e2f466a88&kref=https%3A%2F%2Fwww.v81radio.com%2Fthe-most-anticipated-albums-of-2016%2Fsia-this-is-acting-deluxe-2016%2F",
    artist:"Sia"
  },
  setCurrentSong: (song:any) => set({ currentSong: song }),
}));

export default useSong