const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLInt } = require("graphql");
const { festivals, musicGenres } = require("../data");

//Place type
const PlaceType = new GraphQLObjectType({
    name: 'place',
    fields: () => ({
        country: {type: GraphQLString},
        city: {type: GraphQLString}
    })
})

//Festival Type
const FestivalType = new GraphQLObjectType({
    name: 'Festival',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        place: {type: PlaceType},
        musicTags: {
            type: new GraphQLList(MusicGenreType),
            resolve(parent,args){
                console.log('parent: ',parent)
                var tags = []
                parent.musicTags.forEach(tagID => {
                    //console.log('tagID: ',tagID)
                    musicGenres.find(genre => {
                       // console.log('sprawdzanie ',genre)
                        if(genre.id === tagID)
                            tags.push(genre)
                    })
                })
                return tags
            }
        },
        views: {type: GraphQLInt}
    })
})

//MusicGenre Type
const MusicGenreType = new GraphQLObjectType({
    name: 'MusicGenre',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        festivals: {
            type: new GraphQLList(FestivalType),
            resolve(parent,args){
                return festivals
            }
        },
        festival: {
            type: FestivalType,
            args: { id: {type: GraphQLID} },
            resolve(parent,args){
                return festivals.find(festival => festival.id === args.id)
            }
        },
        musicGenres: {
            type: new GraphQLList(MusicGenreType),
            resolve(parent,args){
                return musicGenres
            }
        },
        musicGenre: {
            type: MusicGenreType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent,args){
                if(args.id)
                    return musicGenres.find(genre => genre.id === args.id)
                if(args.name)
                    return musicGenres.find(genre => genre.name === args.name)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})