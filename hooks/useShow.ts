import { create } from 'zustand';

type ShowState = {
    category: boolean;
    player: boolean;
    search: boolean;
    library: boolean;
    upload: boolean;
    list: boolean;
    setShow: (key: keyof ShowState) => void; 
};

const useShowModal = create<ShowState>((set) => ({
    category: false,
    player: false,
    search: false,
    library: false,
    upload: false,
    list: false,
    setShow: (key) => set(() => ({
        category: key === 'category',
        player: key === 'player',
        search: key === 'search',
        library: key === 'library',
        upload: key === 'upload',
        list: key === 'list'
    })),
}));

export default useShowModal;
