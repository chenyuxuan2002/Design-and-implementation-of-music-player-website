import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
type Props = {}

interface SongData {
    title: string;
    artist: string;
    genre: string;
    duration: number;
    albumUrl: string;
    file: File | null; // Allow both File and null types
}

const Upload = (props: Props) => {
    const [songData, setSongData] = useState<SongData>({
        title: '',
        artist: '',
        genre: '',
        duration: 0,
        albumUrl: '',
        file: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSongData({ ...songData, [name]: value });
        console.log(songData);
        
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSongData({ ...songData, file: e.target.files[0] });
            console.log(songData);
            console.log(e.target.files[0].name);
        }
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(songData).forEach((key) => {
            if (key === 'file') {
                if (songData.file) {
                formData.append(key, songData.file);
                }
            } else {
                formData.append(key, songData[key as keyof Omit<SongData, 'file'>].toString());
            }
        });
        
        try {
            const {sccuess} = await (await axios.post('/api/song-upload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            })).data;
            if(sccuess === true){
                toast.success('Song uploaded successfully!');
            }else{
                toast.error('Fail to upload');
            }
           
        } catch (error) {
            toast.error('Upload failed');
        }
        };
    
      
  return (
    <form onSubmit={handleSubmit} className="space-y-4  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input 
            name="title" 
            value={songData.title} 
            onChange={handleChange} 
            placeholder="Title" 
            required 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
            name="artist" 
            value={songData.artist} 
            onChange={handleChange} 
            placeholder="Artist" 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
            name="genre" 
            value={songData.genre} 
            onChange={handleChange} 
            placeholder="Genre" 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
            name="albumUrl" 
            value={songData.albumUrl} 
            onChange={handleChange} 
            placeholder="Album URL" 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
            name="file" 
            type="file" 
            accept=".mp3" 
            onChange={handleFileChange} 
            required 
            className="block w-full text-sm text-gray-300 bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-700"
        />
        <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Upload Song
        </button>
    </form>

  
  )
}

export default Upload