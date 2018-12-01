// https://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/

const descript = {
    'lake': [{ content: "Its a lake you dingus too bad you dont have a fishing rod."}],
    'grassyyy': [{ content: "simple grass. grass one"}],
    'high_grass':[{ content: "high grass. There may be a pokemon in here! Hit 'S' to check!"}],
    'wall' :[{ content:  'The forest is too thick to move past.'}],
    'ledge': [{ content: 'mother fuggin ledgeasdasdsad'}],
    'flower': [{ content: "flowersssssss"} , { content: "yasss"}],
    'ladder': [{ content: "ladder to a new place. "}, {content: "Wait..."}, {content: "Why the FUCK is there a ladder in the middle of the grass...?"}, {content: "Leading to nowhere? Press 'E' to travel"}],
    'house': [{ content: "its a house.... Dumbass"}],
    "prof_sign" :  [{ content: "Professor Sneezewort's House:" + '<br>' + " You want a Poke'dum, dum dum? " + '<br>' + " I will give you free Poke'Dum" + '<br><b>' + "only if you pay in whiskey" + '</b>'}, {content: 'or malort.'}],
    "prof_door" : [{ content: "Press 'E' to enter home."}],
    "floor1" : [{ content: "It's a slippery gross floor"}, { content: "nothing special here"}],
    "exit" : [{ content: "exit by pressing 'e'"}, { content: "nothing special here"}],

    


}

const choice = {}


const events = {
    // store data for events. front handles dom stuff with this
    eventTypes: { chat: () => {}, battle: () => {}},
    sneeze_choice: {
        scripts: [ 
            { content: 'hey trainer', choice_flag: false, choice: null },
            { content: "Choose a Poke'Der",  choice_flag: true, choice: { content: ['pickachub', 'lickabub','jiggypoof']}}
        ]
    }
}

const b_t = {

}

const cT = {
    'PS': {
        name: "Professor Sneeze",
        value: 'professor_sneeze',
        x: 7,
        y: 3,
        default_scripts : [{ content: 'hey trainer', choice_flag: false, choice: null }, { content: 'Welcome to POOP TOWN', choice_flag: false, choice: null }],
        event : {state: false, eventName: events.sneeze_choice },
        starting_coordinates: { char: { x: 7, y: 3}},
        path: 'assets/characters/professor/professor_down'
    }
}

