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
            image: './assets/aild_coffin.jpeg',
            description: '<em>As I Lay Dying</em> provides a unique insight into gender roles, as Dewey Dell and Addie Bundren are really the only female characters Faulkner provides the audience with insight on. <em>As I Lay Dying</em> is such a fascinating novel with it’s takes on gender, as it shows how everyone suffers from the patriarchy, not just women. Through Darl we see the patriarchy remove those who don\’t conform, through Addie we see the patriarchy use and replace women for children, and through Dewey we see the oversexualization of women and the preying on the young/innocent.<br>“It\’s Cash and Jewel and Vardaman and Dewey Dell,” pa says, kind of hangdog and proud too, with his teeth and all, even if he wouldn’t look at us. “Meet Mrs. Bundren,” he says” (Faulkner). This quote is from the end of the book when Addie has been replaced by Anse for a new wife.',
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
            image: './assets/florida_1930.jpg',
            description: '<em>Their Eyes Were Watching God </em> is a book that takes place during the late 1920s and early 1930s, a difficult time period for both African Americans and women. With Jim Crow laws in effect it would have been difficult for African Americans to exercise autonomy in places they weren’t familiar with, as lynchings and kidnappings were happening across the south. The 19th amendment had been passed at least, so even though women had it tough at home they had some constitutional rights.Notable historical events: FDR is elected in 1932 - first of his four elections, FDR promised the American people he would raise the country out of the Great Depression, The Scottsboro boys - A landmark legal battle in the 1930s in which nine Black teenagers were falsely accused of raping two white women, 8 of 9 were sentenced to death until the boys were given a fair trial, and First Lady Eleanor Roosevelt - Eleanor used her influence to advocate for social reform, including civil rights, voting rights for women, and social security.',
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
            image: './assets/eyes_watching_god.jpeg',
            description: '<em>Their Eyes Were Watching God</em> has significant racial themes throughout its entirety diving the deepest out of any book here into race. For starters - Janie\’s grandmother Nanny was a slave. She deeply imprints upon Janie that financial security is incredibly important because when she was a slave she had none so she does not wish the same for Janie. On top of this, <em>Their Eyes Were Watching God</em> has the most interracial interactions out of all the books we read, with white men making Tea Cake bury bodies against his will, an all white male jury giving her the verdict, and even the white women consoling Janie after her court trial.<br>“Ah was born back due un slavery so it wasn\’t for me to fulfill my dreams of what a woman oughta be and to do. Dat\’s one of de hold-backs of slavery. But nothing can\’t stop you from wishin\’ ” (Hurston, 20).',
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
            image: './assets/pear_tree.jpeg',
            description: '<em>Their Eyes Were Watching God</em> also dives heavily into gender relations and expectations - with Janie being considered “frivolous” and having multiple partners throughout the book. She is married to her first husband - Logan Killicks - by her grandmother who is only thinking of financial security. Janie is treated almost like a pack mule by Logan, so when Joe Starks flirts with her she doesn\’t shy away. Eventually she marries Joe, but is treated even worse - she\’s beaten and told to be quiet often and is never sexually satisfied as Joe is impotent. She eventually breaks the norm and berates Joe in public, and he beats her, however he falls ill and eventually dies, leaving Janie feeling free. She eventually meets Tea Cake - a man much younger than her - and begins a relationship with him once again breaking gender norms. They love each other and treat each other great, until eventually Tea Cake gets rabies and their relationship dissolves as he goes insane, until she has to kill him. Janie represents just how difficult it was for women to find a loving non-business marriage, and how women felt as if they had little say in their marriages.<br>“She knew now that marriage did not make love. Janie\’s first dream was dead, so she became a woman” (Hurston, 57).',
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
            description: '<em>The Color Purple</em> is a novel that mostly deals with gender rather than race, however that does not mean that race does not play a part in this book. It takes the discussion of race to a multinational level by having characters visit both Africa and Europe, as well as showing how native Africans viewed Europeans. Since most characters are African American, there is not too many interactions between those of different races, however the impact of race can be felt in terms of class differences, as the White people who are introduced are well off and even British royalty.The most shocking point from the African continent is when the natives refuse to acknowledge any part of slavery, insinuating they likely allowed for it to happen.<br> “She cried when Olivia told how her grandmother had been treated as a slave. No one else in this village wants to hear about slavery, however. They acknowledge no responsibility whatsoever. This is one thing that I definitely do not like” (Walker).',
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
            description: '<em>Salvage The Bones</em> takes place in a time completely different from all of the other books we have read. This book is the only book to take place in the 21st Century. Due to this, there are a lot of social and technological differences in <em>Salvage The Bones</em> that are not seen in any other book. Notable historical events include; the end of Jim Crow, which desegregated the nation 40 years prior, the emergence of internet and cellphones, allowing all people to connect more easily, and Hurricane Katrina, the main focal point surrounding <em>Salvage The Bones</em>.',
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
            image: './assets/dog_cover.jpeg',
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
            image: './assets/stb_medea.jpeg',
            description: 'Gender in <em>Salvage The Bones</em> is also an interesting aspect to examine. Esch is the only girl in her family, however she takes part in a lot of the things her brothers and father do. This can be seen when Esch is running away with her brothers when they are being chased by another dog. When it comes “care” roles, we see an inverse of cultural norms. An example of this is Skeetah looking after his dog China day and night, making sure she is healthy and that the her puppies are taken care of. Both of these instances go to show that gender roles are more fluid in the 21st Century compared to the early 20th Century.<br>“Come on,” Skeet says, and he is moving in front of me, leaving me. I stretch my legs, reach with my heels, to gain ground. The dog rumbles behind me” (Ward, 80).',
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
            description: 'True autonomy is something that people have been fighting for since the dawn of civilization; with people having to overcome gender, race, class, and physical limits all for the right to choose how they can live. The novels we reviewed show just how personal autonomy changed in the Southern United States over time. These novels show just how both women and people of color fought for and secured their autonomy through the breaking of gender norms, speaking up and rejecting false stereotypes, and the conscious decision to leave behind those who only treat them negatively. It is through the dedication and voices of people of color and women that autonomy has not only improved for them, but for everyone.',
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
        
