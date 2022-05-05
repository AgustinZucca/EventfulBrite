"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          hostId: 2,
          categoryId: 1,
          name: "Zydeco Fest",
          description: `The Biggest Zydeco Festival in Texas About this event
        WELCOME TO THE HOME OF THE 2022 HOUSTON ZYDECO FEST
        GET READY TO ATTEND THE BEST ZYDECO FESTIVAL IN THE STATE OF TEXAS. A DAY OF DANCING, EATING AND PARTYING HAS BEEN PLANNED FOR YOU AND YOURS. COME SPEND YOUR DAY WITH THE BEST ZYDECO BANDS IN THE NATION. OUR STAGE WILL BE ROCKING ALL DAY AND YOU WILL BE ON YOUR FEET NON-STOP. MAKE SURE YOU PURCHASE YOUR TICKETS IN ADVANCE AND PREPARE TO HAVE THE TIME OF YOUR LIFE!!!
        FOR VENDOR OPPORTUNITIES EMAIL US AT HOUSTONZYDECOFEST@GMAIL.COM
        
            2022 Houston Zydeco Fest image
        INFORMATION
        Q: Is Seating Available
        A: Yes there is a good amount of places to sit. You may also bring a folding chair or blanket. Tents and coolers are not allowed
        Q: Is there parking available
        A: There is parking in nearby areas. We suggest you carpool and Uber/Lyft to make it less of a hastle for you.
        Q: Are Kids Free
        A: Kids 8 and Under are free
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F269221309%2F198187202752%2F1%2Foriginal.20220419-162526?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C631%2C1500%2C750&s=5b855b1925f35ece1de3f4078d7861f8',
        date: '2023-05-13 15:45:00-05',
        location: 'Houston, Texas',
        capacity: 500,
        },
        {
          hostId: 2,
          categoryId: 2,
          name: "Talk Derby To Me",
          description: `Talk Derby To Me" Kentucky Derby Brunch & Day Party
          About this event
          Break out the Hat's, brunch out, and most importantly bring out the Derby attire! Join us to celebrate Churchill Down's 148th Annual Kentucky Derby!
          
          Enjoy Mint Juleps, live music, D.J. sounds, gift giveaways, Prizes for Best-Dressed Male & Females.
          
          For Brunch reservations visit opentable.com for reservations or text 832-794-0743 for bottle service reservations! All sales are final and no refunds will be issued.
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F268563729%2F122402812643%2F1%2Foriginal.20220418-182214?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C352%2C900%2C450&s=46d337f046ae9458eb4e958b15a0910a',
        date: '2023-01-13 15:45:00-05',
        location: `Chapman And Kirby

        2118 Lamar Street
        
        #Suite 100
        
        Houston, TX 77003
        
        `,
        capacity: 100,
        },
        {
          hostId: 2,
          categoryId: 3,
          name: "Houston Margarita Festival",
          description: `Houston's #1 festival for margarita lovers! Enjoy17+ margarita flavors, food, bands, and DJs outdoors on the lawn in downtown Houston.
          About this event
          ENTERTAINMENT: Music and margarita go hand and hand. So we've assembled a collective of the top bands in Houston that play 80s covers, Latin Salsa, Top 40s, R&B, Motown, and more to make sure the party doesn't stop. Wear your dancinng shoes. See the complee band lineup at www.HoustonMargaritaFest.com
          
          VENDORS: The vendor application with vending fees and other details are located on the festival's website at www.HoustonMargaritaFest.com
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F276157599%2F40067488762%2F1%2Foriginal.20220430-153036?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f3680dc92e5774d122400af98a456ca8',
        date: '2022-11-05 18:00:00-05',
        location: `Water Works Park

        105 Sabine St, Houston, TX
        
        (Downtown)
        
        Houston, TX 77007
        
        `,
        capacity: 300,
        },
        {
          hostId: 2,
          categoryId: 4,
          name: "2022 Houston Food Fest",
          description: `2022 Houston Food Fest
          About this event
          HOUSTON'S PREMIER FOOD FESTIVAL IS SET AND READY TO GO!!
          
          Come to enjoy food from over 70 different food vendors from Houston, Austin, and other surrounding cities. Everything from Tacos to Gumbo to Ice Cream to Vegan Burgers to BBQ will be available for you to snack and munch on!!!
          
          OUTSIDE OF FOOD THERE WILL BE PLENTY OF FUN ACTIVITIES FOR ALL TO ENJOY. OUR MUSICAL LINE-UP WILL BE JUST AS GOOD AS OUR FOOD. Local bands will be rocking our stage all day, so make sure you bring your dancing shoes!! A DAY OF FUN IS WAITING ON YOU. MAKE PLANS TO BE WITH US AND BRING SOME FRIENDS!!!!!
          
          FOR VENDOR INFO PLEASE EMAIL HoustonFoodFest@gmail.com
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F249623719%2F214836812863%2F1%2Foriginal.20210529-001616?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C72%2C960%2C480&s=4ba591038c20de1f4020591c14b62b3c',
        date: '2023-06-01 09:30:00-05',
        location: `Midtown Park

        2811 Travis Street
        
        Houston, TX 77006
        
        `,
        capacity: 5000,
        },
        {
          hostId: 2,
          categoryId: 5,
          name: "DJ Envy's Drive Your Dreams Car Show [HOUSTON]",
          description: `Join DJ Envy in HOUSTON June 19th!!!
          About this event
          FIRST stop of 2022, HOUSTON!!!
          
          One of the biggest Car Shows of the year is coming to HOUSTON!!! Celebrity Cars, Exotic cars, old-school cars, amusement rides, carnival games, monster trucks, and so much more… NASCAR, Jumpees… Family Fun!!!
          
          ***Important message- Please understand we have a NO REFUND policy. Be sure you want to purchase a ticket as an attendee, vendor, or enter your vehicle before purchasing. We have to follow the same policy when dealing with venues, vendors, etc. We appreciate your understanding and look forward to you being apart of DJ Envy's Drive Your Dreams Car Show. Thank you!!***
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F243733939%2F263607565980%2F1%2Foriginal.20220308-233230?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ed5738836f83cf3a1997ff3edc2ed5fd',
        date: '2023-06-19 09:00:00-05',
        location: `NRG Arena

        1 NRG Parkway
        
        Houston, TX 77054
        
        `,
        capacity: 2000,
        },
        {
          hostId: 2,
          categoryId: 6,
          name: "Sazon Latin Food Festival in Austin",
          description: `Free admission, outdoor, family friendly, live DJ and plenty of curated food options from all over Latin America!
          About this event
          Join us for the Sazon Latin Food Festival! A foodie inspired Latin food and entertainment outdoor event taking place at Ani's Day & Night in Austin, TX! 🇵🇷 🇳🇮 🇭🇹 🇲🇽 🇵🇪 🇯🇲 🇨🇺
          
          With curated food options from all over Latin America, we're bringing a variety of amazing foods and entertainment for the whole family 👨🏾‍👩🏾‍👧🏾‍👦🏾
          
          We have food vendors selling dishes from Puerto Rico, Peru, Honduras, Jamaica, Mexico, Nicaragua, and more!
          
          We will be spinning the best music from Latin America and music inspired by Latin rhythms 🔥
          
          RSVP for Free today! See you there 😋
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F245991229%2F7620074735%2F1%2Foriginal.20220122-081710?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=14%2C0%2C1984%2C992&s=b179fb887c74198ac5f039a0dc3225ed',
        date: '2023-06-28 09:00:00-05',
        location: `Ani's Day & Night

        7107 East Riverside Drive
        
        Austin, TX 78741
        
        `,
        capacity: 5000,
        },
        {
          hostId: 2,
          categoryId: 7,
          name: "Drippin Pool Party 2k22",
          description: `Search #DrippinPoolParty on Insta for more pics and videos
          DJ Hella Yella & Special guest DJs (Hip-Hop/R&B)
          
          Hookah + Food
          
          Swimwear Highly suggested but not required
          
          Private Cabanas and Tables available
          
          21+
          
          
          At The Yella Collective we welcome all races, religions, countries of origin, sexual orientations and genders .We pride ourself in providing a fun, entertaining, safe, non-discriminatory environment centered around Hip-Hop music and culture. For more events text Yella to 512.543.2770 for weekly updates and be the 1st to know about discounts & flash sales
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F262905879%2F687518173%2F1%2Foriginal.20220407-214339?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C2106%2C1053&s=0ac6b9bc1210ecc0c761213cf519bf1f',
        date: '2022-08-28 22:00:00-05',
        location: `Rio Nightclub

        601 Rio Grande
        
        Austin, TX 78701
        
        `,
        capacity: 200,
        },
        {
          hostId: 2,
          categoryId: 8,
          name: "2023 Dallas Soul Flower Music Fest",
          description: `The most beautiful event of the year
          About this event
          Welcome to the 2022 Soul Flower Music Fest. This is one of the countries most beautiful events taking place on a very special weekend. Treat your soul to an unforgettable experience at Main Street Garden Park. Soul Flower Music Fest is a one day music Festival featuring National and Local Soul, R&B, Neo Soul and Hip-Hop Artists. In addition to great music, there will be food, games, shopping, contests and great vibes.
          
          FULL MUSIC LINEUP COMING SOON
          
          For Vendor Info Email
          
          Soulflowermusicfest@gmail.com
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F204437499%2F198187202752%2F1%2Foriginal.20210709-205428?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C160%2C960%2C480&s=4cb64271ec1502db567a66998b85fb8f',
        date: '2023-06-20 11:00:00-05',
        location: `Main Street Garden Park

        1902 Main Street
        
        Dallas, TX 75201
        
        `,
        capacity: 10000,
        },
        {
          hostId: 2,
          categoryId: 9,
          name: "Dallas Juneteenth Festival",
          description: `What is the cost for ENTRY

          Entry is FREE with RSVP TICKET Early Bird. But will cost $5-$10 closer to event date
          
          What is the address of the event?
          
          Lofty Spaces 816 Montgomery st Dallas Tx
          
          Where can I contact the organizer?
          
          If you have any questions, contact 832-461-6729
          
          Do I have to bring my printed ticket to the event?
          
          You have the Choice of bringing a Printed Ticket, or bring a scannable ticket from your phone and have it ready at the line with Proper, and Up to Date ID.
          
          What is the refund policy?
          
          Tickets are non-refundable.
          
          Whats The Best Time to Arrive?
          
          Doors Open at 12pm. Definitely arrive early to be on the safe side. 
          
          Can I sell my items and be a vendor at this event?
          Yes, as a registered vendor 
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F208487289%2F264287961642%2F1%2Foriginal.20220106-171151?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C832%2C1080%2C540&s=e56d606c43868e91cccb511a113fc32e',
        date: '2023-06-19 13:00:00-05',
        location: `Lofty Spaces

        816 Montgomery Street
        
        Dallas, TX 75215
        
        `,
        capacity: 2000,
        },
        {
          hostId: 2,
          categoryId: 10,
          name: "Green Velvet & Moon Boots @ Club Space Miami",
          description: `Friday night into Saturday morning on The Terrace.
          About this event
          Automatic refunds can be requested up to 1 day before the start of the event through your Eventbrite account. Any Refund requested after the allowed time frame of 24 hours before the start of the event WILL NOT BE ALLOWED.
          
          From Miami, with love.
          
          21+
          
          Club Space is now cigarette free. We thank you for not smoking cigarettes at Club Space.
          
          👾
          
          *** The novel coronavirus, COVID-19, has been declared a worldwide pandemic by the World Health Organization. COVID-19 is extremely contagious and is believed to spread mainly from person-to-person contact. By entering the venue and/or the event, you (a) acknowledge the contagious nature of COVID-19 and voluntarily assume the risk that you may be exposed to or infected by COVID-19 and that such exposure or infection may result in personal injury, illness, permanent disability, and death, (b) voluntarily agree to assume all of the foregoing risks and accept sole responsibility for any injury, illness, damage, loss, claim, liability, or expenses, of any kind (“Claims”), that you may experience or incur, and (c) hereby release, covenant not to sue, discharge, and hold harmless the venue, event promoter(s), vendor(s), and each of their respective parents, members, partners, affiliates, divisions, subsidiaries, and landlords and their respective officers, directors, and employees from Claims of any kind arising out of or relating thereto. ***
          
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F258312879%2F565816467995%2F1%2Foriginal.20220331-192202?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C120%2C1920%2C960&s=513321f2f8057e59cb07899e03c6b996',
        date: '2023-07-19 23:00:00-05',
        location: `Club Space Miami

        34 NE 11th Street
        
        Terrace
        
        Miami , FL 33132
        
        `,
        capacity: 1000,
        },
        {
          hostId: 2,
          categoryId: 11,
          name: "Best of Haiti Music Fest",
          description: `Join us for this Haitian Flag celebration at the Best of Haiti Music Fest!
          About this event
          Haitian Flag Celebration Day is almost here, which means it's almost time to grab your Haitian flag and head over to Little Haiti for the Best of Haiti Music Festival!
          
          This one-day event will feature a variety of musical acts across that includes an art marketplace, a kid-friendly zone, food trucks with craft cocktails and more. Bring the whole the family along with your dancing shoes!
          
          Performances by GABEL, DROXYANI, BEDJINE & KADILAX, TONY MIX and headliner SWEET MICKY.
          
          ALL TYPES OF VENDORS!
          
          Visit and shop with a variety of vendors at our marketplace selling custom-made jewelry, clothing, arts and more!
          
          BRING THE WHOLE FAMILY!
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F249222229%2F340303929527%2F1%2Foriginal.20220317-033159?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=0468be1d5c14fcf30b3ab0754285b003',
        date: '2023-07-06 23:00:00-05',
        location: `212 NE 59th Terrace

        212 Northeast 59th Terrace
        
        Miami, FL 33137
        
        `,
        capacity: 1000,
        },
        {
          hostId: 2,
          categoryId: 12,
          name: "I FEEL: Prohibition Ball",
          description: `Join us to experience a magical journey as we go back to the 1920s
          About this event
          Here you will find large-scale art installations, visual stimulations, creative costumes, artisan market, fantastic feelings, amazing humans, and good vibes only! ♥
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F270761439%2F189059932991%2F1%2Foriginal.20220421-162429?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C474%2C1298%2C649&s=fdb0b95629b2564c2e287f00ca00e5f8',
        date: '2023-05-06 22:00:00-05',
        location: `I FEEL

        260 Meserole St
        
        Brooklyn, NY 11206212 NE 59th Terrace
        
        `,
        capacity: 1500,
        },
        {
          hostId: 2,
          categoryId: 13,
          name: "Sunday Sqool Comedy",
          description: `The most diverse, talented comedians in NYC come together at this show, and it's topped off w/ an afterparty.
          About this event
          Come see the best up comedians in NYC perform w/ a hot new lineup every week as chosen by Ashley Gavin, best known for her hit podcast "We're Having Gay Sex". The show is always diverse, and always absolute *fire*, as it is hosted by an actual hype man. If the show is sold out, door tickets will be available for 18 dollars at the venue. Masks are required until the current covid surge is over.
          
          Be prepared to show your vaccine card for entry. If you are an Ashley Gavin patreon subscriber looking or a comp or discount, please do not buy a ticket. Contact WHGSPodcast@gmail.com . You will not lose a seat, we promise.

        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144930473%2F51234595122%2F1%2Foriginal.20210818-185920?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C198%2C2100%2C1050&s=a3fb20cb1278bc56549d97d4231bfc04',
        date: '2023-02-06 20:00:00-05',
        location: `Sour Mouse

        110 Delancey Street
        
        New York, NY 10002
        
        `,
        capacity: 200,
        },
        {
          hostId: 2,
          categoryId: 14,
          name: "Cirque Nouveau | Justin Strauss | Veblen Defect",
          description: `House of Yes presents Cirque Nouveau, a dancefloor carnival of curiosities.
          About this event
          Welcome to our carnival of curiosities, filled with freaks and fantasies of every flavor performing acts of magic and mischief to turn on your twisted imagination. Tonight we shine the spotlight on the strange and extravagant inside us all as we become one with the dance floor spectacle.
          
          Step right up. Be a big top boss bitch. Charm the snake. Join the circus.

        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F267009129%2F815473623923%2F1%2Foriginal.20220414-155925?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=77f4f5e41ebe3c2505475a4c07cfe09a',
        date: '2022-12-06 20:00:00-05',
        location: `House of Yes

        2 Wyckoff Avenue
        
        Brooklyn, NY 11237
        
        `,
        capacity: 300,
        },
        {
          hostId: 2,
          categoryId: 15,
          name: "Chocolate Sundaes Comedy @ The Laugh Factory Hollywood - GUEST LIST",
          description: `Often imitated, but never duplicated. Chocolate Sundaes, Hollywood's hottest comedy show, EVERY SUNDAY at the world famous Laugh Factory!
          About this event
          Our show is unlike any other comedy show you've seen, featuring your favorite comedians, a hot DJ on the 1's and 2's, and LA's sexiest crowd.
          
          We showcase a powerful mix of seasoned veterans as well as up-and-coming comedians who you've seen on all of the major networks. Recent performers include Kevin Hart, Bill Burr, Howie Mandel, Deon Cole, Ali Wong, and Tracy Morgan, just to name a few. You never know who may be in attendance in the audience. Recent celebrity sightings include Beyonce, Jay Z, Justin Bieber, J Cole and Tyrese. Come dressed to impress and be a part of one of the best audiences in Hollywood!
          
          This event listing is to RSVP for our complimentary Guest List, which provides a chance for free* entry. 
          
          Although we make every possible attempt, entry on the Guest List is subject to availability and is not guaranteed. We seat on a first come, first serve basis, beginning with VIP/Priority tickets, General Admission tickets, then Guest List. For guaranteed entry, we highly suggest you purchase tickets in advance on the Laugh Factory website.
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F267500409%2F213232851179%2F1%2Foriginal.20220415-141025?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C206%2C1000%2C500&s=ec6cadaa270d3074ed0d39598b31eab7',
        date: '2022-10-06 21:00:00-05',
        location: `Laugh Factory Hollywood

        8001 Sunset Boulevard
        
        Los Angeles, CA 90046
        
        `,
        capacity: 300,
        },
        {
          hostId: 2,
          categoryId: 16,
          name: "Formless Form Exhibition",
          description: ` Join us for Formless Form, our grand opening exhibition in West Hollywood featuring local, national, and international artists on May 14th.
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F262843379%2F327465174971%2F1%2Foriginal.20220407-201005?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C85%2C3300%2C1650&s=9cb18f7e8163babebfca5d181b4b719b',
        date: '2023-09-06 08:00:00-05',
        location: `MASH Gallery

        812 North La Cienega Boulevard
        
        Los Angeles, CA 90069
        
        `,
        capacity: 3000,
        },
        {
          hostId: 2,
          categoryId: 17,
          name: "LA FUNCTION",
          description: ` LA FUNCTION FESTIVAL SUMMER KICK OFF
          About this event
          LA Function Festival
          
          LA Function is a music, art and food festival where we celebrate Los Angeles Culture by Highlighting our DJ's, Musician, Chefs, Creatives & Artist.
          
          We welcome everyone who have LOVE for LA culture to come together for positive vibes for the most amazing event!
          
          Be ready to Function all day to Hip hop, R&B, Afro-beats, Reggaetón, Nostalgic & Deep House.
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F256712559%2F244882679919%2F1%2Foriginal.20220329-181346?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C640&s=8ca2620f0ceea60d71e2e683fd5a1b66',
        date: '2023-09-06 08:00:00-05',
        location: `MASH Gallery

        812 North La Cienega Boulevard
        
        Los Angeles, CA 90069
        
        `,
        capacity: 50000,
        },
        {
          hostId: 2,
          categoryId: 18,
          name: "Saturday Night Reggae Pool Party",
          description: ` 21+ Reggae Sat. Night Pool Party Ft. DJ Kali Madden, MC Tuff Like Iron and DJ Finesse
          About this event
          The Premiere Vegas
          Reggae Night Pool Party!!
          *** SATURDAY MAY 7th ***
          @ The Downtown Grand Pool Deck
          --------------------------------
          SWIMWEAR ENCOURAGED
          --------------------------------
          FOR CABANAS AND TABLES GO TO:
          Cabanas.ReggaeOnTheRoofLV.info
          LAS VEGAS' LONGEST-LASTING AND
          MOST TALKED ABOUT POOL PARTY IS BACK!          
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F268218419%2F312328824040%2F1%2Foriginal.20220417-230056?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1200%2C600&s=435e534a017f1e241ffefb214f5c5873',
        date: '2023-08-06 20:00:00-05',
        location: `Citrus Grand Pool Deck

        206 N. 3rd Street
        
        Las Vegas, NV 89101
        
        `,
        capacity: 500,
        },
        {
          hostId: 2,
          categoryId: 19,
          name: "Title Invitational Boxing Tournament",
          description: ` Las Vegas presents a weekend of amateur boxing and more
          About this event
          Please click the link below:
          2022 Title Invitational Itinerary & Fact Sheet
          For your equipment needs please click below:
          
          https://www.titleboxing.com/                   
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F236470749%2F285353059311%2F1%2Foriginal.20220225-022653?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=51%2C0%2C1218%2C609&s=36580caac9f3f88b7b148a42dca1b7af',
        date: '2023-04-06 20:00:00-05',
        location: `Westgate Las Vegas Resort & Casino

        3000 South Paradise Road
        
        Las Vegas, NV 89109
        
        `,
        capacity: 4000,
        },
        {
          hostId: 2,
          categoryId: 20,
          name: "Battle of the Decades : 60s 70s 80s 90s Dance Party",
          description: ` If you know you know.... SF's most popular Friday happy hour... DJ's, Dancing, Nostalgia, and drink prices too good to be true. Oh its true.
          About this event
          Every Friday Fly down memory lane while sipping on the happiest drink prices in SF! The earlier you get there, the cheaper the drinks. 
          
          5-6 pm: $1 drinks  '60s music
          6-7 pm: $2 drinks  '70s music
          7-8 pm: $3 drinks  '80s music
          8-9 pm: $4 drinks  '90s music
          9-10pm: $5 drinks - 00's music
          10-11pm:$6 Premium Cocktails - 2010's music
          11pm-2am Current Hits
          Come experience some musical nostalgia with your best friends...
          
          Booth Reservations: Battle of the Decades is perfect for team outings, company happy hours, birthdays or any special occasion. If you will be arriving with a group of 10 or more you can qualify for a booth reservation. Submit your inquiry on our table reservations page at www.monroesf.com/table-reservations
          
          Drinks included in happy hour pricing: Well cocktails with Rum, Vodka, Tequila, Whiskey, Gin, and Beers like PBR, Rolling Rock, Miller High Life and Bud Light.           
          
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F139244673%2F194256260433%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C335%2C1080%2C540&s=8223c229c50a3897831bcd389cc2893c',
        date: '2023-07-30 21:00:00-05',
        location: `Monroe

        473 Broadway
        
        San Francisco, CA 94133-4513
        
        `,
        capacity: 500,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Events", null, {});
  },
};
