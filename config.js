var config = {
    style: 'mapbox://styles/camrenrutz/cm9swdeat00up01s64xqbhgaa',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY2FtcmVucnV0eiIsImEiOiJjbTlzd2I2OGMwNTZnMmxvaGpxeGlkOGd5In0.HB-Jdr3v-HeO9Oc8GkhNYQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Southern Literature Virtual Essay',
    subtitle: 'The Progession of Autonomy in the South',
    byline: 'By Camren Rutz and Kyle Carey',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters:[
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Autonomy',
            image: '',
            description: 'Autonomy is defined as the capacity to make an informed, uncoerced decision. Autonomous organizations, individual\'s, or institutions are independent or self-governing. Throughout this presentation we will discuss the growth of autonomy on an individual level in the Southern United States through movement and economic transaction and how time period, race, and gender and gender all play into an individuals ability to exercise free will.'
            ,location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Time Period of <em>As I Lay Dying</em>- Kyle Carey',
            image: '',
            description: '<em>As I Lay Dying</em> is the book set the farthest back in time, set in the 1930s in Mississippi. The book follows a family of six, a father and his five children, who are on their way to bury their mother in Jefferson, Mississippi. Notable historical events during the time of this story include; The Great Migration where millions of African Americans moved out of the Southern US to the North to seek job opportunities and fairer treatment, The Great Depression which led to the highest rate of unemployment and poverty the US had ever seen, and the inforduction of consumer cars which gave mobility to thousands of people.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'right',
            hidden: false,
            title: 'Race in <em>As I Lay Dying- Kyle Carey</em>',
            image: '',
            description: 'add text',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'Gender in <em>As I Lay Dying</em>- Kyle Carey',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: 'Time Period of <em>Their Eyes Were Watching God</em>',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'Race in <em>Their Eyes Were Watching God</em>',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'Gender in <em>Their Eyes Were Watching God</em>',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
        id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'the color purple time period',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []      
        },
        {
        id: 'chapter-eight',
            alignment: 'right',
            hidden: false,
            title: 'color purple gender',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'color purple race',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'chapter-ten',
            alignment: 'left',
            hidden: false,
            title: 'salvage the bones time period',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'chapter-eleven',
            alignment: 'left',
            hidden: false,
            title: 'salvage the bones gender',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'chapter-twelve',
            alignment: 'left',
            hidden: false,
            title: 'salvage the bones race',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []     
        },
        {
        id: 'chapter-thirteen',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'add text',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
}
        
