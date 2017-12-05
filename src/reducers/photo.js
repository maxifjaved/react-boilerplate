import { fromJS, isKeyed } from 'immutable'

const initialState = fromJS ({
    images: [],
    activeImage: [],
    isChange: true,
    clickcount: 0
});

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_PHOTO':
            let activeImage = action.oldImage,
                isChange = action.newImageNum != activeImage.num,
                images = action.images
            if (isChange) {
                let len = images.length
                images[len] = activeImage
                for (let i = 0; i < len; i++) {
                    if (action.newImageNum == images[i].num) {
                        activeImage = images.splice(i, 1)[0]
                    }
                }
            }
            return {
                images: images,
                activeImage: activeImage,
                isChange: isChange,
            }

    }
    return state
}