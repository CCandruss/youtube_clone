import React from 'react';
import {Link} from "react-router-dom"
import { Typography, Card, CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ( { video: {id: {videoId}, snippet} } ) => {

  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}/> 
        </Link>
    </Card>
  )
}

export default VideoCard
//in cardMedia the question marks are there to make this optional so there are not errors if issues arise it will just come back as undefined