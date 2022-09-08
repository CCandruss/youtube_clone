import React from 'react'

import {Stack, Box} from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ( { videos } ) => {
    console.log(videos);
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map( (item, idx) => (
                <Box key={idx}>
                    {item.id.videoID && <VideoCard video = {item} /> } 
                    {item.id.channelID && <ChannelCard channelDetail = {item} /> } 
                </Box> //if statement structure if(item.id.videoID (&&) is my then)
            ))}
        </Stack>
    )
}

export default Videos