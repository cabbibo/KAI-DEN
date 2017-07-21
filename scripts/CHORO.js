var CHORO = [

/*
      ["v_on"           , 0  , 0   ],
      ["v_bg"           , 0  , 0   ],
      ["v_suckDisform"  , 0  , 0   ],
      ["v_audioDisform" , 0  , 0   ],
      ["v_texture"      , 0  , 0   ],
      ["v_project"      , 0  , 0   ],
      ["v_refract"      , 0  , 0   ],
      ["v_rainbow"      , 0  , 0   ],
      ["v_audioMix"     , 0  , 0   ],
      ["v_rimAudio"     , 0  , 0   ],
      ["v_aoAudio"      , 0  , 0   ],
      ["v_endNoise"     , 0  , 0   ]


*/

   {
    name:"Fade In",
    startTime:0,
    endTime:9.88,
    events:[
      ["v_on"           , 0   , 1     ],
      ["v_bg"           , 0   , 0     ],
      ["v_suckDisform"  , 0   , 0  ],
      ["v_audioDisform" ,0  , 0    ],
      ["v_texture"      , 0   , 0     ],
      ["v_project"      , 0   , 1   ],
      ["v_refract"      , 0  , 0    ],
      ["v_rainbow"      , 0   , 0    ],
      ["v_audioMix"     , 0   , 0     ],
      ["v_rimAudio"     , 0   , 0     ],
      ["v_aoAudio"      , 0   , 0     ],
      ["v_endNoise"     , 0   , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],
      ["v_fullProject"     , 1     , 1     ],

      ["v_closeLine"     , 400     , 400     ],
      
      ["c_x" , 0,0],
      ["c_y" , 0,0],
      ["c_z" , 7,5],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
      
    ] 
  }, 
  



  /*{
    name:"Beats Start",
    startTime:14,
    endTime:15,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.05  , 0.1  ],
      ["v_audioDisform" , .4    , 0.6  ],
      ["v_texture"      , 0     , 0.5   ],
      ["v_project"      , 0.1   , 0.0   ],
      ["v_refract"      , 1     , .0     ],
      ["v_rainbow"      , 1     , .3     ],
      ["v_audioMix"     , 0     , 1     ],
      ["v_rimAudio"     , 0     , 1     ],
      ["v_aoAudio"      , 0     , 1     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ],
      
      ["v_closeLine"     , 4     , 4     ],

      ["c_x" , 0,0],
      ["c_y" , 0,0],
      ["c_z" , 2,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],

    ] 
  },

   {
    name:"Normal Start",
    startTime:19.00,
    endTime:19.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 1     ],
      ["v_suckDisform"  , 0.1   , 0.01  ],
      ["v_audioDisform" , 0.6   , .01  ],
      ["v_texture"      , 0     , 0.5   ],
      ["v_project"      , 0.0   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .3     , 0     ],
      ["v_audioMix"     , 1      , 0     ],
      ["v_rimAudio"     , 1     , 0     ],
      ["v_aoAudio"      , 1     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 1     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 0,1],
      ["c_y" , 0,0],
      ["c_z" , 4,2],


      ["t_x" , 0,1],
      ["t_y" , 0,0],
      ["t_z" , 0,0],    
    ] 
  }, 

  {
    name:"switchNorm1",
    startTime:24.20,
    endTime:24.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , .01   , 0.01  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 1,0],
      ["c_y" , 0,1],
      ["c_z" , 2,1.5],


      ["t_x" , 1,0],
      ["t_y" , 0,1],
      ["t_z" , 0,0],    
    ] 
  }, 

  {
    name:"switchNorm2",
    startTime:29.40,
    endTime:29.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , 0.01   , .6 ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 0,-1],
      ["c_y" , 1,1],
      ["c_z" , 1.5,2],


      ["t_x" , 0,-1],
      ["t_y" , 1,1],
      ["t_z" , 0,0],    
    ] 
  }, 

  {
    name:"switchNorm3",
    startTime:34.2,
    endTime:34.4,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.2  ],
      ["v_audioDisform" , 0.6   , 0.01  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , -1,2],
      ["c_y" , 1,0],
      ["c_z" , 2,3],


      ["t_x" , -1,2],
      ["t_y" , 1,-1],
      ["t_z" , 0,0],    
    ] 
  }, 

   {
    name:"switchNorm3",
    startTime:34.2,
    endTime:34.8,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.2   , 0.01  ],
      ["v_audioDisform" , 0.01   , 0.6  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 2,0],
      ["c_y" , 0,0],
      ["c_z" , 3,5],


      ["t_x" , 2,0],
      ["t_y" , -1,-1],
      ["t_z" , 0,0],    
    ] 
  }, 

   {
    name:"switchNorm4",
    startTime:38.5,
    endTime:39.2,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , 0.6   , 0.01  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 0,1],
      ["c_y" , 0,1],
      ["c_z" , 5,2],


      ["t_x" , 0,1],
      ["t_y" , -1,1],
      ["t_z" , 0,0],   
    ] 
  }, 

   {
    name:"switchNorm5",
    startTime:44.2,
    endTime:44.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , 0.01   , 0.01  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" , 1,1],
      ["c_y" , 1,-1],
      ["c_z" , 2,2],


      ["t_x" , 1,1],
      ["t_y" , 1,-1],
      ["t_z" , 0,0],    
    ] 
  },

  {
    name:"switchNorm6",
    startTime:48.2,
    endTime:49,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , 0.01   , 2  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 0      , 1     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 

      ["v_closeLine"     , 4     , 200     ],
      ["c_x" , 1,-1],
      ["c_y" , -1,-1],
      ["c_z" , 2,2],


      ["t_x" , 1,-1],
      ["t_y" , -1,-1],
      ["t_z" , 0,0],    
    ] 
  }, 

  {
    name:"switchNorm7",
    startTime:53,
    endTime:54,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01   , 0.01  ],
      ["v_audioDisform" , 2  , 0.01  ],
      ["v_texture"      , 0.5   , 0.5   ],
      ["v_project"      , 0.8   , 0.8   ],
      ["v_refract"      , 0.0    , 0     ],
      ["v_rainbow"      , .0     , 0     ],
      ["v_audioMix"     , 1      , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ], 
      ["v_closeLine"     , 200     , 20     ],
       ["c_x" , -1,-1],
      ["c_y" , -1,-1],
      ["c_z" , 2,6],


      ["t_x" , -1,-1],
      ["t_y" , -1,-1],
      ["t_z" , 0,0],    
    ] 
  }, 
 


  {
    name:"Normal Percolate up",
    startTime:58,
    endTime:59,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01  , 0.01  ],
      ["v_audioDisform" , 0.01  , 0.00  ],
      ["v_texture"      , 0.5   , 0.8   ],
      ["v_project"      , 0.8   , 0.5   ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20     , 4     ],
      ["c_x" , -1,0],
      ["c_y" , -1,3],
      ["c_z" , 6,8],


      ["t_x" , -1,-1],
      ["t_y" , -1,-1],
      ["t_z" , 0,0], 
    ] 
  },

  {
    name:"Rise To First Climax",
    startTime:78,
    endTime:92.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01  , 0.01  ],
      ["v_audioDisform" , 0.00  , 0.02  ],
      ["v_texture"      , 0.8   , 0.2   ],
      ["v_project"      , 0.5   , 1.0   ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,3,0],
      ["c_z" ,8,20],


      ["t_x" , -1,0],
      ["t_y" , -1,0],
      ["t_z" , 0,0], 
     
    ] 
  },

  {
    name:"First Climax",
    startTime:92.5,
    endTime:93,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.01  , 0.03  ],
      ["v_audioDisform" , 0.02  , 0.04  ],
      ["v_texture"      , 0.2   , 1     ],
      ["v_project"      , 1.0   , 0.0   ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,40],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
    ] 
    
  },


  /////////////////////////////////////////////

  {
    name:"First Fade",
    startTime:97.4,
    endTime:99,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 0     ],
      ["v_suckDisform"  , 0.03  , 0.00  ],
      ["v_audioDisform" , 0.04  , 0.00  ],
      ["v_texture"      , 1     , .2    ],
      ["v_project"      , 0.0   , 0.0   ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 1     ],
      ["v_audioMix"     , 0     , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 8     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,40,60],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
    ] 
  },


  {
    name:"Second section Grow",
    startTime:99,
    endTime:107.8,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , .1     ],
      ["v_suckDisform"  , 0.00  , 2   ],
      ["v_audioDisform" , 0.04  , 0.1   ],
      ["v_texture"      , .2    , .8    ],
      ["v_project"      , 0.0   , 0.0   ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 1     , .8     ],
      ["v_audioMix"     , 0     , 0     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],


      ["v_closeLine"     , 8     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,60,30],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
    ]  
  },
  {
    name:"Second section Beats Back in",
    startTime:107.8,
    endTime:108,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , .1     , 0     ],
      ["v_suckDisform"  , 2   , 0.2   ],
      ["v_audioDisform" , 0.1   , .2   ],
      ["v_texture"      , .8    , .5    ],
      ["v_project"      , 0.0   , 1     ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , .8    , 1     ],
      ["v_audioMix"     , 0     , 1     ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,30,40],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
      
    ] 
  },

  {
    name:"Fade up to second section ",
    startTime:108,
    endTime:112.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.2   , 0.1   ],
      ["v_audioDisform" , .2   , 0.1   ],
      ["v_texture"      , .5    , .8    ],
      ["v_project"      , 1.    , .6    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 1     , 0    ],
      ["v_audioMix"     , 1     , 0    ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,40,60],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
      
    ] 
  },

  {
    name:"second section fanfare ",
    startTime:112.5,
    endTime:113,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , .3     ],
      ["v_suckDisform"  , 0.2   , 0.1   ],
      ["v_audioDisform" , .1   , 10.1   ],
      ["v_texture"      , .8    , .8    ],
      ["v_project"      , .6    , .6    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0    ],
      ["v_audioMix"     , 0     , 10    ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,60,20],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
      
    ] 
  },

  {
    name:"Second Section start",
    startTime:116.6,
    endTime:117.6,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , .3     , 1     ],
      ["v_suckDisform"  , 0.1   , 0.2   ],
      ["v_audioDisform" , 10.1   , 0.2   ],
      ["v_texture"      , .8    , .5    ],
      ["v_project"      , .6    , 1    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0    , 0     ],
      ["v_audioMix"     , 10   , 0.7   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 20     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
      
    ]
  },

  {
    name:"section2Switch1",
    startTime:122.,
    endTime:123,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.2   , 0.2   ],
      ["v_audioDisform" , .2   , 0.2   ],
      ["v_texture"      , .5    , .5    ],
      ["v_project"      , 1    , 1    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0    , 0     ],
      ["v_audioMix"     , .7   , 0.7   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20     , 4     ],

      ["c_x" ,0,2],
      ["c_y" ,0,2],
      ["c_z" ,4,4],


      ["t_x" , 0,1],
      ["t_y" , 0,1],
      ["t_z" , 0,0], 
      
    ]
  },


  {
    name:"section2Switch2",
    startTime:127.,
    endTime:127.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.2   , 0.2   ],
      ["v_audioDisform" , .2   , 0.2   ],
      ["v_texture"      , .5    , .5    ],
      ["v_project"      , 1    , 1    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0    , 0     ],
      ["v_audioMix"     , .7   , 0.7   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],
      ["c_x" ,2,2],
      ["c_y" ,2,2],
      ["c_z" ,4,4],


      ["t_x" , 1,-2],
      ["t_y" , 1,-2],
      ["t_z" , 0,0], 
      
    ]
  },


    {
    name:"section2Switch3",
    startTime:132.,
    endTime:133,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.2   , 0.2   ],
      ["v_audioDisform" , .2   , 0.2   ],
      ["v_texture"      , .5    , .5    ],
      ["v_project"      , 1    , 1    ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0    , 0     ],
      ["v_audioMix"     , .7   , 0.2   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,2,-2],
      ["c_y" ,2,2],
      ["c_z" ,4,4],


      ["t_x" , -2,-2],
      ["t_y" , -2,0],
      ["t_z" , 0,0], 
      
    ]
  },

  {
    name:"Second Section percolate up",
    startTime:135.5,
    endTime:137,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.1   , 0.2   ],
      ["v_audioDisform" , 0.1   , 0.8   ],
      ["v_texture"      , .5    , .2    ],
      ["v_project"      , 1     , 1      ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0.2   , 1.5   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],


      ["c_x" ,-2,-2],
      ["c_y" ,2,2],
      ["c_z" ,4,10],


      ["t_x" , -2,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
    ]
  },

  {
    name:"afterPerkSwitch",
    startTime:146.5,
    endTime:147,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.1   , 0.2   ],
      ["v_audioDisform" , 0.8   , 2.2   ],
      ["v_texture"      , .2    , .5    ],
      ["v_project"      , 1     , 1      ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 1.5   , 1.5   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"  , 0     , 0     ],

      ["v_closeLine"     , 4    , 4     ],

      ["c_x" ,-2,-2],
      ["c_y" ,2,2],
      ["c_z" ,10,3],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
     
    ]
  },

  {
    name:"Second Section lead to end",
    startTime:154.5,
    endTime:156.8,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , 0.2   , 0.1   ],
      ["v_audioDisform" , 2.2   , 0.3   ],
      ["v_texture"      , .5    , 1    ],
      ["v_project"      , 1     , .2      ],
      ["v_refract"      , 0     , 0     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 1.5   , 0.2   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,-2,0],
      ["c_y" ,2,0],
      ["c_z" ,3,3],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
      
    ]
  },


/////////////////////////////////////////////


  {
    name:"Fade To Cave",
    startTime:174.8,
    endTime:176.42,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 1     , 0     ],
      ["v_suckDisform"  , 0.2   , 0.0   ],
      ["v_audioDisform" , 0.3   , 0.0   ],
      ["v_texture"      , 1     , 0     ],
      ["v_project"      , .2    , 0     ],
      ["v_refract"      , 0     , .5     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0.2   , 0.0   ],
      ["v_rimAudio"     , 0     , 0     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,3,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },

  {
    name:"Cave Fade To Beats",
    startTime:176.42,
    endTime:196,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.0   , 0.01   ],
      ["v_audioDisform" , 0.0   , 0.01   ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0.5   , .8     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0.0   ],
      ["v_rimAudio"     , 0     , 0.1   ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4    ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,3,20],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },

   {
    name:"Cave Beats in ",
    startTime:196,
    endTime:196.1,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.01  , 0.01   ],
      ["v_audioDisform" , 0.01  , 0.1  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , .8    , 1     ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0.0   ],
      ["v_rimAudio"     , 0.1   , 0.6   ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 4    ],
      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,3],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },
  {
    name:"Cave Death",
    startTime:214.5,
    endTime:215.5,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.01  , 0.01   ],
      ["v_audioDisform" , 0.04  , 0.01  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 1     , .3    ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0.0   ],
      ["v_rimAudio"     , 0.6   , 1     ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 4     , 8    ],
      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,3,40],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },*/



/////////////////////////////////////////////



  /*{
    name:"Cave Fade Out",
    startTime:215.5,
    endTime:226,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.01  , 0.00  ],
      ["v_audioDisform" , 0.01  , 0.00  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , .3    , 0.1   ],
      ["v_rainbow"      , 0     , 0     ],
      ["v_audioMix"     , 0     , 0.0   ],
      ["v_rimAudio"     , 1     , .2    ],
      ["v_aoAudio"      , 0     , 0     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 8     , 20    ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,40,10],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },*/


  {
    name:"Rainbow fade to first vocal",
    startTime:226,
    endTime:233.1,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.00  , 0.00  ],
      ["v_audioDisform" , 0.00  , 0.00  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , .1    , 0    ],
      ["v_rainbow"      , 0     , .5     ],
      ["v_audioMix"     , 0     , 0.2   ],
      ["v_rimAudio"     , .2    , .1    ],
      ["v_aoAudio"      , 0     , 0.1     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 2000      , 2000     ],

      ["v_fullProject"     , 1     , 0     ],


      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,4,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },

  {
    name:"Rainbow fade to first vocal",
    startTime:226,
    endTime:233.1,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.00  , 0.00  ],
      ["v_audioDisform" , 0.00  , 0.00  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , .1    , 0    ],
      ["v_rainbow"      , 0     , .5     ],
      ["v_audioMix"     , 0     , 0.2   ],
      ["v_rimAudio"     , .2    , .1    ],
      ["v_aoAudio"      , 0     , 0.1     ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20      , 20     ],

      ["v_fullProject"     , 0    , 0     ],


      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,10,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0], 
    ] 
  },

  {
    name:"RAINBOW BUILD",
    startTime:233.1,
    endTime:272.9,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.00  , 0.1  ],
      ["v_audioDisform" , 0.00  , 0.8  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , .5    , 1    ],
      ["v_audioMix"     , 0     , 0.7  ],
      ["v_rimAudio"     , .1    , .3    ],
      ["v_aoAudio"      , 0.1    , 0.3    ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20      , 20     ],
      ["v_fullProject"     , 0    , 0     ],
      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,4,8],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },

  {
    name:"RAINBOW intro to 2nd Build",
    startTime:272.9,
    endTime:276.6,
    events:[
     // ["v_audioDisform",0.1,.0],
      //["v_rimAudio", 1, 0],
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.1  , 0.01  ],
      ["v_audioDisform" , 0.8  , 1.  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 1   , .6    ],
      ["v_audioMix"     , 0.7     , 1  ],
      ["v_rimAudio"     , .3    , .5    ],
      ["v_aoAudio"      , 0.3    , 0.1   ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

       ["v_closeLine"     , 20      , 20     ],
       ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,8,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },
  {
    name:"RAINBOW 2nd Build",
    startTime:276.6,
    endTime:291.3,
    events:[
     // ["v_audioDisform",0.1,.0],
      //["v_rimAudio", 1, 0],
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.01  , 0.1  ],
      ["v_audioDisform" , 1  , 2  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , .6   , .8    ],
      ["v_audioMix"     ,  1     , .5 ],
      ["v_rimAudio"     , .5    , .1    ],
      ["v_aoAudio"      , .1    , 0.4   ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20      , 20     ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,4,20],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },

  {
    name:"RAINBOW finalVuild",
    startTime:291.3,
    endTime:302.3,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.1  , 0.4  ],
      ["v_audioDisform" , 2  , 4  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , .8   , 1.1    ],
      ["v_audioMix"     ,  1     , .5 ],
      ["v_rimAudio"     , .1    , .6    ],
      ["v_aoAudio"      , .4    , 1.   ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 20      , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,4],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },

   {
    name:"RAINBOW Fade out",
    startTime:302.3,
    endTime:304.9,
    events:[
      ["v_on"           , 1     , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.4  , 0.0 ],
      ["v_audioDisform" , 4  , 0.0  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 1.1   , 0    ],
      ["v_audioMix"     ,  .5     , 0 ],
      ["v_rimAudio"     , .6    , .1   ],
      ["v_aoAudio"      , 1.    , .4   ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,4,8],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },


/////////////////////////

  {
    name:"Light in Darkness fade in",
    startTime:304.9,
    endTime:305.8,
    events:[
     ["v_on"           , 1      , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , 0.0   , .4 ],
      ["v_audioDisform" , 0.0   , 20.5  ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 0     , 1    ],
      ["v_audioMix"     , 0     , 1 ],
      ["v_rimAudio"     , 0     , 1   ],
      ["v_aoAudio"      , .4    , 1.  ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,8,20],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },

  {
    name:"Light in Darkness fade out",
    startTime:317.9,
    endTime:318.1,
    events:[
      ["v_on"           , 1      , 1     ],
      ["v_bg"           , 0     , 0     ],
      ["v_suckDisform"  , .4   , .3 ],
      ["v_audioDisform" , 20.5   , 4.3 ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 1    , 1    ],
      ["v_audioMix"     , 1     , .6 ],
      ["v_rimAudio"     , 1     , .6   ],
      ["v_aoAudio"      , 0    , 0  ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,20],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],

    ] 
  },


  /////////////////////////


  {
    name:"Pure Light Fade in",
    startTime:318.1,
    endTime:320.5,
    events:[
      ["v_on"           , 1      , 1     ],
      ["v_bg"           , 0     , 1     ],
      ["v_suckDisform"  , .3  , .5 ],
      ["v_audioDisform" , 4.3   , .6 ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 1    , 1    ],
      ["v_audioMix"     , .6     , 0 ],
      ["v_rimAudio"     , .6     , 0   ],
      ["v_aoAudio"      , 0    , 0  ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 0     , 1     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,20,10],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },


{
    name:"Pure Light MORE",
    startTime:335.0,
    endTime:335.1,
    events:[
      ["v_on"           , 1      , 1     ],
      ["v_bg"           , 1     , 1     ],
      ["v_suckDisform"  , .5   , .2 ],
      ["v_audioDisform" , .6   , 20. ],
      ["v_texture"      , 0     , 0     ],
      ["v_project"      , 0     , 0     ],
      ["v_refract"      , 0     , 0    ],
      ["v_rainbow"      , 1    , 1    ],
      ["v_audioMix"     , 0     , 1 ],
      ["v_rimAudio"     , 0     , 1   ],
      ["v_aoAudio"      , 0    , 0  ],
      ["v_endNoise"     , 0     , 0     ],
      ["v_reflRainbow"     , 1     , 1     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,10,5],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },


  /////////////////////////
  {
    name:"KnownUnknown",
    startTime:349.4,
    endTime:349.6,
    events:[
      ["v_on"           , 1      , 1     ],
      ["v_bg"           , 1    , 1     ],
      ["v_suckDisform"  , .2    , .1 ],
      ["v_audioDisform" , 20.   , .5  ],
      ["v_texture"      , 0    , 0     ],
      ["v_project"      , 0    , 0     ],
      ["v_refract"      , 0    , 0    ],
      ["v_rainbow"      , 1    , 1    ],
      ["v_audioMix"     , 1    , 1 ],
      ["v_rimAudio"     , 1    , 1   ],
      ["v_aoAudio"      , 0    , 0  ],
      ["v_endNoise"     , 0    , 1     ],
      ["v_reflRainbow"     , 1     , 0     ],

      ["v_closeLine"     , 100     , 100    ],
      ["v_fullProject"     , 0    , 0     ],

      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,5,3],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },

  {
    name:"Final Fade",
    startTime:407.5,
    endTime:415.6,
    events:[
      ["v_on"           , 1      , 0     ],
      ["v_bg"           , 1    , 0     ],
      ["v_suckDisform"  , .1    , 0 ],
      ["v_audioDisform" , 1   , 0  ],
      ["v_texture"      , 0    , 0     ],
      ["v_project"      , 0    , 0     ],
      ["v_refract"      , 0    , 0    ],
      ["v_rainbow"      , 1    , 1    ],
      ["v_audioMix"     , 1    , 1 ],
      ["v_rimAudio"     , 1    , 1   ],
      ["v_aoAudio"      , 0    , 0  ],
      ["v_endNoise"     , 1    , 1     ],
      ["v_reflRainbow"     , 0     , 0     ],

      ["v_closeLine"     , 100     , 20    ],
      ["v_fullProject"     , 0    , 0     ],


      ["c_x" ,0,0],
      ["c_y" ,0,0],
      ["c_z" ,3,80],


      ["t_x" , 0,0],
      ["t_y" , 0,0],
      ["t_z" , 0,0],
    ] 
  },



   
]