import { gql } from "@apollo/client";

const GET_FESTIVALS = gql`
    query getFestivals{
        festivals{
            id,
            name,
            views,
            image
        }
    }
`

const GET_FESTIVAL = gql`
    query getFestival{
        festival{
            id,
            name,
            views,
            musicTags
        }
    }
`

export {GET_FESTIVALS, GET_FESTIVAL}