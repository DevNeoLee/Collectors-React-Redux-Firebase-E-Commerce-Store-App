const INITIAL_STATE = {
    sections: [
            {
                title: 'movie',
                imageUrl: '',
                id: 1,
                linkUrl: 'shop/movie'
            },
            {
                title: 'animation',
                imageUrl: '',
                id: 2,
                linkUrl: 'shop/animation'
            },
            {
                title: 'tv-series',
                imageUrl: '',
                id: 3,
                linkUrl: 'shop/tvseries'
            },
            {
                title: 'sports-art',
                imageUrl: '',
                size: 'large',
                id: 4,
                linkUrl: 'shop/sportsart'
            },
            {
                title: 'rare-collectors',
                imageUrl: '',
                size: 'large',
                id: 5,
                linkUrl: 'shop/rarecollection'
            }       
        ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;