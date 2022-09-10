const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLInt } = require("graphql");
const { festivals } = require("../data");

//Place type
const PlaceType = new GraphQLObjectType({
    name: 'place',
    fields: () => ({
        country: {type: GraphQLString},
        city: {type: GraphQLString}
    })
})

//MusicTags Type
const MusicTagsType = new GraphQLObjectType({
    name: 'MusicTags',
    fields: () => ({
        musicTags: {type: [String]}
    })
})

//Festival Type
const FestivalType = new GraphQLObjectType({
    name: 'Festival',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        place: {type: PlaceType},
        //musicTags: {type: MusicTagsType},
        views: {type: GraphQLInt}
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        festival: {
            type: FestivalType,
            args: { id: {type: GraphQLID} },
            resolve(parent,args){
                return festivals.find(festival => festival.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})