const t =  {
    09: { val: '2', pass: false, event: null, transport: null, static_desc: descript.grassyyy,  sub_dir: 'grass'},
    01 : { val: 'grass1', pass: true, event: null, transport: null, static_desc: descript.grassyyy, sub_dir: 'grass'},
    02 : { val: 'grass2', pass: true, event: null, transport: null, static_desc: descript.grassyyy,  sub_dir: 'grass'},
    03: { val: 'grass3', pass: true, event: null, transport: null, static_desc: descript.grassyyy,  sub_dir: 'grass'},
    04 : { val: 'grass4', pass: true, event: null, transport: null, static_desc: descript.grassyyy,  sub_dir: 'grass'},

     ///////// /* starting world to ladder */ 
    '^' : { val: 'gladder1', pass: false, event: false, transport: false, static_desc: descript.ladder,  static_desc: descript.ladder, sub_dir: 'grass'},
    'ˆ' : { val: 'gladder2', pass: false, event: false, transport: true, static_desc: descript.ladder,  new_world : 'ladder',  static_desc: descript.ladder, sub_dir: 'grass', starting_coordinates: { char : { x: 13, y: 5}, world : { x: -120, y: 20}}},

     ///////// /* LADDER to starting world*/ 
    '#' : { val: 'gladder1', pass: false, event: false, transport: false, static_desc: descript.ladder,  static_desc: descript.ladder, sub_dir: 'grass'},
    '$' : { val: 'gladder2', pass: false, event: false, transport: true, static_desc: descript.ladder,  new_world : 'starting_area',  static_desc: descript.ladder, sub_dir: 'grass',starting_coordinates: { char : { x: 12, y: 6}, world : { x: -100, y: 0}}},
    
    // HIGH GRASS AND FLOWERS
    07 : { val: 'bas_flower', pass: true, event: null, transport: null, static_desc: descript.flower, sub_dir: 'grass'},
    08 : { val: 'Hgrass',  uniC: 'over', event: true,  pass: true, static_desc: descript.high_grass, overlap: true, sub_dir: 'grass'},

    'ø' : { val: 'grey', pass: true, event: null, transport: null, pass : false, static_desc: descript.wall, sub_dir: 'grass'}, // black
    'ø1' : { val: 'trees_TR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, // trees top
    'ø2' : { val: 'trees_MR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, // trees middle
    'ø3' : { val: 'trees_BR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
    'ø4' : { val: 'trees_TL', pass: false, event: null, transport: null, pass : false, static_desc: descript.wall, sub_dir: 'grass'}, //
    'ø5' : { val: 'trees_ML', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
    'ø6' : { val: 'trees_BL', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //

    'ø7' : { val: 'tre_TR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, // trees top
    'ø8' : { val: 'tre_MR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, // trees middle
    'ø9' : { val: 'tre_BR', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
    '_0' : { val: 'tre_TL', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
    '_1' : { val: 'tre_ML', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
    '_2' : { val: 'tre_BL', pass: false, event: null, transport: null, static_desc: descript.wall, sub_dir: 'grass'}, //
// PROFESSOR SNEEZE'S HOUSE 
    'H1' : { val: 'prof_house_TipR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H2' : { val: 'prof_house_TipMR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H3' : { val: 'prof_house_TipML', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H4' : { val: 'prof_house_TipL', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H5' : { val: 'prof_house_TR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H6' : { val: 'prof_house_TMR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H7' : { val: 'prof_house_TML', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H8' : { val: 'prof_house_TL', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H9' : { val: 'prof_house_MR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H10' : { val: 'prof_house_MMR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H11' : { val: 'prof_house_MML', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H12' : { val: 'prof_house_ML', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H13' : { val: 'prof_house_BR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H14' : { val: 'prof_house_BMR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H15' : { val: 'prof_house_BML', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H16' : { val: 'prof_house_BL', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H17' : { val: 'prof_house_VBR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    'H18' : { val: 'prof_house_VBMR', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
   /* sneeze to outside */ 
   'H19' : { val: 'prof_house_VBML', pass: false, event: null, transport: null, transport: true, new_world : 'professor_sneeze', static_desc: descript.prof_door, sub_dir: 'homes/prof', starting_coordinates: { char : { x: 7, y: 13}, world : { x: 0, y: -140}},}, 

    'H20' : { val: 'prof_house_VBL', pass: false, event: null, transport: null, static_desc: descript.house, sub_dir: 'homes/prof'}, //
    's1' : { val: 'prof_sign', pass: false, event: null, transport: null,  static_desc: descript.prof_sign, sub_dir: 'homes/prof'}, //

    // FLOORS
    99 : { val: 'floor1', pass: true, event: null, transport: null,  static_desc: descript.floor, sub_dir: 'interior'}, //
    '9*' : { val: 'floor1_xBl', pass: false, event: null,  transport: true,   static_desc: descript.floor, sub_dir: 'interior', static_desc: descript.exit, new_world : 'starting_area', starting_coordinates:  { char : { x: 23, y: 7}, world : { x: -320, y: -20}} }, //
    '9$' : { val: 'floor1_xBr', pass: false, event: null,  transport: true,   static_desc: descript.floor, sub_dir: 'interior', static_desc: descript.exit, new_world : 'starting_area', starting_coordinates: { char : { x: 23, y: 7}, world : { x: -320, y: -20}}}, //

    10 : { val: 'lake_B', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    11 : { val: 'lake_BL', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    12 : { val: 'lake_BR', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    13 : { val: 'lake_L', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    14 : { val: 'lake_BL', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    15 : { val: 'lake_M', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    16 : { val: 'lake_R', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    17 : { val: 'lake_T', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    18 : { val: 'lake_TL', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    19 : { val: 'lake_TR', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    20 : { val: 'lake_BL', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    21 : { val: 'lake_BR', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    22 : { val: 'lake_M', pass: false, event: null, transport: null, static_desc: descript.lake, sub_dir: 'grass'},
    23 : { val: 'ledge_BL', pass: true, event: null, transport: null, static_desc: descript.ledge, sub_dir: 'grass'},
    24 : { val: 'ledge_BR', pass: true, event: null, transport: null, static_desc: descript.ledge, sub_dir: 'grass'},
    25 : { val: 'ledge_L', pass: true, event: null, transport: null, static_desc: descript.ledge, sub_dir: 'grass'},
    26 : { val: 'ledge_M', pass: true, event: null, transport: null, static_desc: descript.ledge, sub_dir: 'grass'},
    27 : { val: 'ledge_R', pass: true, event: null, transport: null, static_desc: descript.ledge, sub_dir: 'grass'},
  


}
//remember that when a character enters a room the spawning area has to have coordinates stored and the game itself positioned relative to character to have cam centered!

//worlds obj should be imported via module
var worlds ={
    starting_area: {
        info: { name: 'Poop Town',  description: 'The pile of shit you came from.'},
        stored_chars : {
            'Mummy' : {
                base_scripts: [''],
                x: 2,
                y: 2,
                object:  'potion'  
            }
        },
        t: [  
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],  t['ø5'],t['ø2'],t['ø5'],t['ø2'],],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],  t['ø4'],t['ø1'],t['ø4'],t['ø1'],],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['H4'],t['H3'],t['H2'],t['H1'],  t['ø5'],t['ø2'],t['ø5'],t['ø2']],

        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'], t[03], t[04], t[03], t[04], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['H8'], t['H7'], t['H6'], t['H5'],                    t['ø6'],t['ø3'],t['ø6'],t['ø3'] ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[02], t[03], t[03], t[04], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['H12'], t['H11'], t['H10'], t['H9'],                    t['ø5'],t['ø2'],t['ø5'],t['ø2']],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'], t[03], t[02], t[03], t[07], t[04], t[01], t[01], t[01], t[01],t['^'], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['H16'], t['H15'], t['H14'], t['H13'],                    t['ø4'],t['ø1'],t['ø4'],t['ø1']],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[02], t[03], t[04], t[03], t[04], t[01], t[01], t[01], t[01],t['ˆ'], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['s1'], t['H20'], t['H19'], t['H18'], t['H17'],                    t['ø5'],t['ø2'],t['ø5'],t['ø2']],
        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'], t[03], t[02], t[01], t[07], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø6'],t['ø3'],t['ø6'],t['ø3']],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[26], t[26], t[26], t[01], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø5'],t['ø2'],t['ø5'],t['ø2'],   ],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'], t[03], t[01], t[04], t[01], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø4'],t['ø1'],t['ø4'],t['ø1'],  ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[08], t[08], t[01], t[08], t[08], t[08], t[01], t[18], t[17], t[17], t[17], t[19], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø5'],t['ø2'],t['ø5'],t['ø2'],   ],
        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t[01], t[01], t[01],  t[04], t[03],t[01], t[01], t[01], t[01], t[01],                    t['ø6'],t['ø3'],t['ø6'],t['ø3'],   ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø5'],t['ø2'],t['ø5'],t['ø2'],  ],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t[01],                    t['ø4'],t['ø1'],t['ø4'],t['ø1'],   ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16],  t[01], t[01], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01],                    t['ø5'],t['ø2'], t['ø5'],t['ø2'],   ],
        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16],  t[01], t[01], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01],                    t['ø6'],t['ø3'],t['ø6'],t['ø3'], ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'], t[08], t[08], t[08], t[08], t[08], t[08], t[08], t[20], t[22], t[22], t[22], t[12],  t[04], t[03], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01],                    t['ø5'],t['ø2'],t['ø5'],t['ø2'], ],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t[04], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01],t[04],            t['ø4'],t['ø1'],t['ø4'],t['ø1'],  ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t[04], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01], t[04],           t['ø5'],t['ø2'],t['ø5'],t['ø2'],],
        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t[04], t[01], t[01], t[01],t[01], t[01], t[01], t[01], t[01],t[04],            t['ø6'],t['ø3'],t['ø6'],t['ø3'], ],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03],                      t['ø5'],t['ø2'],t['ø5'],t['ø2']],
        [ t['ø6'],t['ø3'],t['ø6'],t['ø3'],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03],                      t['ø4'],t['ø1'],t['ø4'],t['ø1']],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03],t[03], t[02], t[03], t[03], t[02], t[03], t[03], t[02], t[03], t[03],                      t['ø5'],t['ø2'],t['ø5'],t['ø2']],
        [ t['ø4'],t['ø1'],t['ø4'],t['ø1'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['_0'],t['ø7'],t['ø4'],t['ø1'],t['ø4'],t['ø1'],],
        [ t['ø5'],t['ø2'],t['ø5'],t['ø2'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['_1'],t['ø8'],t['ø5'],t['ø2'],t['ø5'],t['ø2'],],
        [ t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],t['_2'],t['ø9'],]
    ],
    audio : 'assets/audio/pallet_town_fheme.mp3',
    starting_coordinates: { char : { x: 7, y: 6}, world : { x: 0, y: 0}}, // char is tile value, world is in pixels
 // #gameContainer and the margin left and top to start at to make sure coordinates are centered.
},
    ladder : {
        t: [
        [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'] ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[03], t[04], t[03], t[04], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['ø'] ,  ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[02], t[03], t[03], t[04], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['ø'] , ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[03], t[02], t[03], t[07], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['ø'] ,  ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[02], t[03], t[10], t[03], t[04], t[01], t[01], t[01], t[10], t[08],t['#'], t[01], t['ø'] ,  ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[03], t[02], t[01], t[07], t[04], t[01], t[01], t[01], t[01], t[01],t['$'], t[01], t['ø'] , ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[26], t[26], t[26], t[01], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['ø'] ,  ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[03], t[01], t[04], t[01], t[04], t[01], t[01], t[01], t[01], t[01], t[01], t[01], t['ø'] , ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[08], t[08], t[01], t[20], t[08], t[08], t[01], t[18], t[17], t[17], t[17], t[19], t['ø']    ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t['ø']   ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t['ø']  ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[20], t['ø']   ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[02], t[08], t[08], t[08], t[08], t[08], t[01], t[13], t[22], t[22], t[22], t[16], t['ø']   ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t[08], t[08], t[08], t[08], t[08], t[08], t[01], t[20], t[10], t[10], t[10], t[12], t['ø'] ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'] ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'] ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'] ],
        [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'] ],
    ],
    audio : 'assets/audio/road_to_viridian_city_leaving.mp3',

    starting_coordinates: t['ˆ'].starting_coordinates, // char is tile value, world is in pixels
 },
 professor_sneeze : {
    t: [
    [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'],  ],
    [ t['ø'],t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] ,  ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] , ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] ,  ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] ,  ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] , ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] ,  ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] , ],
    [ t['ø'], t[08], t[08], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø']    ],
    [ t['ø'], t[08], t[08], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø']   ],
    [ t['ø'], t[08], t[08], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø']  ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø']   ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø']   ],
    [ t['ø'], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t[99], t['ø'] ],
    [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['9*'], t['9$'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'],  ],
    [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], ],
    [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], ],
    [ t['ø'],t['ø'],t['ø'],t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], t['ø'], ],
],
characters: [{ char: cT['PS'], starting_coordinates: cT['PS'].starting_coordinates }],
starting_coordinates:  t['H19'].starting_coordinates  // from sneeze tile to outside // char is tile value, world is in pixels
// the tile in front of characters starting point should be assigned to the currentWorlds starting point
}
}
function audioHandler() {
    console.log('made it');
}




module.exports
= {
    descript,
    t,
    worlds,
    audioHandler,
}