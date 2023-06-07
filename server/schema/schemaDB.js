const { GraphQLObjectType, GraphQLID, 
    GraphQLString, GraphQLList, GraphQLSchema, 
    GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } = require("graphql");
const { default: mongoose } = require("mongoose");

//Mongoose models
const Festival = require('../models/Festival')
const MusicGenre = require('../models/MusicGenre')

//Place type and input
const PlaceType = new GraphQLObjectType({
    name: 'place',
    fields: () => ({
        country: {type: GraphQLString},
        city: {type: GraphQLString}
    })
})
const PlaceInput = new GraphQLInputObjectType({
    name: 'PlaceInput',
    fields: () => ({
        country: {type: GraphQLString},
        city: {type: GraphQLString}
    })
})


//MusicGenre Type and Input
const MusicGenreType = new GraphQLObjectType({
    name: 'MusicGenre',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
})

//MusicTag Input
const MusicTagInput = new GraphQLInputObjectType({
    name: 'MusicTagInput',
    fields: {
        id: {type: GraphQLID}
    }
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
                var tags = new Array()
                var musictag
                parent.musicTags.forEach(tagID => {
                    musictag = MusicGenre.findById(tagID)
                    tags.push(musictag)
                    //console.log('tags inside: ',tags)
                })
                //console.log('tags outside: ',tags)
                return tags
            }
        },
        views: {type: GraphQLInt},
        image: {type: GraphQLString}
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        festivals: {
            type: new GraphQLList(FestivalType),
            resolve(parent,args){
                return Festival.find()
            }
        },
        festival: {
            type: FestivalType,
            args: { id: {type: GraphQLID} },
            resolve(parent,args){
                return Festival.findById(args.id)
            }
        },
        musicGenres: {
            type: new GraphQLList(MusicGenreType),
            resolve(parent,args){
                return MusicGenre.find()
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
                    return MusicGenre.findById(args.id)
                if(args.name) 
                    return MusicGenre.find({name: args.name})
            }
        }
    }
})

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //Add music genre
        addMusicGenre: {
            type: MusicGenreType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                const genre = new MusicGenre({
                    name: args.name
                })
                return genre.save()
            }
        },

        //Delete music genre
        deleteMusicGenre: {
            type: MusicGenreType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                return MusicGenre.findByIdAndRemove(args.id)
            }
        },

        //Add festival
        addFestival: {
            type: FestivalType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                place: {type: GraphQLNonNull(PlaceInput) },
                musicTags: {type: GraphQLNonNull(GraphQLList(MusicTagInput))},
                image: {type: GraphQLString}
            },
            resolve(parent,args){
                console.log(args)
                var festival = new Festival({
                    name: args.name,
                    place: args.place,
                    musicTags: args.musicTags
                })

                return festival.save()
            }
        },
        //Delete festival
        deleteFestival: {
            type: FestivalType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                return Festival.findByIdAndRemove(args.id)
            }
        },
        //Update festival
        updateFestival: {
            type: FestivalType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                views: {type: GraphQLInt},
                musicTags: {type: GraphQLList(MusicTagInput)},
                place: {type: PlaceInput},
                image: {type: GraphQLString}
            },
            resolve(parent,args){
                //console.log(args)
                var tags = args.musicTags.map(tag => mongoose.Types.ObjectId(tag))
                //console.log(tags)
                return Festival.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        place: args.place,
                        musicTags: tags,
                        views: args.views
                    }
                }, {new: true})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})