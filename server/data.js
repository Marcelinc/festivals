const festivals = [{id:"1",name:'Tomorrowland',place:{country: 'Belgium', city: 'Boom'}, musicTags: ["1"],views: 0},
{id:"2",name:'Ultra Music Festival', place: {country: 'United States', city: 'Miami,Florida'}, musicTags: ['1'],views: 0},
{id:'3',name:'Sunrise Festival', place: {country: 'Poland', city: 'Kołobrzeg'}, musicTags: ['7','3','1'],views:0},
{id:'4',name:'Defqon 1', place: {country: 'Netherlands', city: 'Biddinghuizen'}, musicTags: ['4', '8','1', '6', '9'],views:0},
{id:'5',name:'Parookaville', place: {country: 'Germany', city: 'Weeze'}, musicTags: ['1','2'],views:0}]

const musicGenres = [{id:'1', name: 'EDM'},
{id: '2', name: 'House'}, 
{id: '3', name: 'Trance'},
{id: '4', name: 'Hardstyle'},
{id: '5', name: 'Techno'},
{id: '6', name: 'Hardcore'},
{id: '7', name: 'Big Room'}, 
{id: '8', name: 'Hard dance'},
{id: '9', name: 'Psychedelic trance'}]

module.exports = {festivals, musicGenres}