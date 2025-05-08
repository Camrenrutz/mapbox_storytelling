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
            title: 'Time Period of As I Lay Dying- Kyle Carey',
            image: './assets/great_depression.jpeg',
            description: '<em>As I Lay Dying</em> is the book set the farthest back in time, set in the 1930s in Mississippi. The book follows a family of six, a father and his five children, who are on their way to bury their mother in Jefferson, Mississippi. Notable historical events during the time of this story include; The Great Migration where millions of African Americans moved out of the Southern US to the North to seek job opportunities and fairer treatment, The Great Depression which led to the highest rate of unemployment and poverty the US had ever seen, and the inforduction of consumer cars which gave mobility to thousands of people.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
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
            title: 'Race in As I Lay Dying- Kyle Carey',
            image: './assets/aild_cover.jpeg',
            description: '<em>As I Lay Dying</em> is an exception to every other book on this list, featuring zero African American characters. This actually works in favor of this project, as it shows how the Bundren family does not have to deal with problems in regards to their own race. In the other novels we will discuss, race can be an inhibiting factor on movement and economic spending, however in <em>As I Lay Dying</em> because the Bundren family is white they do not have to deal with any issues.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
                zoom: 6.5,
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
            title: 'Gender in As I Lay Dying- Kyle Carey',
            image: '',
            description: '<em>As I Lay Dying</em> provides a unique insight into gender roles, as Dewey Dell and Addie Bundren are really the only female characters Faulkner provides the audience with insight on. <em>As I Lay Dying</em> is such a fascinating novel with it’s takes on gender, as it shows how everyone suffers from the patriarchy, not just women. Through Darl we see the patriarchy remove those who don’t conform, through Addie we see the patriarchy use and replace women for children, and through Dewey we see the oversexualization of women and the preying on the young/innocent.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
                zoom: 5,
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
            title: 'Time Period of Their Eyes Were Watching God- Kyle Carey',
            image: '',
            description: 'add text',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 6.5,
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
            title: 'Race in Their Eyes Were Watching God- Kyle Carey',
            image: './assets/teewg_cover.jpeg',
            description: 'add text',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 6.5,
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
            title: 'Gender in Their Eyes Were Watching God- Kyle Carey',
            image: '',
            description: 'add text',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 5,
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
            title: 'Time Period of The Color Purple- Kyle Carey',
            image: './assets/jim_crow.jpeg',
            description: '<em>The Color Purple</em> is a book in which the time period progresses significantly throughout the novel, beginning in 1909 and ending in 1947. The book takes place in several places, from Georgia to Tennessee, and to Africa. The book follows Celie, a young girl who has been married off to Mr. and her journey to find her sense of self and purpose. During this time period both women and African Americans fought hard for equal rights and representation. Personal autonomy would have been difficult for a poor young black woman especially acquiring the funds for movement and spending. Notable events of the time would have included; both World Wars which came about from the emergence of global interconnectedness, causing tensions to rise and alliances to be formed, the 19th Amendment which gave women the right to vote in 1920, Roaring Twenties which was a people of economic and cultural boom, and Jim Crow Laws which segregated Whites and Blacks and legally authorized racism.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
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
            title: 'Race in the The Color Purple- Kyle Carey',
            image: '',
            description: '<em>The Color Purple</em> is a novel that mostly deals with gender rather than race, however that does not mean that race does not play a part in this book. It takes the discussion of race to a multinational level by having characters visit both Africa and Europe, as well as showing how native Africans viewed Europeans. Since most characters are African American, there is not too many interactions between those of different races, however the impact of race can be felt in terms of class differences, as the White people who are introduced are well off and even British royalty.The most shocking point from the African continent is when the natives refuse to acknowledge any part of slavery, insinuating they likely allowed for it to happen.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 2.5,
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
            title: 'Gender in The Color Purple- Kyle Carey',
            image: './assets/color_purple_cover.jpeg',
            description: '<em>The Color Purple</em> is the novel that touches the most on gender, dealing with a young woman’s journey of self discovery while navigating the patriarchy and her sexuality. Celie begins the book completely subservient to Albert believing that she should only listen and never express herself. However her outlook on life and womanhood is changed through her interactions with others throughout the novel; showing her women are capable and strong and that everyone deserves the right to autonomy.<br> “All my life I had to fight. I had to fight my daddy. I had to fight my brothers. I had to fight my cousins and my uncles. A girl child ain’t safe in a family of men” (Walker, 39).',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 5,
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
            title: 'Time Period of Salvage The Bones- Camren Rutz',
            image: './assets/hurricane_kat.jpeg',
            description: '<em>Salvage The Bones</em> takes place in a time completely different from all of the other books we have read. This book is the only book to take place in the 21st Century. Due to this, there are a lot of social and technological differences in <em>Salvage The Bones</em> that are not seen in any other book. Notable historical events include; the end of Jim Crow, which desegregated the nation 40 years prior, the emergence of internet and cellphones, allowing all people to connect more easily, and Hurricane Katrina, the main focal point surrounding <em>Salvage The Bones</em>',
            location: {
                center: [-89.26806244331303, 30.400637931513852], 
                zoom: 6.5,
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
            title: 'Race in Salvage The Bones- Camren Rutz',
            image: './assets/stb_cover.jpeg',
            description: 'Race is an interesting thing in <em>Salvage The Bones</em>. The fact that just about all of the main characters are African American, reveals lingering effects of the past. Though the South has been desegregated for sometime now, Blacks and Whites still remain separated in their communities. While this specific topic is not explicitly mentioned in the book, it is apparent. This aspect of racially separated communities tells the story that even though the South is no longer segregated, different races do not often intermix in a communal aspect.',
            location: {
                center: [-89.26806244331303, 30.400637931513852], 
                zoom: 6.5,
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
            title: 'Gender in Salvage The Bones- Camren Rutz',
            image: '',
            description: 'add text',
            location: {
                center: [ -89.26806244331303, 30.400637931513852], 
                zoom: 5,
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
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'True autonomy is something that people have been fighting for since the dawn of civilization; with people having to overcome gender, race, class, and physical limits all for the right to choose how they can live. The novels we reviewed show just how personal autonomy changed in the Southern United States over time, and how both women and people of color fought for and secured their autonomy.',
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
        
